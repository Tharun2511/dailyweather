"use client";
import HomeLayout from "@/components/HomeLayout";
import Loader from "@/components/Loader";
import { UserContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const SearchLocation = ({ params }: any) => {
    const[searchedLocation, setSearchedLocation] = useState<string>(params.location);
    const { setLocation, setWeather } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const getWeather = async () => {
        try {
            const { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchedLocation}&appid=98fa4b6ab5647ebf9cdd6c9ea65ab1bc`
            );

            setWeather(data);
            setLocation(data.name);
            toast.success("Weather fetched successfully");
        } catch (error) {
            toast.error("Failed to fetch data or Invalid Location");
            router.push("/home");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getWeather();
    }, [searchedLocation]);
    return <HomeLayout />;
};

export default SearchLocation;
