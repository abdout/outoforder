import Image from "next/image";
import Link from "next/link";
import React from "react";

const XlIcon = (props: {
  src: string;
  alt: string;
  path: string;
  onClick?: () => void;

}) => {
  return (
    <Link href={props.path}>
      <Image
        src={props.src}
        width={120}
        height={120}
        alt={props.alt}
        className="transition-opacity duration-200 hover:opacity-100 opacity-70"
      />
    </Link>
  );
};

export default XlIcon;