"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmptyList from "./_components/EmptyList";
import Link from "next/link";

const page = () => {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-violet-700">Dashboard</h1>
        <Link href="/dashboard/create-new">
          <Button className="bg-violet-700 ">+ Create new</Button>
        </Link>
      </div>
      {videoList?.length == 0 && (
        <div>
          <EmptyList />
        </div>
      )}
    </div>
  );
};

export default page;
