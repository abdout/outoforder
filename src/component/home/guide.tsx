'use client';
import React from 'react'
import { Icon } from "@iconify/react";

const Guide = () => {
  return (
    <div>
        <p className='pt-1 w-[50rem] text-lg'>
            استكشف الروابط أدناه للدليل المستخدم ومركز المساعدة على التوالي                              
        </p>
        <div className='flex pt-4 gap-8 items-center'>
        <Icon icon={"ph:book-fill"} height="70" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"ant-design:customer-service-filled"} height="70" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        </div>
    </div>
  )
}

export default Guide