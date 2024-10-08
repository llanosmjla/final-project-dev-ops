import Image from "next/image";
import CountriesContainerCli from "./sections/countries/CountriesContainerCli";
import CountriesListSer from "./sections/countries/CountriesListSer";
import LeaguesContainerCli from "./sections/leagues/leaguesContainerCli";
import { Suspense } from "react";
import { getCountries } from "@/services/getCountries";
import LeaguesListSer from "./sections/leagues/leaguesListSer";

export default async function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center p-4 gap-2 font-[family-name:var(--font-geist-sans)] bg-[url('/1.png')] bg-contain bg-center bg-no-repeat">
       
        <CountriesContainerCli>
          <p className="text-2xl font-bold">Countries</p>
          <Suspense fallback={<p>Loading...</p>}>
            <CountriesListSer />
          </Suspense>
        </CountriesContainerCli>

        <LeaguesContainerCli>
          <p className="text-2xl p-4 font-bold">Leagues</p>
           <LeaguesListSer />
        </LeaguesContainerCli>

      
    </div>
  );
}

export const revalidate = 3600; // 1 hour
