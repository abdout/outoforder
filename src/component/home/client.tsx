import React from 'react'
import LgIcon from '../atom/icon/lg'

const icons = [
  { src: '/home/aramco.png', alt: 'Company' },
  { src: '/home/siemens.png', alt: 'Company' },
  { src: '/home/alstom.png', alt: 'Company' },
  { src: '/home/johnson.png', alt: 'Health' },
  { src: '/home/abb.png', alt: 'Scholar' },
  { src: '/home/schneider.png', alt: 'Party' },
  { src: '/home/eaton.png', alt: 'Party' },
];

const Client = () => {
  return (
    <div className='flex flex-col space-y-2 py-12'>
        <p className='px-8 text-xl'>deliver top-notch <strong>automation</strong> solutions to </p>
        <div className='flex items-center justify-center gap-20 pt-4 overflow-hidden'>
            <div className="animate-flow space-x-20 flex-nowrap flex items-center">
                {[...icons, ...icons].map((icon, index) => (
                  <LgIcon key={index} src={icon.src} alt={icon.alt} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Client