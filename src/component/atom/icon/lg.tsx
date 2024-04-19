import Image from "next/image";
import React from "react";

const LgIcon = (props: {
  src: string;
  alt: string;
  
}) => {
  return (
        <Image
          src={props.src}
          width={80}
          height={80}
          alt={props.alt}
          className="transition-opacity duration-200 hover:opacity-100 opacity-80"
        />
  );
};

export default LgIcon;