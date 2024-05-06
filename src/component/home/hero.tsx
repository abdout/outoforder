"use client";
import React from "react";
import MdButton from "../atom/button/md";
import Image from "next/image";
import Lottie from 'lottie-react';
import animationData from '../../../public/animation/slow.json';
import Brand from "../atom/text/brand";

const Hero = () => {
  return (
    <div className="-mx-24" dir="rtl">
      <div className="md:justify-start md:items-start w-full h-[16rem] md:h-[21rem] px-[120px] pt-10 bg-[#F1F1F1] items-center">
        <div className="md:flex md:justify-center items-center md:items-center md:grid-2 md:gap-40">
          <div>
            <p className="  text-[20px] pl-1 pb-2 font-light text-right">المجتمع اولا</p>
            <h1 className="  word-animation rubik md:text[75px] font-medium text-3xl text-right">
              الحركة الوطنية للبناء والتنمية
            </h1>
            <p className="text-2xl  rubik pt-2 pl-1 leading-[30px] text-right vazirmatn">هي حركة إصلاح اجتماعي وسياسي شامل، <br />تقيم رؤاها وتستقي قيمها من هدي <strong>الدين</strong> </p>
            <div className=" pt-10 pr-1 text-right">
              <MdButton placeholder="طلب عضوية" />
            </div>
          </div>
          <div className="flex-col items-center justify-center hidden md:flex rounded-full w-[15rem] h-[15rem] bg-black relative">
            <Lottie animationData={animationData} style={{ width: 280, height: 280 }} />
            <div className="absolute">
              <Image src="/home/first.png" alt="قلم" width={210} height={40} />
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;