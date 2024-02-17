import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const middleware = async(request: NextRequest) => {
    const path = request.nextUrl.pathname;
    const pathPublic = path === "/login" || path === "/signup";
    const token = request.cookies.get("token")?.value || "";


    if (pathPublic && token) {
        console.log("redirecting", token);
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (!pathPublic && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
};

export const config = {
    matcher: ["/", "/login", "/signup", "/forecast"],
};

export default middleware;