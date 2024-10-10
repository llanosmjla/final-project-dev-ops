'use server';

import { DataRequest} from "@/types/allType";
import {CountriesResponse } from "@/types/coutryType";
import { Options, URL_API, VERSION } from "@/util/Options";




export const getCountries = async ({endpoint}:DataRequest): Promise<CountriesResponse> => {
    try {
        let url = '';
        url = `${URL_API}/${VERSION}${endpoint}`
        const response = await fetch(url, Options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error en la petición");
        
    }
}
