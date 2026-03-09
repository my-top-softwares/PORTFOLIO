import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Service from "@/lib/models/Service";
import { adminProtect } from "@/lib/auth";

// @desc    Get single service
// @route   GET /api/services/:id
// @access  Public
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await connectDB();
    try {
        const service = await Service.findById(params.id);
        if (service) {
            return NextResponse.json(service);
        } else {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// @desc    Update a service
// @route   PUT /api/services/:id
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
        const body = await req.json();
        const service = await Service.findByIdAndUpdate(params.id, body, { new: true });
        if (service) {
            return NextResponse.json(service);
        } else {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// @desc    Delete a service
// @route   DELETE /api/services/:id
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
        const service = await Service.findByIdAndDelete(params.id);
        if (service) {
            return NextResponse.json({ message: "Service removed" });
        } else {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
