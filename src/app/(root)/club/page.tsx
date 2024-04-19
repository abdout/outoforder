
import Footer from "@/component/layout/footer";
import Image from "next/image";

import React from "react";

const Club = () => {
  return (
    <div>
      <Image className="pb-6" src='/club.png' width={200} height={200} alt='Pen' />
      <Footer />
    </div>
  );
};

export default Club;
