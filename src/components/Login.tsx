"use state";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const Router = useRouter();

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await axios.post("/api/signin", user);
            toast.success("Sign in Successfull");
            Router.push("/");
        } catch (error: any) {
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email && user.password && user.password.length >= 8) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="w-full h-full flex justify-center items-center mt-10">
            <div className="w-[450px] h-[450px] relative md:block hidden">
                <Image
                    src="https://source.unsplash.com/random?nature"
                    alt="Login Cover"
                    fill
                />
            </div>
            <div className="lg:w-[450px] w-full h-[450px] px-8 bg-white flex flex-col items-center">
                <div className="text-4xl font-semibold py-10">Sign in</div>
                <form className="w-full flex flex-col justify-center py-5 gap-5">
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                        }}
                        className="w-full h-[40px] text-lg focus:outline-none border-b-2 border-gray-400 focus:border-sky-400 focus:text-sky-400 focus:placeholder:text-sky-400 focus:text-xl shadow-lg shadow-gray-200/40 focus:shadow-sky-200/20 transition-all duration-500"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                        className="w-full h-[40px] text-lg focus:outline-none border-b-2 border-gray-400 focus:border-sky-400 focus:text-sky-400 focus:placeholder:text-sky-400 focus:text-xl shadow-lg shadow-gray-200/40 focus:shadow-sky-200/20 transition-all duration-500"
                    />
                    <button
                        className={`w-full h-14 mt-5 flex justify-center items-center text-2xl font-medium text-white rounded-xl ${
                            buttonDisabled
                                ? "bg-gray-400 pointer-events-none"
                                : "bg-sky-400 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-600 hover:to-sky-500 transition-all duration-300"
                        }`}
                        onClick={onSubmit}
                    >
                        {loading ? <ClipLoader color="white" /> : "SIGNUP"}
                    </button>
                </form>
                <div className="w-full py-5 flex justify-around items-center text-lg">
                    <div>Don&apos;t have an account?</div>
                    <Link
                        href={"/signup"}
                        className="text-sky-500 underline hover:text-purple-700 cursor-pointer font-semibold"
                    >
                        SIGN UP
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
