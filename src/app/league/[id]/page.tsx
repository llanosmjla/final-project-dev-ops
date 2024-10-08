'use client';

import { getLeaguesParams } from "@/services/getLeaguesParams";
import { LeagueParamsResponse } from "@/types/leaguesType";
import { useEffect, useState } from "react";
import Image from 'next/image';

interface LeaguesContainerCliProps {
    params: {
        id: string;
    }
}

export default function LeaguesContainerCli({ params }: LeaguesContainerCliProps) {

    const [leagues, setLeagues] = useState<LeagueParamsResponse | null>(null);

    useEffect(() => {
        const fetchLeagues = async () => {
            const res = await getLeaguesParams({ endpoint: `/competitions/${params.id}` });
            console.log(res);

            setLeagues(res);
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
            <h1 className="text-2xl font-bold text-white">Champions League - {leagues?.name}</h1>
            <hr 
                className={`w-full border-2 ${setBorderColor(leagues?.id || 2001)}`}
            />
            {
                leagues ? (
                    <div className="flex flex-wrap justify-center gap-4">
                        {
                            leagues.seasons.map((league) => (
                                league.winner?.name &&
                                <div key={league.id} className="flex flex-col gap-4 p-4 rounded-lg border-2 border-gray-700">
                                    <h1 className="text-xl font-bold text-white">{league.startDate}</h1>
                                    <p className="text-lg font-bold text-white">{league.endDate}</p>
                                    {
                                        league.winner?.name ? (
                                            <div
                                                className="flex flex-col gap-2 p-1 justify-center items-center rounded-b-2 rounded-t-xl rounded-r-lg border-r-2 border-t-0 border-red-700 w-full h-full"
                                            >
                                                <Image
                                                    src={league.winner?.crest || '/1.png'}
                                                    alt="winner"
                                                    width={200}
                                                    height={200}
                                                />
                                                <p className="text-lg font-bold text-white">{league.winner.name}</p>
                                            </div>
                                        ) : (
                                            <p className="text-lg font-bold text-white">No winner</p>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p
                        className="text-2xl font-bold"
                    >No data</p>
                )
            }
        </div>
    )
}