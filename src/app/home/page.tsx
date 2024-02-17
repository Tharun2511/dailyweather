"use client";
import HomeLayout from "@/components/HomeLayout";
import { UserContext } from "@/context";
import { setUserAndCurrentLocation } from "@/helpers/helpers";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Home = () => {
    const { user, setUser, setFavourites, setWeather, setLocation } =
        useContext(UserContext);

    const router = useRouter();

    if (!user) {
        setUserAndCurrentLocation(
            user,
            setUser,
            setFavourites,
            setWeather,
            setLocation,
            router
        );
    }

    return <HomeLayout />;
};

export default Home;
