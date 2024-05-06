// Item.tsx
"use client";

import { sidebar } from "@/constant/sidebar";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Item = () => {
  const pathname = usePathname();

  return (
    <div>
      {sidebar.map((item, index) => (
        <Link key={index} href={item.path}>
          <div className={`flex space-x-3 gap-4 items-center pr-4 p-2 group ${pathname.startsWith(item.path) ? "bg-black text-white " : " hover:bg-gray-200"
            }`}>
            <Icon icon={item.icon} width={28} className="flex-shrink-0" />
            <span className="text-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Item;