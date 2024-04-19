import MdIcon from '@/component/atom/icon/md'
import React from 'react'

const Contribute = () => {
  return (
    <div className='flex flex-col space-y-2 items-center justify-center'>
        <p className="text-[16px] font-light tracking-wider pb-4">
          To <strong>contribute</strong>, you may track the ongoing development by reviewing the Design, Source
          Code, <br/>Discussion and Roadmap on Figma, GitHub, Discord, and
          Readme, respectively.
        </p>
        <div className="flex gap-6 items-center">
          <MdIcon
            src="/contribute/figma.png"
            alt="Figma"
            path="https://www.figma.com/file/pAkG4vBJ7t6iZfsvumbRMI/Databayt?type=design&node-id=0%3A1&mode=design&t=EN4ApP1h6DVPiNFA-1"
          />
          <MdIcon
            src="/contribute/github.png"
            alt="Github"
            path="https://github.com/abdout/beta"
          />
          <MdIcon
            src="/contribute/discord.png"
            alt="Discord"
            path="https://discord.gg/uPa4gGG62c"
          />
          <MdIcon
            src="/contribute/readme.png"
            alt="Readme"
            path="/readme"
          />
        </div>
    </div>
  )
}

export default Contribute