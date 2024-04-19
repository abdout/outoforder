import React from "react";
import Mobile from "../home/mobile";
import Nav from "../home/nav";
import XlInupt from "../atom/input/xl";
import Link from "next/link";
import { home } from "@/constant/header";

const Header = () => {
  return (
    <div className="flex flex-col space-y-2 px-6 pb-4">
      <nav className="flex py-2 justify-between items-center max-container padding-container relative z-30">
        <Link href='/'>
        <h1 className="text-2xl font-rubik">Databayt</h1>
        </Link>
        <Nav links={home}/>
      </nav>
      <div className="md:hidden" >
      <XlInupt placeholder="Search"  /> 
      </div>
      <Mobile />
    </div>
  );
};
export default Header;
