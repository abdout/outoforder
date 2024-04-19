import React from "react";
import MdButton from "../atom/button/md";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="-mx-24">
      <div className="md:justify-start md:items-start w-full h-[17rem] md:h-[22rem] px-[120px] pt-10 bg-[#F1F1F1] items-center">
        <div className="md:flex md:justify-center md:items-center md:grid-2 md:gap-40">
          <div>
            <p className="text-[20px] pl-1 pb-2 font-light">business automation</p>
            <h1 className="font-rubick md:text[120px] font-medium text-7xl pb-4">
              Databayt
            </h1>
            <p className="text-[20px] leading-[28px]"><strong>Automate</strong> the Boring, Elevate the Extraordinary. <br /> Bye bye to mundane tasks, hello to streamlined success.</p>
            <div className="pr-[70px] pt-6 ">
              <MdButton placeholder="Get started"/>
            </div>
          </div>
          <div className="fflex flex-col items-center justify-center hidden md:flex rounded-full w-[16rem] h-[16rem] bg-black">
            <Image src="/pencil.png" alt="Pencil" width={180} height={40} className="filter text-red-500"/>
            <Image src="/memory.png" alt="Memory" width={180} height={40}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
