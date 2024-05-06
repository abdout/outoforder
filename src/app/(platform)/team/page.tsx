"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import XlInupt from "@/component/atom/input/xl";

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
        image: "/media/hesham.png",
        name: "علي عبدالله",
        rank: "مبرمج",
        location: "الخرطوم",
        interest: "تطوير البرمجيات",
      },
      {
        image: "/media/hesham.png",
        name: "فاطمة محمد",
        rank: "مهندسة معمارية",
        location: "بورتسودان",
        interest: "تصميم المباني",
      },
      {
        image: "/media/hesham.png",
        name: "محمد علي",
        rank: "محاسب",
        location: "كسلا",
        interest: "المحاسبة المالية",
      },
      {
        image: "/media/hesham.png",
        name: "ريم عثمان",
        rank: "طبيبة",
        location: "القضارف",
        interest: "طب الأطفال",
      },
      {
        image: "/media/hesham.png",
        name: "أحمد محمود",
        rank: "مهندس ميكانيكي",
        location: "الخرطوم",
        interest: "هندسة السيارات",
      },
      {
        image: "/media/hesham.png",
        name: "مريم أحمد",
        rank: "مدرسة",
        location: "الخرطوم",
        interest: "تعليم اللغة الإنجليزية",
      },
      {
        image: "/media/hesham.png",
        name: "أمجد عبدالرحمن",
        rank: "مهندس كهرباء",
        location: "الخرطوم",
        interest: "طاقة متجددة",
      },
      {
        image: "/media/hesham.png",
        name: "أماني عبدالله",
        rank: "مهندسة حاسوب",
        location: "الخرطوم",
        interest: "تطوير تطبيقات الويب",
      },
      {
        image: "/media/hesham.png",
        name: "يوسف عبدالوهاب",
        rank: "مهندس مدني",
        location: "الخرطوم",
        interest: "هندسة الطرق والجسور",
      },
      {
        image: "/media/hesham.png",
        name: "ميادة محمود",
        rank: "مصممة جرافيك",
        location: "جدة، السعودية",
        interest: "تصميم الشعارات",
      },
    ]);

  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  return (

  <div>
    <div className="flex gap-3 items-center w-80 pb-6">
    {/* <Icon icon={"circum:search"} height="35" /> */}
    <Icon icon={"circum:filter"} height="33" />

    </div>
    
    <table className="table-auto w-[50rem]" dir="rtl">
      <thead>
        <tr>
          
          <td className="text-lg font-medium border-b border-black py-2 w-40">الاسم</td>
          <td className="text-lg font-medium border-b border-black py-2 w-40">التخصص</td>
          <td className="text-lg font-medium border-b border-black py-2 w-36">العنوان</td>
          <td className="text-lg font-medium border-b border-black py-2 w-36">الاهتمام</td>
        </tr>
      </thead>
      <tbody>
        {teamMembers.map((member, index) => (
         <tr 
         key={index} 
         className={`border-b ${index === selectedRow ? 'bg-black bg-opacity-50' : ''} hover:bg-gray-100`} 
         onClick={() => setSelectedRow(index)}
       >
         <td className="flex mt-[10px] items-center">
           <div className="mx-1">
             <Image
               className="rounded-full border " 
               src={member.image} alt={member.name} width={35} height={35} />
           </div>
           <div>{member.name}</div>
         </td>
         <td className="py-4">{member.rank}</td>
         <td className="py-4">{member.location}</td>
         <td className="py-4">{member.interest}</td>
       </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TeamList;