import { Filters } from "./coutryType";

export type Area = {
    id: number;
    name: string;
    code: string;
    flag: string | null;
}


export type CurrentSeason = {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string | null;
}

export type Competitions = {
    id: number;
    area: Area;
    name: string;
    code: string;
    type: string;
    emblem: string | null;
    plan: string;
    currentSeason: CurrentSeason;
    numberOfAvailableSeasons: number;
    lastUpdated: string;
}

export type LeagueResponse = {
    count: number;
    filters: Filters;
    competitions: Competitions[];
}

export type Winner = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string | null;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string;
}


export type CurrentSeasonLeague = {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: Winner | null;
    stages: string[];
}

export type Stages = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string | null;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string;
}


export type LeagueParamsResponse = {
    areas: Area[];
    id: number;
    name: string;
    code: string;
    emblem: string | null;
    currentSeason: CurrentSeasonLeague;
    seasons: CurrentSeasonLeague[];
    lastUpdated: string;
}
