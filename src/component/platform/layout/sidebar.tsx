import React from 'react'
import Brand from './brand'
import Item from './item'

const Sidebar = () => {
  return (
    <div className="fixed h-screen mt-[-48px] bg-gray-100 transition-all duration-200 ease-in-out w-16 hover:w-[11rem] group">
      <div className="pr-4 pt-6">
        <Brand />
      </div>
      <div className="mt-8">
        <Item />
      </div>
    </div>
  )
}

export default Sidebar