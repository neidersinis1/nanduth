import React, { useCallback } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import useCurrentUser from "@/hooks/useCurrentUser";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import Link from 'next/link'

import SidebarItem from "@/components/layout/SidebarItem";
import SidebarTweetButton from "@/components/layout/SidebarTweetButton";

interface MobileMenuProps {
  // visible?: boolean;
  // onClick: () => void;
  disabled?: boolean;

}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  // const handleClose = useCallback(() => {
  //   if (disabled) {
  //     return;
  //   }

  //   onClick();
  // }, [onClick, disabled]);
  // if (!visible) {
  //   return null;
  // }

  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
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
  ];

  return (
    <>
      <div className="bg-black md:hidden lg:hidden w-20 absolute top-18 left-0 py-1 flex-col border-2 border-gray-700 flex">
        <div className="flex flex-col gap-4">
          <div className="px-3 text-center text-white hover:underline">
            <div className="flex flex-col items-end">
              <div className="space-y-2 lg:w-[30px]">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                  >
                    <SidebarItem

                      key={item.href}
                      alert={item.alert}
                      auth={item.auth}
                      href={item.href}
                      icon={item.icon}
                      label={item.label}
                    />
                  </Link>
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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
