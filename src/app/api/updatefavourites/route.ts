import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
    try {
        const { email, currFavourites } = await request.json();
        
        const result = await User.findOneAndUpdate({ email }, {
            $set: { favourites: currFavourites },
         }, { new: true });
        return NextResponse.json({ message: "Update success", result });
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}