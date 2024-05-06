"use client";
import React from 'react'
import { Icon } from "@iconify/react";

const Title = (props:
    {
    icon:string
    placeholder: string
}) => {
    return (
        <div className='flex gap-2 items-center' dir="rtl">
            <Icon icon={props.icon} width={30} className="flex-shrink-0" />
            <h1 className='rubik font-blod text-2xl' > {props.placeholder}</h1>
        </div>
    )
}

export default Title