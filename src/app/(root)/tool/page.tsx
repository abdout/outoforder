import Tools from "@/component/tool/root/card";
import toolData from "@/constant/tool";
import React from "react";

const Tool = () => {
  return (
    <div className="">

      <p className="text-[11.5px] tracking-wide font-light md:text-lg md:pt-3">
        The most magical part of the Harry Potter books, <br/> is that they eventually
        used the skills they learned at school
      </p>
      <div>
        <p className="text-[16px] md:pt-4 md:text-lg">+ 40 tool for</p>
        <p className="text-[28px] font-medium md:pb-4">bussiness automation</p>
      
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 md:items-center md:justify-center ">
        {toolData.map((values) => {
          return (
            <div className="py-[3PX]" key={values.id}>
              <Tools
                id={values.id}
                title={values.title}
                subtitle={values.subtitle}
                desc={values.desc}
                path={values.path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tool;
