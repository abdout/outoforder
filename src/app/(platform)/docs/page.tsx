"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

const labels = [
  { lineOne: 'البيان', lineTwo: 'التأسيسي', link: 'docs/paper' },
  { lineOne: 'المقدمات', lineTwo: 'والمقولات', link: '/path2' },
  { lineOne: 'السياسة', lineTwo: 'وبناء الدولة', link: '/path3' },
  { lineOne: 'المرجعيات ', lineTwo: ' والاهداف', link: '/path4' },
  { lineOne: 'التنمية والعدالة', lineTwo: ' الاجتماعية', link: '/path4' },
  { lineOne: 'الاصلاح الثقافي', lineTwo: ' والجتماعي', link: '/path4' },
];
  
const Paper = () => {
  return (
    <div>
      <h1 className="rubik text-2xl "dir="rtl">أوراق الحركة</h1>
      <div className=" grid grid-cols-4 gap-x-60 gap-y-11 pt-6" dir="rtl">
        {labels.map((label, index) => (
          <Link href={label.link} key={index} className="border-[1.5px] w-48 border-gray-500 p-8 justify-center items-center opacity-70 hover:opacity-100 hover:border-black hover:border-[1.5px] text-center">
            <p className="font-medium text-xl  leading-7">{label.lineOne}</p>
            <p className="font-medium  text-xl leading-7">{label.lineTwo}</p>
          </Link>
        ))}
          <button
        className="p-6 border-[1.5px]  w-48  flex flex-col items-center justify-center hover:border-black opacity-80 hover:opacity-100"
        onClick={() => ("")}
      >
        <Icon icon="ph:plus-thin" width={70} />
      </button>
      </div>
        
      </div>
    )
  }
  
  export default Paper