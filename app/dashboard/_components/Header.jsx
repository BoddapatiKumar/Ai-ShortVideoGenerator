import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  return (
    <div className="p-2 px-5 flex items-center justify-between shadow-md">
      <div className="flex gap-3 items-center">
        <Image src={'/logo.svg'} alt="logo1" width={30} height={30} ></Image>
        <h2 className="font-bold text-xl">Ai short video</h2>
      </div>
      <div className="flex gap-3 items-center">
        <Button className="bg-violet-600 hover:bg-violet-700 text-white">Dashboard</Button>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
