"use client";
import HomeLayout from "@/components/HomeLayout";
import { UserContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const Home = () => {
    const router = useRouter();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!user) {
            router.push("/");
        }
    }, [user]);

    return <HomeLayout />;
};

export default Home;
