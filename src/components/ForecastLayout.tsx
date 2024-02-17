import { UserContext } from "@/context";
import Image from "next/image";
import React, { useContext, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { ImLocation } from "react-icons/im";


const ForecastLayout = () => {
    const { location } = useContext(UserContext);
    const [data, setData] = useState([
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
    ]);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="w-auto h-full mt-6 flex justify-center items-center gap-5">
                <ImLocation className="text-3xl text-gray-100" />
                <div className="text-3xl font-semibold text-gray-100">
                    Pune (IN)
                </div>
            </div>
            <div className="w-auto flex justify-center">
                <Accordion allowZeroExpanded>
                    {data.map((item) => (
                        <AccordionItem key={item}>
                            <AccordionItemHeading
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                <AccordionItemButton>
                                    <div className="lg:w-[900px] md:w-[600px] min-w-[330px] h-12 bg-white flex justify-around items-center mt-5 px-5 py-3 rounded-xl">
                                        <div className="text-xl font-medium">
                                            08 Jan 2024
                                        </div>
                                        <div className="text-xl font-medium">
                                            Friday
                                        </div>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="bg-gray-200 w-full h-[100px] rounded-2xl px-8 py-2 flex">
                                    <div className="w-1/3 flex justify-center items-center">
                                        <div className="text-4xl font-semibold">
                                            20&deg; C
                                        </div>
                                    </div>
                                    <div className="w-1/3 flex justify-center items-center">
                                        <Image
                                            src={
                                                "https://openweathermap.org/img/wn/10d@2x.png"
                                            }
                                            alt="Sun"
                                            width={120}
                                            height={100}
                                        />
                                    </div>
                                    <div className="w-1/3 flex flex-col justify-center items-start">
                                        <div className="lg:text-2xl md:text-xl text-lg font-semibold">
                                            Clear sky
                                        </div>
                                        <div className="lg:text-xl md:text-lg text-sm">
                                            The chances of Rain is High
                                        </div>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

export default ForecastLayout
