'use server';

import { DataRequest} from "@/types/allType";
import {CountriesResponse } from "@/types/coutryType";
import { Options } from "@/util/Options";



export const getCountries = async ({endpoint}:DataRequest): Promise<CountriesResponse> => {
    try {
        let url = '';
        url = `${process.env.URL_API}/${process.env.VERSION}${endpoint}`;
        const response = await fetch(url, Options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
        
    }
}
