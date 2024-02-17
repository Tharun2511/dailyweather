"use client";
import CurrentLocationAccess from "@/components/CurrentLocationAccess";
import { UserContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CurrentLocation = () => {
    const { setWeather, setLocation } = useContext(UserContext);
    const router = useRouter();

    const getCurrentLocation = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async ({ coords }) => {
                const { data } = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=98fa4b6ab5647ebf9cdd6c9ea65ab1bc`
                );
                setWeather(data);
                setLocation(data.name);
                toast.success("Location Detected successfully");
                router.push("/home");
            });
        } else {
            toast.error(
                "Geolocation is not supported or permissions was denied!"
            );
        }
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);
    return (
        <div>
            <CurrentLocationAccess />
        </div>
    );
};

export default CurrentLocation;
