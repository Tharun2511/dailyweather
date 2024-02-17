"use client";
import LocationAccessLoader from "@/components/LocationAccessLoader";
import { UserContext } from "@/context";
import { setUserAndCurrentLocation } from "@/helpers/helpers";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const Page = () => {

    const { user, setUser, setFavourites, setWeather, setLocation } =
        useContext(UserContext);
    
    const router = useRouter();
    
    useEffect(() => {
        setUserAndCurrentLocation(
            user,
            setUser,
            setFavourites,
            setWeather,
            setLocation,
            router
        );
    }, []);

    return <LocationAccessLoader />;
};

export default Page;
