import React from "react";

import FollowBar from "@/components/layout/FollowBar";
import Sidebar from "@/components/layout/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="flex justify-center space-x-5 lg:grid  lg:grid-cols-4 h-full">
          <div className="absolute left-1">
            <Sidebar />
          </div>
          <div
            className="
              col-span-2
              lg:col-span-2 
              border-x-[1px] 
              border-gray-700
          "
          >
            {children}
          </div>
          <div className="absolute right-1">
            <FollowBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
