import React from 'react'
import XlIcon from '../atom/icon/xl'

const Sector = () => {
  return (
    
      <div className='flex flex-col items-center justify-center space-y-4 pt-8'>
        <p className='px-8 text-2xl'>Select a <strong>sector</strong>.</p>
        <div className='flex items-center justify-center gap-20 pt-4'>
          <XlIcon src='/home/company.png' alt='Company' path='' />
          <XlIcon src='/home/health.png' alt='Health' path='' />
          <XlIcon src='/home/scholar.png' alt='Scholar' path='' />
          <XlIcon src='/home/party.png' alt='Party' path='' />
        </div>
      </div>
    
  )
}

export default Sector