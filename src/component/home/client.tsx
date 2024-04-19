import React from 'react'
import LgIcon from '../atom/icon/lg'

const Client = () => {
  return (
    <div className='flex flex-col space-y-2 py-12'>
        <p className='px-8 text-xl'>deliver top-notch <strong>automation</strong> solutions to </p>
        <div className='flex items-center justify-center gap-20 pt-4'>
            <LgIcon src = '/aramco.png' alt = 'Company'  />
            <LgIcon src = '/johnson.png' alt = 'Health'  />
            <LgIcon src = '/abb.png' alt = 'Scholar'  />
            <LgIcon src = '/schneider.png' alt = 'Party'  />
            <LgIcon src = '/eaton.png' alt = 'Party'  />

        </div>
    </div>
  )
}

export default Client