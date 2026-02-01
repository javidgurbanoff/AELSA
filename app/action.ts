"use server";

export async function getWeatherData(city: string){
    try{
        const res = await fetch(`https://home.openweathermap.org/api_keys`)

    } catch (error){
        console.error(error);
    }
}