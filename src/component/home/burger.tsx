"use client";
import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from "framer-motion";
import hamburger from "@/constant/hamburger";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="" dir="rtl">
     
      <div className="group absolute top-[1.4rem] right-[19.5rem] z-50 opacity-50 hover:opacity-100">
        <Hamburger size={22} distance="md" toggled={open} toggle={setOpen} />
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[-20px] text-lg hidden group-hover:block p-2">قائمة</div>
      </div>
      
   
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed item-center h-screen left-[140px] md:left-[750px] right-0 top-[-24px] pt-20 shadow-4xl bg-[#FCFCFC] z-40"
          >
            <ul className="grid gap-2">
              {hamburger.map((route, idx) => {
                // const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem]"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center w-full gap-4 px-28 p-2 "
                      }
                      href={route.path}
                    >
                      {route.icon && <Icon icon={route.icon} width={25} className="flex-shrink-0" />}
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Burger;


