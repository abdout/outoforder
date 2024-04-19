import React from "react";
import Hero from "@/component/home/hero";
import ReadMore from "@/component/home/readmore";
import Sponser from "@/component/home/sponser";
import Team from "@/component/home/team";
import Contributor from "@/component/home/contributor";
import MdIcon from "@/component/atom/icon/md";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import Service from "@/component/home/service";
import Client from "@/component/home/client";

export default function Home() {
  return (
    <div className="text-sm space-y-4">
      
      <Hero />
      <Service />
      <Client />
    </div>

  );
}
