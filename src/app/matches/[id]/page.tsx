'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { MatchesResponse } from "@/types/matchesType";
import { getMatches } from "@/services/getMatches";

interface LeaguesContainerCliProps {
    params: {
        id: string;
    }
}

export default function MatchesContainerCli({ params }: LeaguesContainerCliProps) {

    const [matches, setMatches] = useState<MatchesResponse | null>(null);

    useEffect(() => {
        const fetchLeagues = async () => {
            const res = await getMatches({ endpoint: `/competitions/${params.id}/matches` });
            console.log(res);

            setMatches(res);
        }
        fetchLeagues();
    }, [params.id]);

    //function for set border color by id
    function setBorderColor(id: number) {
        switch (id) {
            case 2001:
                return 'border-red-700';
            case 2017:
                return 'border-blue-700';
            case 2015:
                return 'border-green-700';
            case 2002:
                return 'border-yellow-700';
            case 2019:
                return 'border-purple-700';
            case 2014:
                return 'border-orange-700';
            case 2003:
                return 'border-pink-700';
            case 2013:
                return 'border-gray-700';
            default:
                return 'border-red-700';
        }
    }

    return (
        <div className="flex flex-col w-full gap-2 p-6 border-b-4 border-b-red-700 bg-black border-2 border-t-2 border-gray-700  lg:w-[1000px] rounded-xl">
            <h1 className="text-2xl font-bold text-white">Matches - {matches?.competition.name}</h1>
            <hr
                className={`w-full border-2 ${setBorderColor(matches?.competition.id || 2001)}`}
            />
            {
                matches ? (
                    <div className="flex flex-col gap-4">
                        {
                            matches.matches.length > 0 ? (
                                matches.matches.map((match, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-4 border-2 border-gray-700 p-4 rounded-lg"
                                    >
                                        <div className="flex flex-col justify-center items-center gap-4">
                                            <div
                                                className="flex flex-row gap-4 justify-center items-center"
                                            >
                                                <Image
                                                    src={match.homeTeam.crest || '/1.png'}
                                                    alt="Football"
                                                    width={100}
                                                    height={100}
                                                />
                                                vs
                                                <Image
                                                    src={match.awayTeam.crest || '/1.png'}
                                                    alt="Football"
                                                    width={100}
                                                    height={100}
                                                />

                                            </div>

                                            <div className="flex flex-col gap-2 justify-center items-center">
                                                <p className="text-xl font-bold text-white">Matchday: {match.matchday}</p>
                                                <p className="text-xl font-bold text-white">Status: {match.status}</p>
                                                <p className="text-xl font-bold text-white">Home Team: {match.homeTeam.name}</p>
                                                <p className="text-xl font-bold text-white">Away Team: {match.awayTeam.name}</p>
                                                <p className="text-xl font-bold text-yellow-400">Winner: {match.score.winner == "HOME_TEAM" ? match.homeTeam.name : match.score.winner == "AWAY_TEAM" ? match.awayTeam.name : "DRAW"}</p>
                                                <p className="text-xl font-bold text-white">Score: {match.score.fullTime.home} - {match.score.fullTime.away}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p
                                    className="text-2xl font-bold"
                                >No data</p>
                            )
                        }
                    </div>
                ) : (
                    <p
                        className="text-2xl font-bold"
                    >Loading...</p>
                )
            }


        </div>
    )
}