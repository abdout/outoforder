import React from 'react'
import XlIcon from '../atom/icon/xl'

const Service = () => {
  return (
    <div className='flex flex-col space-y-4 pt-8'>
        <p className='px-8 text-xl'>We <strong>automate</strong> companies, healthcare, education, parties and beyond.</p>
        <div className='flex items-center justify-center gap-20 pt-4'>
            <XlIcon src = '/company.png' alt = 'Company' path='' />
            <XlIcon src = '/health.png' alt = 'Health' path='' />
            <XlIcon src = '/scholar.png' alt = 'Scholar' path='' />
            <XlIcon src = '/party.png' alt = 'Party' path='' />

        </div>
    </div>
  )
}

export default Service