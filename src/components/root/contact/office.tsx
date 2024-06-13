import Image from 'next/image'
import React from 'react'
import { Icon } from "@iconify/react";

const Office = () => {
    return (
        <div className='flex flex-col w-full space-y-6'>
            <div className='flex gap-2 items-center pr-1'>
                <Icon icon='fluent:location-48-regular' width={20} />
                <h5 className='justify-start'>دار الحركة</h5>
            </div>
            <div className='flex gap-14 items-center justify-center'>
                <Image src='/map2.png' alt='' width={140} height={110} className='w-60 h-[10rem]' />
                <div className='flex flex-col gap-3'>
                    <h5>العمارات - شارع 35, الخرطوم - السودان</h5>
                    <h5>info@nmbd.org, 0917150001</h5>
                    <p>ساعات العمل: كل الأسبوع من 4 إلى 10 مساء</p>
                    <p>وقت الذروة: أيام الخميس والجمعة في حدود الساعة 7 مساء</p>
                </div>
            </div>
        </div>
    )
}

export default Office