import axios from "axios";
import { byNameURL } from "./config";

export const getCountryByName = async (countryName) => {

    const response = await axios.get(`${byNameURL}${countryName}`);
    return response.data;
};

