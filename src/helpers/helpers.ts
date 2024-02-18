import axios from "axios";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

export const setUserDetails = async (
    setUser: any,
    setFavourites: any,
    router: any
) => {
    try {
        const { data } = await axios.get("/api/user");
        setUser({
            name: data.name,
            email: data.email,
            favourites: [...data.favourites],
        });
        setFavourites(data.favourites);
    } catch (error) {
        router.push("/login");
    }
};

export const setUserAndCurrentLocation = async (
    user: any,
    setUser: any,
    setFavourites: any,
    router: any,
    setWeather: any,
    setLocation: any,
) => {
    if (!user) {
        setUserDetails(setUser, setFavourites, router);
    }
    if (navigator.geolocation) {
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
        toast.error("Geolocation is not supported or permissions was denied!");
    }
};

export const gethWeatherByCity = async (
    city: string,
    setWeather: any,
    setLocation: any,
    router: any
) => {
    try {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98fa4b6ab5647ebf9cdd6c9ea65ab1bc`
        );

        setWeather(data);
        setLocation(data.name);
        toast.success("Weather fetched successfully");
    } catch (error) {
        toast.error("Invalid Location or Failed to fetch location data");
        router.push("/home");
    }
};

export const gethWeatherByCoord = async (lat: number, lon: number) => {
    try {
        const data = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=98fa4b6ab5647ebf9cdd6c9ea65ab1bc`
        );
        console.log(data);
        return NextResponse.json({ message: "succes", data: data });
    } catch (error: any) {
        toast.error("Fetching weather of the current location failed");
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
};

export const getForecast = async (
    setForecast: any,
    location: string,
    setCountry: any,
    setLoading: any,
    router: any
) => {
    try {
        var { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=98fa4b6ab5647ebf9cdd6c9ea65ab1bc`
        );
        setForecast(data.list);
        setCountry(data.city.country);
    } catch (error) {
        toast.error("Something went wrong");
        router.push("/home");
    } finally {
        setLoading(false);
    }
};

export const changeFavourite = async (
    setLoading: any,
    setisFavourite: any,
    favourites: any,
    setFavourites: any,
    setUser: any,
    user: any,
    location: any,
    isFavourite: any
) => {
    setLoading(true);
    if (favourites.length === 4) {
        toast.error("You can't add more than 4 favourites");
        setLoading(false);
        return;
    }

    isFavourite
        ? favourites.splice(favourites.indexOf(location), 1)
        : favourites.push(location);

    try {
        const result = await axios.post("/api/updatefavourites", {
            email: user?.email,
            favourites,
        });
        setUser({ ...user, favourites: favourites });
        setFavourites(favourites);
        setisFavourite(!isFavourite);
        toast.success(
            `${
                isFavourite ? "Removed from favourites" : "Addded to favourites"
            }`
        );
    } catch (error) {
        toast.error("Failed to set location as favourite");
    } finally {
        setLoading(false);
    }
};

export const goToLocation = (
    searchLocation: string,
    setSearchLocation: any,
    router: any,
    location: string,
) => {
    if (
        location ===
        searchLocation.charAt(0).toUpperCase() + searchLocation.slice(1)
    )
        return;
    else router.push(`/home/${searchLocation}`);
    setSearchLocation("");
};

export const toCelcius = (temp: number) => {
    return Math.round((temp - 273.15) * 100) / 100;
};
export const toFahrenheit = (temp: number) => {
    return Math.round((((temp - 273.15) * 9) / 5 + 32) * 100) / 100;
};

export const unixTimeToDate = (unixTime: number) => {
    const date = new Date(unixTime * 1000);
    const hours: any = date.getHours();
    const minutes: any = "0" + date.getMinutes();
    const seconds: any = "0" + date.getSeconds();
    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
};

export const dateBuilder = (d: Date) => {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
};
