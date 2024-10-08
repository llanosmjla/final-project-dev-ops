'use client';


import { ChildrenProps } from '@/types/sections/childrenProp';
import React from 'react';



export default function CountriesContainerCli({children}:ChildrenProps) {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg border-2 border-gray-700">
            {children}
        </div>
    )
}