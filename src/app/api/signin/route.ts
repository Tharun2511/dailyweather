import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "Email does not exists" },
                { status: 400 }
            );
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return NextResponse.json(
                {
                    error: "Invalid Passowrd",
                },
                { status: 400 }
            );
        }

        const tokenData = {
            name: user.name,
            email: user.email,
            favourites: user.favourites,
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({
            message: token,
            success: true,
            data: tokenData,
        });

        response.cookies.set("token", token, { httpOnly: true });

        return response;
        
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
