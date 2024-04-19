'use client';
import React from 'react'
import MdIcon from '../atom/icon/md'
import { Icon } from "@iconify/react";

const Footer = () => {
  return (

    <div className="-mx-24 mt-14">
      <div className="flex flex-col w-full h-[p7rem] px-[p20px] pt-5 bg-black  items-center text-right p-4">
        <p className='text-white pt-4 opacity-85 hover:opacity-p00 transition-opacity duration-200'>
          <strong>Databayt</strong> - An open source, publicly traded entity that aim to be the go-to destination for businesses seeking automation solutions.
        </p>
        <p className="text-white text-center opacity-85 hover:opacity-p00 transition-opacity duration-200">
          Home
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Contact
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Contrbuite
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Community
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Company
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Health
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Education
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Party
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Tool
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Club
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Code of conduct
          <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
          Terms of use
        </p>

        <div className='flex items-center justify-center gap-6 fill-current pt-8'>
          <Icon icon={"akar-icons:github-fill"} height="50" color="white" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"pajamas:discord"} height="55" color="white" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"bi:linkedin"} height="45" color="white" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"formkit:youtube"} height="53" color="white" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"bi:facebook"} height="50" color="white" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"cib:messenger"} height="50" color="white" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
          <Icon icon={"akar-icons:twitter-fill"} height="53" color="white" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
        </div>

        <p className='flex text-white items-center space-x-8 pt-8 pb-4 opacity-85 hover:opacity-100 transition-opacity duration-200 '>
          Databayt
          <Icon icon={"ph:copyright-light"} height="20" color="white" />
          all rights free
        </p>
      </div>
    </div>
  )
}

export default Footer

