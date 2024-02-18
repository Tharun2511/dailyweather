"use client";
import { UserContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { ImLocation } from "react-icons/im";
import Image from "next/image";
import { getForecast, toCelcius } from "@/helpers/helpers";
import Loader from "@/components/Loader";

const Forecast = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { user, location } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();
    const [forecast, setForecast] = useState<any[]>([]);
    const [country, setCountry] = useState<string>("");

    useEffect(() => {
        if (!user) {
            router.push("/");
        }
        getForecast(setForecast, location, setCountry, setLoading, router);
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
                            item?.dt_txt.split(" ")[1] === "12:00:00" && (
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
                                                    )[1]}
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
