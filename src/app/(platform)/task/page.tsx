"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface TeamMember {
  image: string;
  name: string;
  rank: string;
  location: string;
  interest: string;
}

const TeamList: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    
      {
        task: "عناوين الناظر ترك ",
        project: "الميثاق الاجتماعي ",
        image: "/home/media/hesham.png",
        status: "انتهي",
        color: "bg-green-600",
        time: "يومين ",
      },
      {
        task: "مواعيد الناظر ترك ",
        project: "الميثاق الاجتماعي ",
        image: "/home/media/hesham.png",
        status: "انتهي",
        color: "bg-green-600",
        time: "يومين ",
      },
      {
        task: "دراسة بودكاست ثمانية",
        project: "بودكاست مجتمع ",
        image: "/home/media/hesham.png",
        status: "انتهي",
        color: "bg-yellow-400",
        time: "يومين ",
      },
      {
        task: "  انشاء القطاع التقني  ",
        project: "أتمتة الحركة",
        image: "/home/media/hesham.png",
        status: "انتهي",
        color: "bg-red-600",
        time: "يومين ",
      },
    ]);

  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  return (

  <div>
    <div className="flex gap-4 items-center w-80 pb-6">
    {/* <Icon icon={"circum:search"} height="35" /> */}
    <Icon icon={"circum:filter"} height="33" />
    <div className="flex justify-start">
    <button
      className=" m-1 border-[1.2px] border-black"
      onClick={() => (null)}
    >
      <Icon icon="ph:plus-thin" width={24}/>
    </button>
  </div>

    </div>
    
    <table className="table-auto w-[50rem]" dir="rtl">
      <thead>
        <tr>
          
          <td className="text-lg font-medium border-b border-black py-2 w-40">المهمة</td>
          <td className="text-lg font-medium border-b border-black py-2 w-40">المشروع</td>
          <td className="text-lg font-medium border-b border-black py-2 w-36">الفريق</td>
          <td className="text-lg font-medium border-b border-black py-2 w-36">الحالة</td>
          <td className="text-lg font-medium border-b border-black py-2 w-36">المدة</td>
        </tr>
      </thead>
      <tbody>
        {teamMembers.map((member, index) => (
         <tr 
         key={index} 
         className={`border-b ${index === selectedRow ? 'bg-black bg-opacity-50' : ''} hover:bg-gray-100`} 
         onClick={() => setSelectedRow(index)}
       >
        <td className="py-4">{member.task}</td>
        <td className="py-4">{member.project}</td>
         <td className="py-4">
           <div className="mx-1">
             <Image
               className="rounded-full border " 
               src={member.image} alt={member.name} width={35} height={35} />
           </div>
           
         </td>
         <td className="py-4">
         <div className={`rounded-full ${member.color} mr-3 w-[16px] h-[16px] md:w-[14px] md:h-[14px]`}></div>
          </td>
         <td className="py-4">{member.time}</td>
         
       </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TeamList;