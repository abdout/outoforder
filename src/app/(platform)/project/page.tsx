"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import SmIcon from "@/component/atom/icon/sm";

interface Project {
  _id: string;
  customer: string;
  location: string;
  name: string;
  status: string;
  color: string;
}

const projects: Project[] = [
  { _id: "1", customer: "ترتيب الاعضوية", location: "امانة العضوية", name: "عثمان", status: "انتهي", color: "bg-green-600" },
  { _id: "2", customer: "الميثاق الاجتماعي", location: "امانة المجتمع", name: "على", status: "جاري", color: "bg-yellow-400" },
  { _id: "3", customer: "الاصلاح الثقافة", location: "امانة الاعلام", name: "احمد", status: "متوقف", color: "bg-red-600" },
  { _id: "4", customer: "بودكاست مجتمع", location: "امانة الاعلام", name: "سارة", status: "جاري", color: "bg-yellow-400" },
  { _id: "5", customer: "مستشفى المجتمع", location: "القطاع الطبي", name: "محمد", status: "جاري", color: "bg-yellow-400" },
  { _id: "7", customer: "أتمتة الحركة", location: "القطاع التقني", name: "اشرف", status: "متوقف", color: "bg-red-600" },

];

const ProjectList: React.FC = () => {
  const [contextMenu, setContextMenu] = useState<{ x: number, y: number, projectID: string | null }>({ x: 0, y: 0, projectID: null });

  const handleRightClick = (e: React.MouseEvent, projectID: string) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, projectID });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ x: 0, y: 0, projectID: null });
  };

  return (
    <div className="grid grid-cols-4 gap-x-60">
      {projects.map((t: Project) => (
        <div
          key={t._id}
          className="p-6 border m-5 w-[12rem] flex flex-col items-start  hover:border-black relative"
          onContextMenu={(e) => {
            if (t._id) {
              handleRightClick(e, t._id);
            }
          }}
        >
          <div className={`${contextMenu.projectID === t._id ? 'opacity-20' : ''}`}>
            <Link href={`/project/${t._id}`}>
              <div>
                <h3 className="font-medium">{t.customer}</h3>
                <h4>{t.location ? t.location : <span className="opacity-50">Location</span>}</h4>
                <div className="flex gap-2 ml-[-6px] items-center mt-2 my-1">
                  <Icon icon="material-symbols-light:bookmark-sharp" width={25}/>
                  <h4>{t.name}</h4>
                </div>
                <div className="flex gap-4 pr-1 items-center">
                  <div className={`rounded-full ${t.color} w-[16px] h-[16px] md:w-[14px] md:h-[14px]`}></div>
                  <h4 className="md:text-[15px]">{t.status}</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
       <button
        className="p-6 border m-5  w-[12rem]  flex flex-col items-center justify-center hover:border-black opacity-70 hover:opacity-100"
        onClick={() => ("")}
      >
        <Icon icon="ph:plus-thin" width={70} />
      </button>
    </div>
  );
};

export default ProjectList;