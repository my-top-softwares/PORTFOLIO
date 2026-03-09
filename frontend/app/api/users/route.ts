import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import { adminProtect } from "@/lib/auth";

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export async function GET(req: NextRequest) {
    const admin = await adminProtect(req);
    if (!admin) {
        return NextResponse.json({ message: "Not authorized as an admin" }, { status: 401 });
    }

    await connectDB();
    try {
        const users = await User.find({}).select("-password");
        return NextResponse.json(users);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
