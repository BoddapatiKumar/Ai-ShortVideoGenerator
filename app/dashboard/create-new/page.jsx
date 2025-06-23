"use client";
import { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";
import { v4 as uuidv4 } from "uuid";

const scriptData="In the heart of a forgotten city, nestled among cobwebs and forgotten treasures, lay an antique shop brimming with curiosities.  Among them, a small, ornate music box held a secret.Its surface, intricately carved with swirling patterns and tiny clockwork mechanisms, hinted at a hidden complexity.  An antique key lay beside it, promising an untold story.Elara, a young clockmaker with an uncanny talent for restoring broken things, cautiously inserted the key.  A faint whirring sound filled the air as the mechanisms sprang to life.From within the music box, a tiny clockwork heart emerged, beating with a soft, rhythmic pulse.  It glowed with an otherworldly light, its intricate gears spinning smoothly.Elara held the delicate heart, mesmerized by its beauty and saddened by its evident age.  It pulsed with a life force that seemed both ancient and fragile.With a gentle sigh, she returned the clockwork heart to its resting place, its secret safe. The music box, once more silent, held its magic close."
const CreateNew = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState();

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
        const videoinfo = response?.data?.result?.videoScript?.scenes;
        console.log(videoinfo);
        setVideoScript(videoinfo);
        generateAudioFile(videoinfo);
      });
    setLoading(false);
  };

  const generateAudioFile = async (VideoInfoData) => {
    let script = "";
    const id = uuidv4();
    // VideoInfoData.forEach((item) => {
    //   script = script + item.contentText;
    // });

    await axios.post("http://localhost:3000/api/generate-audio", {
      text: VideoInfoData,
      id: id,
    }).then(res=>{
      console.log(res.data);
    })
  };

  const onCreateClickHandler = () => {
    // getVideoScript();
    generateAudioFile(scriptData);
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
