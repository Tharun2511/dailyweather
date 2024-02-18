import { NextRequest, NextResponse } from "next/server";
import {cookies} from "next/headers";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
    const token: any = cookies().get("token")?.value;
    if (token) {
        const details = jwt.verify(token, process.env.JWT_SECRET!);
        return NextResponse.json(details, { status: 200 });
    } else {
        return NextResponse.json({ error: "Token not found or invalid token" }, { status: 400 });
    }
} 