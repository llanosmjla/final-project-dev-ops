'use client';


import { ChildrenProps } from '@/types/sections/childrenProp';
import React from 'react';



export default function LeaguesContainerCli({children}:ChildrenProps) {
    return (
        <div className="flex flex-col w-full gap-2 bg-black border-2 border-t-2 border-gray-700  lg:w-[1000px] rounded-xl">
            {children}
        </div>
    )
}