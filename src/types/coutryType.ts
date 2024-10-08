export type Country = {
    id: number;
    name: string;
    countryCode: string;
    flag: string | null;
    parentAreaId: number;
    parentArea: string;
}

export type Filters = {
    areas: number[];
}

export type CountriesResponse = {
    count: number;
    filters: Filters;
    areas: Country[];
}

