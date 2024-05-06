import React from "react";
import Hero from "@/component/home/hero";
import Paper from "@/component/home/paper";
import Media from "@/component/home/media";
import Article from "@/component/home/article";
import Event from "@/component/home/event";

export default function Home() {
  return (
    <div className="text-sm space-y-8 px-20">
      <Hero />
      <Paper />
      <Media />
      <Article />
      <Event />
    </div>

  );
}
