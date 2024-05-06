'use client';
import Link from "next/link";
import React from "react";
import Burger from "../home/burger";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const Header = (props: { links: { href: string; label: string; icon: string }[] }) => {

  const pathname = usePathname();

  return (
    <div className="flex gap-4 p-2 mb-4 items-center justify-center ">
      <ul className="flex space-x-8">
        {props.links.map((link) => (
          <li
            key={link.href}
            className={
              (
                link.label === "Detail"
                  ? pathname === link.href
                  : pathname === link.href
              )
                ? "hover:opacity-100"
                : "opacity-50 hover:opacity-100"
            }
          >
             <Link href={link.href} className="text-lg group relative flex justify-center">
              <Icon icon={link.icon} width={35} className="flex-shrink-0" />
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-5 hidden group-hover:block p-2">{link.label}</div>
            </Link>
          </li>
        ))}
      </ul>

      <Burger />

    </div>
  );
};

export default Header;