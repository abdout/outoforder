import React from "react";
import LgIcon from "../atom/icon/lg";
import { contributor } from "@/constant/home";

const Contributor = () => {
  return (
    <div>
      <h1 className="pl-8 py-8">Contributor</h1>
      <div className="pl-8 flex flex-col justify-center items-center gap-4">
        <div className="flex gap-6 flex-wrap">
          {contributor.map((icon, index) => (
            <div key={index} className="w-[65px] h-[65px] rounded-full overflow-hidden">
              <div className="flex justify-center items-center h-full gap-4">
                <div style={{ borderRadius: '50%' }}>
                  <LgIcon src={icon.src} alt={icon.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contributor;