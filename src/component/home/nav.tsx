'use client';
import Link from "next/link";
import React from "react";
import Burger from "./burger";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = (props: { links: { href: string; label: string; }[] }) => {
  
  const pathname = usePathname();

  return (
    <div className="flex gap-4 items-center justify-center ">
      <nav className="hidden md:flex justify-between w-full">
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
                  ? ""
                  : "opacity-50"
              }
            >
              <Link href={link.href} className="text-lg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className=" flex gap-10">
        <Image
          className="hidden md:flex"
          src="/home/search.png"
          alt=""
          width={18}
          height={12}
        />
        <Burger />
      </div>
    </div>
  );
};

export default Nav;