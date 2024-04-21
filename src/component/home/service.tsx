import React from 'react'
import XlIcon from '../atom/icon/xl'
import Link from 'next/link'

const Service = () => {
  return (
    <div className='flex flex-col space-y-4 pt-8'>
        <p className='px-8 text-2xl'>We <strong>automate</strong> companies, healthcare, education, parties and beyond.</p>
        <div className='flex items-center justify-center gap-20 pt-4'>
          <Link href='https://eco.databayt.org/home'>
            <XlIcon src = '/home/company.png' alt = 'Company' path='https://eco.databayt.org/home' />
          </Link>
            <XlIcon src = '/home/health.png' alt = 'Health' path='' />
            <XlIcon src = '/home/scholar.png' alt = 'Scholar' path='' />
            <XlIcon src = '/home/party.png' alt = 'Party' path='' />

        </div>
    </div>
  )
}

export default Service