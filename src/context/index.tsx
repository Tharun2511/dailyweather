"use client";
import { createContext, useState } from "react";

type AuthUser = {
    email: string,
    name: string,
    favourites:string[]
}
export type UserContextType = {
    user: any,
    setUser: any,
    longitude: number,
    setLongitude:any,
    latitude:number,
    setLatitude: any,
    location: any,
    setLocation: any,
    favourites: string[],
    setFavourites: any,
    weather: any,
    setWeather:any
}

type UserContextProviderType = {
    children: React.ReactNode;
}

export const UserContext = createContext({} as UserContextType);


export const UserContextProvider = ({ children }: UserContextProviderType) => {
    
    const [user, setUser] = useState<AuthUser | null>(null);
    const [latitude, setLatitude] = useState<number|any>(0);
    const [longitude, setLongitude] = useState<number | any>(0);
    const [weather, setWeather] = useState<any>(null);
    const [location, setLocation] = useState<any>(null);
    const [favourites, setFavourites] = useState<string[]>([]);
    
    return <UserContext.Provider value={{user, setUser, latitude, setLatitude, longitude, setLongitude, weather, setWeather, location, setLocation, favourites, setFavourites}}>{children}</UserContext.Provider>
}