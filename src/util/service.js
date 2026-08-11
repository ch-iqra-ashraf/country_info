import axios from "axios";
import { byNameURL, randomURL } from "./config";

export const getCountryByName = async (countryName) => {

    const response = await axios.get(`${byNameURL}${countryName}`);
    return response.data;
};

export const getRandomCountry = async () => {
    
        const response = await axios.get(`${randomURL}`);
        return response.data;
    
};