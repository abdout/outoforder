import React from "react";
import MdButton from "../atom/button/md";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="-mx-24">
      <div className="md:justify-start md:items-start w-full h-[17rem] md:h-[23rem] px-[120px] pt-10 bg-[#F1F1F1] items-center">
        <div className="md:flex md:justify-center md:items-center md:grid-2 md:gap-32">
          <div>
            <p className="text-[24px] pl-1 pb-2 font-light">business automation</p>
            <h1 className="word-animation font-rubik md:text[120px] font-medium text-7xl pb-4">
              <span>D</span>
              <span>a</span>
              <span>t</span>
              <span>a</span>
              <span>b</span>
              <span>a</span>
              <span>y</span>
              <span>t</span>
            </h1>
            <p className="text-[20px] leading-[28px]"><strong>Automate</strong> the Boring, Elevate the Extraordinary. <br /> Bye bye to mundane tasks, hello to streamlined success.</p>
            <div className="pr-[70px] pt-6 ">
              <MdButton placeholder="Get started" />
            </div>
          </div>
          <div className="flex-col items-center justify-center hidden md:flex rounded-full w-[18rem] h-[18rem] bg-black">
            <Image src="/home/pencil.png" alt="Pencil" width={180} height={40} />
            <Image src="/home/memory.png" alt="Memory" width={180} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
