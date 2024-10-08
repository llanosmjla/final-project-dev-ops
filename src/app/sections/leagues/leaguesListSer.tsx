import LeagueCard from "@/app/components/molecules/LeagueCard";
import { getLeagues } from "@/services/getLeagues";


export default async function LeaguesListSer() {
    const data = await getLeagues({endpoint: '/competitions'});
    return (
        <div className="flex flex-col gap-4 border-t-8 border-red-950 p-4 rounded-lg">

            <div className="flex flex-wrap justify-center gap-4">
                {
                    data.competitions.length > 0 ? (
                        data.competitions.map((league) => (
                            <LeagueCard 
                                key={league.id}
                                competitions={league} 
                            />
                        ))
                    ) : (
                        <p
                            className="text-2xl font-bold"
                        >No data</p>
                    )
                }
            </div>
        </div>
    )
}