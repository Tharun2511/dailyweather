"use client";
import HomeLayout from "@/components/HomeLayout";
import Loader from "@/components/Loader";
import { UserContext } from "@/context";
import { gethWeatherByCity, setUserDetails } from "@/helpers/helpers";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const SearchLocation = ({ params }: any) => {
    const router = useRouter();
    const [searchedLocation, setSearchedLocation] = useState<string>(
        params.location
    );
    const { user,setUser, setFavourites, setLocation, setWeather } = useContext(UserContext);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!user) {
            setUserDetails(setUser, setFavourites, router );
        }
        gethWeatherByCity(searchedLocation, setWeather, setLocation, router);
        setLoading(false);
    }, [searchedLocation]);
    
    return loading ? <Loader /> : <HomeLayout />;
};

export default SearchLocation;
