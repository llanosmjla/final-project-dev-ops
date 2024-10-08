'use client';
import { Competitions } from '@/types/leaguesType';
import Image from 'next/image';
import Link from 'next/link';


export default function LeagueCard( {competitions} : {competitions: Competitions}) {
    return (
        <div className="relative flex flex-col w-[300px] h-[500px] border-x-4 border-gray-900 gap-0 bg-black/5 rounded-[1rem] justify-center items-center">
            <div
                className="flex justify-center w-full border-t-4 border-r-0 border-l-0 border-red-700 rounded-t-xl"
            >
                <Image
                    src={competitions.emblem || '/1.png' }
                    alt="league"
                    width={200}
                    height={200}
                    className='rounded-t-xl p-2'
                />

            </div>

            <div
                className="w-full flex flex-col p-1 rounded-r-2xl justify-center border-t-gray-900 border-b-4 border-r-2 border-red-700 hover:border-b-4 rounded-b-xl items-center h-full bg-black overflow-hidden z-0 ease-in-out cursor-pointer hover:bg-black/30"
            >
                <div
                    className="flex flex-col gap-2 p-1 justify-center items-center rounded-b-2 rounded-t-lg rounded-r-lg border-r-2 border-t-0 border-red-700 w-full h-full"
                >
                    <div
                        className="flex flex-col gap-2 p-2 justify-center items-center rounded-b-2 rounded-t-xl rounded-r-lg border-r-2 border-t-0 border-red-700 w-full h-full"
                    >
                        <h1 className="text-lg w-48 font-bold text-center rounded-full px-3 border-2 border-gray-50 hover:bg-red-700">
                            {competitions.name}
                        </h1>
                        <p
                            className="text-sm font-medium border-l-4 border-red-700 pl-2"
                        >
                            {competitions.area.name}
                        </p>
                        <div
                            className="flex flex-row gap-4 justify-center items-center"
                        >
                            <p
                                className="text-xs font-medium px-2 bg-red-700 rounded-full"
                            >Start Date</p>
                            <p
                                className="text-xs font-medium px-2 bg-red-700 rounded-full"
                            >End Date</p>
                        </div>
                        <div
                            className="flex w-full p-3 gap-4 justify-center items-center"
                        >
                            <Link
                                href={`/league/${competitions.code}`}
                                className="text-lg font-medium px-2 bg-yellow-500 flex w-full text-center justify-center items-center rounded-full"
                            >
                                <p
                                >
                                    Ver más
                                </p>
                            </Link>
                        </div>
                        <div
                            className="flex flex-row gap-4 justify-center p-4 items-center"
                        >
                            <Link
                                href={`/matches/${competitions.code}`}
                                className="text-lg font-medium px-2 bg-red-600 flex w-full text-center justify-center items-center rounded-full"
                            >
                            
                                Ver Partidos
                            </Link>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}