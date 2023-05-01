import useUsers from "@/hooks/useUsers";

import Avatar from "../Avatar";
import SidebarLogo from "./SidebarLogo";
import { HiSearchCircle } from "react-icons/hi";
import { useRouter } from "next/router";


const FollowBar = () => {
  const { data: users = [] } = useUsers();
  const router = useRouter()

  if (users.length === 0) {
    return null;
  }

  return (
    <>
      <div className="absolute px-6 py-4 ">
        
        <div className="absolute right-10 -mt-8 lg:w-full md:hidden lg:hidden cursor-pointer">
          <SidebarLogo />
        </div>
        <div
          onClick={() => router.push('/search')}
          className="absolute  right-28 -mt-4 cursor-pointer"
          >
          <HiSearchCircle size={28} color="white" />
        </div>
        <div className="hidden md:block lg:block">
          <div className="bg-gray-800 rounded-xl p-4">
            <h2 className="text-white text-xl font-semibold">Who to follow</h2>
            <div className="flex flex-col gap-6 mt-4">
              {users.map((user: Record<string, any>) => (
                <div key={user.id} className="flex flex-row gap-4">
                  <Avatar userId={user.id} />
                  <div className="flex flex-col">
                    <p className="text-white font-semibold text-sm">
                      {user.name}
                    </p>
                    <p className="text-gray-400 text-sm">@{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowBar;
