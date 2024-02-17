import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { name, email, password } = data;

        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return NextResponse.json(
                { error: "Email already in use" },
                { status: 400 }
            );
        }

        const userExists = await User.findOne({ name });
        if (userExists) {
            return NextResponse.json(
                { error: "Username already exists" },
                { status: 400 }
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
        }).save();

        const tokenData = {
            name: name,
            email: email,
            favourites: []
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({
            message: token,
            success: true,
            data:tokenData
        });

        response.cookies.set("token", token, { httpOnly: true });

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
