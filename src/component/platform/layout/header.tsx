"use client";
import SmIcon from "@/component/atom/icon/sm";
import Burger from "@/component/atom/icon/burger";
import { UserButton } from "@/component/auth/user-button";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <>
      <div className=" absolute flex left-10  items-center gap-4">
        <Icon icon={"ri:search-fill"} height="30" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"ri:notification-fill"} height="30" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"fluent:dark-theme-24-regular"} height="32" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <div className="profile opacity-70 hover:opacity-100 transition-opacity duration-200">
          <div className="profile-overlay"></div>
          <div className="z-20 w-full h-full">
            <UserButton />
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;