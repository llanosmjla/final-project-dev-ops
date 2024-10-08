'use client';

import {Country } from "@/types/coutryType";
import { CountriesResponse } from "@/types/coutryType";
import { ArrowBigDownDash, AwardIcon, FileAxis3DIcon} from "lucide-react";
import { useState } from "react";


type CountriesByParentArea = {
    key : string;
    value: Country[];
}

const DropDown = ({ countries }: { countries: CountriesResponse }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index:number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const countriesByParentArea: CountriesByParentArea[] = countries.areas.reduce((acc: CountriesByParentArea[], country: Country) => {
        const existingArea = acc.find((area) => area.key === country.parentArea);

        if (existingArea) {
            existingArea.value.push(country);
        } else {
            acc.push({
                key: country.parentArea,
                value: [country],
            });
        }

        return acc;
    }, []);

    console.log("countriesByParentArea", countriesByParentArea);


    return (
        <div id="accordion-open" data-accordion="open">

            {
                countriesByParentArea.map((country, index) => (
                    <div
                        key={index}
                    >
                        <div
                            id={`accordion-open-heading-${index}`}
                        >
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-3 font-medium rtl:text-right border-x-2 border-t-2 border-red-600 rounded-t-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800/50 dark:border-red-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`accordion-open-body-${index}`}
                            >
                                <span className="flex items-center">
                                    <AwardIcon size={24} />
                                    {country.key || 'Other Areas'}
                                </span>
                                    <ArrowBigDownDash size={24} />
                            </button>
                        </div>
                        <div
                            id={`accordion-open-body-${index}`}
                            className={`p-5 border border-t-2 dark:border-red-700 dark:bg-gray-900/50 ${openIndex === index ? '' : 'hidden'}`}
                            aria-labelledby={`accordion-open-heading-${index}`}
                        >
                            <ol>
                                {
                                    country.value.map((c, i) => (
                                        <li
                                            key={i}
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            {c.name}
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                ))
            }


            <h2 id="accordion-open-heading-3">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-4 font-medium text-gray-200 border-2 border-red-700 hover:bg-gray-300 dark:hover:bg-gray-800 gap-3"
                    
                    aria-expanded={openIndex === 3}
                    aria-controls="accordion-open-body-3"
                >
                    <span className="flex items-center">
                        <FileAxis3DIcon size={24} />
                        <p
                            className="text-xs"
                        >
                            Countries by Continent and Other Areas
                        </p>
                    </span>
                </button>
            </h2>

        </div>
    )
}

export default DropDown;