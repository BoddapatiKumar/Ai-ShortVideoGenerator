const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192, // fixed typo from 'maxOutputTokes'
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `**Comprehending the Foundation**

I'm now fully grasping the video script request. The focus is a 30-second script about an intriguing historical story, all structured in JSON with image prompts for each scene. My primary goal is to decipher the core elements and structure the output accordingly.


**Defining the Narrative Arc**

I'm solidifying the narrative structure for the "Night Witches" script. I've broken it down into four key scenes: the desperate wartime situation, the initial doubt towards female pilots, their innovative tactics, and a final, impactful visual of their legacy. The "Great Molasses Flood" proved less suitable due to the complexity of the visual narrative within the short timeframe. I'm focusing on crafting vivid image prompts for each scene. I'm aiming for concise and impactful visuals.


**Crafting Scene Details**

I'm now fully immersed in refining the script's visual and textual aspects. I've begun to draft the contentText and imagePrompt for the "Night Witches" script. For the initial scene, I'm focusing on conveying the desperation of WWII and introducing the female pilots. I'm aiming for visuals that establish the harsh setting and the women's determined spirit. Currently, I'm working through scene two, aiming for clear and impactful imagery of a resolute pilot and their antiquated aircraft. I'm carefully considering the interplay between text and image to ensure the narrative flows seamlessly within the 30-second timeframe.


**Structuring the Script Scenes**

I'm now fully immersed in developing the JSON script, scene by scene. I've chosen the "Night Witches" narrative, and I've constructed an impactful scene outline. I'm focusing on the first scene, detailing the harsh realities of WWII and the desperate need for pilots. I'm also constructing the subsequent scene, with a specific focus on introducing these brave women. I'm crafting concise and descriptive image prompts to bring the story to life visually. My goal is to strike a balance between narrative impact and visual clarity within the 30-second timeframe.


**Developing the JSON Structure**

I'm now fully immersed in developing the JSON structure. I've chosen the "Night Witches" story. I'm focusing on the first scene, detailing the desperate circumstances of WWII and the urgent need for pilots. I'm building scene two now, emphasizing the initial doubt, with careful attention to image prompts. I'm aiming for concise, descriptive prompts. The goal is to strike a balance between narrative impact and visual clarity.


**Refining the Image Prompts**

I'm now fully immersed in the final refinement stages. Having crafted and structured the contentText, I'm now laser-focused on the imagePrompts. I've concentrated on achieving a cohesive and realistic style for each scene. I've re-evaluated and adjusted the wording to align seamlessly with the narrative flow and maximize visual impact. For scene four, I'm working to portray the "chilling" aspect and camaraderie. The goal is a captivating, historically accurate script.


`,
        },
        {
          text: `\`\`\`json
{
  "videoScript": {
    "title": "The Night Witches: WWII's Fearless Female Pilots",
    "totalDurationSeconds": 30,
    "scenes": [
      {
        "sceneNumber": 1,
        "durationSeconds": 6,
        "imagePrompt": "Realistic photo of a desolate, war-torn Eastern Front landscape at dusk, with smoke on the horizon, showing the harsh realities of WWII, with a sense of urgency.",
        "contentText": "During World War II, as the Soviet Union faced immense pressure, a unique squadron emerged from the dire need for pilots."
      },
      {
        "sceneNumber": 2,
        "durationSeconds": 6,
        "imagePrompt": "Realistic photo of a determined young Soviet woman pilot in a flight uniform, standing in front of an old Polikarpov Po-2 biplane on an airfield, looking resolute despite the humble aircraft. Overcast sky.",
        "contentText": "Comprised entirely of women, the 588th Night Bomber Regiment was initially scoffed at, assigned old, slow biplanes."
      },
      {
        "sceneNumber": 3,
        "durationSeconds": 6,
        "imagePrompt": "Realistic photo from a low angle, showing a dark silhouette of a Polikarpov Po-2 biplane flying silently under a moonlit, starry night sky over enemy territory, suggesting stealth and an eerie presence.",
        "contentText": "They flew daring, low-altitude night missions, cutting their engines before dropping bombs, producing a soft 'whooshing' sound."
      },
      {
        "sceneNumber": 4,
        "durationSeconds": 6,
        "imagePrompt": "Realistic photo of a group of weary but determined Soviet women pilots, their faces smudged, celebrating a successful night mission in a dimly lit, makeshift hangar, with their biplanes in the background. Sense of camaraderie.",
        "contentText": "This eerie sound, combined with their relentless strikes, earned them the chilling nickname from the Germans: 'Nachthexen' – The Night Witches."
      },
      {
        "sceneNumber": 5,
        "durationSeconds": 6,
        "imagePrompt": "Realistic photo, a solemn and heroic portrait of a diverse group of elderly Soviet women, some with medals, standing proudly as veterans, perhaps with a subtle historical monument in the blurred background, signifying their lasting legacy.",
        "contentText": "Flying over 30,000 missions and dropping 23,000 tons of bombs, these courageous women became true legends, striking fear into the enemy and inspiring countless others."
      }
    ]
  }
}
\`\`\``,
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ],
});



