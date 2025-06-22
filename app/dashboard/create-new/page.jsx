"use client";
import { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";

const CreateNew = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoScript,setVideoScript]=useState({});

  //get video Script
    // making an api call 
  const getVideoScript = async () => {
    setLoading(true);
    const prompt =
      "Write a script to generate " +
      formData.duration +
      " video on topic:" +
      formData.topic +
      " along with Al image prompt in " +
      formData.imageStyle +
      " format for each scene and give me result in JSON format with imagePrompt and ContentText as field";
    console.log(prompt);
    const result = await axios
      .post("http://localhost:3000/api/get-video-script", {
        prompt: prompt,
      })
      .then((response) => {
        const videoinfo = response?.data?.result?.videoScript;
        console.log(videoinfo);
        setVideoScript(videoinfo);
      });
    setLoading(false);
  };

  const onCreateClickHandler = () => {
    getVideoScript();
  };
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-violet-700 text-center">
        Create New
      </h2>
      <div className="mt-10 shadow-md p-10">
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange} />

        {/* select style */}
        <SelectStyle onUserSelect={onHandleInputChange} />

        {/* Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />

        {/* create button */}
        <Button
          className="bg-violet-700 w-full mt-10"
          onClick={() => onCreateClickHandler()}
        >
          Create
        </Button>
        <CustomLoading loading={loading} />
      </div>
    </div>
  );
};

export default CreateNew;
