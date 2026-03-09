import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Message from "@/lib/models/Message";
import { adminProtect } from "@/lib/auth";

// @desc    Update a message status (mark as read)
// @route   PUT /api/messages/:id
// @access  Private/Admin
export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const admin = await adminProtect(req);
    if (!admin) {
        return NextResponse.json({ message: "Not authorized as an admin" }, { status: 401 });
    }

    await connectDB();
    try {
        const message = await Message.findById(params.id);
        if (message) {
            message.isRead = !message.isRead;
            await message.save();
            return NextResponse.json(message);
        } else {
            return NextResponse.json({ message: "Message not found" }, { status: 404 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// @desc    Delete a message
// @route   DELETE /api/messages/:id
// @access  Private/Admin
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const admin = await adminProtect(req);
    if (!admin) {
        return NextResponse.json({ message: "Not authorized as an admin" }, { status: 401 });
    }

    await connectDB();
    try {
        const message = await Message.findByIdAndDelete(params.id);
        if (message) {
            return NextResponse.json({ message: "Message removed" });
        } else {
            return NextResponse.json({ message: "Message not found" }, { status: 404 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
