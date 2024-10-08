import { Result } from "postcss";
import { Area, CurrentSeasonLeague } from "./leaguesType";

export type FilterProps = {
    season: string;
    matchday: string;
}

export type ResultSet = {
    count: number;
    first: string;
    last: string;
    played: number;
}

export type Competitions = {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
}

export type Coach = {
    id: number;
    name: string;
    nationality: string;
}

export type HomeTeam = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    coach: Coach;
    leagueRank: number;
    formation: string;
    lineup: string[];
    bench: string[];
}

export type FullTime = {
    home: number;
    away: number;
}

export type Score = {
    winner: string;
    duration: string;
    fullTime: FullTime;
    halfTime: FullTime;
}

export type Team = {
    id: number;
    name: string;
}

export type Scorer = {
    player: string;
    numberOfGoals: number;
}

export type Goal = {
    minute: number;
    injuryTime: number;
    type: string;
    team: Team;
    scorer: Scorer;
    assist: string | null;
    score: Score;
}

export type Player = {
    id: number;
    name: string;
}

export type Penalties = {
    player: Player;
    team: Team;
    scored: boolean;
}

export type Odds = {
    homeWin: number;
    draw: number;
    awayWin: number;
}


export type Referees = {
    id: number;
    name: string;
    type: string;
    nationality: string;
}

export type DetailsMatch = {
    
}


export type Matches = {
    area: Area;
    competition: Competitions;
    season: CurrentSeasonLeague;
    id: number;
    utcDate: string;
    status: string;
    minute: number;
    injuryTime: number;
    attendance: number | null;
    venue: string;
    matchday: number;
    stage: string;
    group: string | null;
    lastUpdated: string;
    homeTeam: HomeTeam;
    awayTeam: HomeTeam;
    score: Score;
    goals: Goal[];
    penalties: Penalties[];
    bookings: string[];
    substitutions: string[];
    odds: Odds;
    referees: Referees[];
}



export type MatchesResponse = {
    filters: FilterProps;
    resultSet: ResultSet;
    competition: Competitions;
    matches: Matches[];
}

