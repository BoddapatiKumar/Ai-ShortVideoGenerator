"use client";

import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const path = usePathname();
  console.log(path);

  const menuOptions = [
    {
      id: 1,
      name: "dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create-new",
      path: "/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      path: "/acount",
      icon: CircleUser,
    },
  ];
  return (
    <div className="w-64 shadow-md h-screen p-5">
      <div className="grid gap-2">
        {menuOptions.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-violet-700 hover:text-white hover:rounded-lg cursor-pointer ${
                path == item.path && "bg-violet-700 text-white rounded-lg"
              }`}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
