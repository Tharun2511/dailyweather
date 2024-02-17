"use client";
import { UserContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { ImLocation } from "react-icons/im";
import Image from "next/image";
import { toCelcius } from "@/helpers/helpers";
import Loader from "@/components/Loader";

const Forecast = () => {
    const [loading, setLoading] = useState(true);
    const { location } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const Router = useRouter();
    const [forecast, setForecast] = useState([]);
    const [country, setCountry] = useState("");
    const timeIndex = [4, 12, 20, 28, 36];

    const getForecast = async () => {
        try {
            var { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=98fa4b6ab5647ebf9cdd6c9ea65ab1bc`
            );
            setForecast(data.list);
            setCountry(data.city.country);
            setLoading(false)
        } catch (error) {
            toast.error("Something went wrong");
            Router.push("/home");
        }
    };

    useEffect(() => {
        getForecast();
    }, []);
    
    return loading ? (
        <Loader />
    ) : (
        <div>
            <div className="w-auto h-full mt-6 flex justify-center items-center gap-5">
                <ImLocation className="text-3xl text-gray-100" />
                <div className="text-3xl font-semibold text-gray-100">
                    {`${location}, ${country}`}
                </div>
            </div>
            <div className="w-auto flex justify-center">
                <Accordion allowZeroExpanded>
                    {forecast?.map(
                        (item: any, index: number) =>
                            timeIndex.includes(index) && (
                                <AccordionItem key={index}>
                                    <AccordionItemHeading
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                    >
                                        <AccordionItemButton>
                                            <div className="lg:w-[700px] md:w-[600px] min-w-[330px] h-12 bg-white flex justify-around items-center mt-5 px-5 py-3 rounded-xl">
                                                <div className="text-xl font-medium">
                                                    {item?.dt_txt.split(" ")[0]}
                                                </div>
                                                <div className="text-xl font-medium">
                                                    {item?.dt_txt.split(
                                                        " "
                                                    )[1] + " PM"}
                                                </div>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="bg-gray-200 lg:w-[700px] h-[100px] rounded-2xl px-8 py-2 flex">
                                            <div className="w-1/3 flex justify-center items-center">
                                                <div className="lg:text-4xl md:text-3xl text-xl font-semibold">
                                                    {`${toCelcius(
                                                        item.main?.temp
                                                    )}° C`}
                                                </div>
                                            </div>
                                            <div className="w-1/3 flex justify-center items-center">
                                                <Image
                                                    src={`https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}
                                                    alt="icon"
                                                    width={120}
                                                    height={100}
                                                />
                                            </div>
                                            <div className="w-1/3 flex flex-col justify-center items-start">
                                                <div className="lg:text-2xl md:text-xl text-lg font-semibold">
                                                    {item.weather[0]?.main}
                                                </div>
                                                <div className="lg:text-xl md:text-lg text-sm">
                                                    {
                                                        item.weather[0]
                                                            ?.description
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                    )}
                </Accordion>
            </div>
        </div>
    );
};

export default Forecast;
