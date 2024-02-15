import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { email, password } = data;

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
            id: user._id,
            name: user.name,
            password: user.password,
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({
            message: "Login Successfull",
            success: true,
        });

        response.cookies.set("token", token, { httpOnly: true });

        return response;
        
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
