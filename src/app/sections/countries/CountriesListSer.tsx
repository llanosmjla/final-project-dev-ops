
import DropDown from "@/app/components/organisms/DropDown";
import { getCountries } from "@/services/getCountries";


export default async function CountriesListSer() {
    const data = await getCountries({endpoint: '/areas'});
    console.log("Data countries", data);

    return (

        <div className="flex flex-col gap-4 p-2">
            {
                data.areas.length > 0 ? (
                    <DropDown countries={data} />
                ) : (
                    <p
                        className="text-2xl font-bold"
                    >No data</p>
                )
            }
        </div>
    );
}
