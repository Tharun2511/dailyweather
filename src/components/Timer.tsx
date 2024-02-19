"use client";
import { dateBuilder } from "@/helpers/helpers";
import React, { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        setInterval(() => {
            let currDateTime = new Date();
            let currTime = currDateTime.toLocaleTimeString();
            setTime(currTime);
            setDate(dateBuilder(currDateTime));
        }, 1000);
    }, []);

    return (
        <div className="bg-white w-full h-auto flex justify-center min-w-72 rounded-3xl shadow-lg shadow-gray-200/50">
            <div className="p-4 flex flex-col gap-2">
                <div className="text-4xl">{time}</div>
                <div className="text-lg">{date}</div>
            </div>
        </div>
    );
};

export default Timer;
