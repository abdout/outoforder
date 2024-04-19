import React from 'react'
import LgIcon from '../atom/icon/lg'

const Client = () => {
  return (
    <div className='flex flex-col space-y-2 py-12'>
        <p className='px-8 text-xl'>deliver top-notch <strong>automation</strong> solutions to </p>
        <div className='flex items-center justify-center gap-20 pt-4'>
            <LgIcon src = '/home/aramco.png' alt = 'Company'  />
            <LgIcon src = '/home/johnson.png' alt = 'Health'  />
            <LgIcon src = '/home/abb.png' alt = 'Scholar'  />
            <LgIcon src = '/home/schneider.png' alt = 'Party'  />
            <LgIcon src = '/home/eaton.png' alt = 'Party'  />

        </div>
    </div>
  )
}

export default Client