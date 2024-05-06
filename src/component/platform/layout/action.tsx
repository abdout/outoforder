"use client";
import React from "react";
import { Icon } from "@iconify/react";
import XlIcon from "@/component/atom/icon/xl";
import { usePathname } from "next/navigation";



const Action = () => {
 

  return (
    <>
      <div className="flex gap-8 items-center">
       
        <div>
          <h1>البيان التأسيسي</h1>
          <h2>الامانة العامة</h2>
          <h4>اخر تحديث: 14 ابريل 2024</h4>
          <h4 className="pb-3">7 دقائق قراءة</h4>
        </div>
      </div>
      <div className="flex gap-6 border-b border-gray-400 py-2 pb-4 w-[50rem]">
        <button className="flex w-32 gap-1 bg-gray-100 border border-gray-400 px-3 py-2 hover:bg-[#2a2a2a] hover:text-[#fcfcfc]">
          <Icon icon={"system-uicons:check"} height="24" />
          <h4>اعتماد</h4>
        </button>
        <button className="flex w-32 justify-center items-center gap-2 bg-gray-100 border border-gray-400 px-3 py-2 hover:bg-[#2a2a2a] hover:text-[#fcfcfc]">
          <Icon icon={"fluent:edit-48-regular"} height="16" />
          <h4>تعديل</h4>
        </button>
        <button className="flex w-32 justify-center items-center gap-2 bg-gray-100 border border-gray-400 px-3 py-2 hover:bg-[#2a2a2a] hover:text-[#fcfcfc]">
          <Icon icon={"bi:send"} height="16" />
          <h4>ارسال</h4>
        </button>
        <button
          
          className=" flex w-32 justify-center items-center gap-2 bg-gray-100 border border-gray-400 px-3 py-2 hover:bg-[#2a2a2a] hover:text-[#fcfcfc]"
        >
          <Icon icon={"clarity:download-line"} height="18" />
          <h4>تنزيل</h4>
        </button>
      </div>
    </>
  );
};

export default Action;
