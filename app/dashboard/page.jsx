import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-violet-700">Dashboard</h1>
        <Button className="bg-violet-700">+ Create new</Button>
      </div>
    </div>
  );
};

export default page;
