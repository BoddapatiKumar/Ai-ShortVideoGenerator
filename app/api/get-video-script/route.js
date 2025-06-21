import { chatSession } from "@/configs/aiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();
  try {
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

    return NextResponse.json({ result: JSON.parse(result.response.text()) });
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}
