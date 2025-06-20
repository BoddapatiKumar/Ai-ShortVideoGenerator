import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectDuration = ({onUserSelect}) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl text-violet-700">Duration</h2>
      <p className="text-gray-500">Select the duration of your video</p>
      <Select
        onValueChange={(value) => {
             onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='30 seconds'>
            30 seconds
          </SelectItem>
          <SelectItem value='60 seconds'>
            60 seconds
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDuration;
