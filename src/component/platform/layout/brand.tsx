// Brand.tsx
import SmIcon from '@/component/atom/icon/sm'
import React from 'react'

const Brand = () => {
  return (
    <div className='flex gap-3 items-center'>
      <div className="flex-shrink-0 pr-1 rounded-full">
        <SmIcon src='/home/article/nm.png' alt='logo' path='/main' />
      </div>
      <h2 className="opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">الحركة</h2>
    </div>
  )
}

export default Brand