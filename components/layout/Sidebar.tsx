import { useState, useCallback } from "react";
import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { HiSearchCircle } from "react-icons/hi";

import useCurrentUser from "@/hooks/useCurrentUser";

import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
import MobileMenu from "@/components/MobileMenu";

interface SidebarProps {
  isOpen?: boolean;
  // onClick: () => void;
  // disabled?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
      // onClick: () => void,
    },
    {
      icon: BsBellFill,
      label: "Notifications",
      href: "/notifications",
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      icon: FaUser,
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
    {
      icon: HiSearchCircle,
      label: "Search",
      href: `/search/`,
      auth: true,
    },
  ];

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <div className="absolute bg-black z-10 col-span-1 h-full pr-1 md:pr-6">
      <div
        onClick={toggleMobileMenu}
        className="lg:hidden md:hidden flex flex-row items-center gap-2 mb-3 ml-4 cursor-pointer relative"
      >
        {/* <p className="text-white text-sm">Browse</p> */}
        <HiOutlineMenu
          className={`w-6 h-6 text-white fill-white transition ${
            showMobileMenu ? "rotate-180" : "rotate-0"
          }`}
        />
        
      </div>
      <div 
      onClick={toggleMobileMenu}
        
      >
      <MobileMenu visible={showMobileMenu} />
      </div>
      

      <div className=" hidden md:flex md:ml-5 lg:ml-8 lg:flex flex-col items-end">
        <div 
          
        className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              alert={item.alert}
              auth={item.auth}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
