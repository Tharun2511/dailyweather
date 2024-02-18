import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Daily Weather",
    description: "Real Time Weather Updates",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} w-full h-full p-2 bg-gradient-to-r from-sky-500 to-cyan-300 md:overflow-hidden overflow-auto`}
            >
                <UserContextProvider>
                    <NavBar />
                    {children}
                    <Toaster position="bottom-left" />
                </UserContextProvider>
            </body>
        </html>
    );
}
