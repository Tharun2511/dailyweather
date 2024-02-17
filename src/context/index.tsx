"use client";
import { createContext, useState } from "react";

type AuthUser = {
    email: string,
    name: string,
    favourites:string[]
}
export type UserContextType = {
    user: AuthUser | null,
    setUser: any,
    location: string,
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
    const [weather, setWeather] = useState<any>(null);
    const [location, setLocation] = useState<string>("Delhi");
    const [favourites, setFavourites] = useState<string[]>([]);
    
    return <UserContext.Provider value={{user, setUser, weather, setWeather, location, setLocation, favourites, setFavourites}}>{children}</UserContext.Provider>
}