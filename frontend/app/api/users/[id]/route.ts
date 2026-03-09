import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import { adminProtect } from "@/lib/auth";

type Params = Promise<{ id: string }>;

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private/Admin
export async function GET(req: NextRequest, { params }: { params: Params }) {
    const { id } = await params;
    const admin = await adminProtect(req);
    if (!admin) {
        return NextResponse.json({ message: "Not authorized as an admin" }, { status: 401 });
    }

    await connectDB();
    try {
        const user = await User.findById(id).select("-password");
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private/Admin
export async function DELETE(req: NextRequest, { params }: { params: Params }) {
    const { id } = await params;
    const admin = await adminProtect(req);
    if (!admin) {
        return NextResponse.json({ message: "Not authorized as an admin" }, { status: 401 });
    }

    // Prevent admin from deleting themselves
    if (admin._id.toString() === id) {
        return NextResponse.json({ message: "You cannot delete yourself" }, { status: 400 });
    }

    await connectDB();
    try {
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        await User.findByIdAndDelete(id);
        return NextResponse.json({ message: "User removed" });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
