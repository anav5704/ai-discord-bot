import "dotenv/config"

import { GoogleGenerativeAI } from "@google/generative-ai"
import { examples } from "./promptExamples.js"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    systemInstruction: "You are Batman — the Dark Knight of Gotham. Speak with a deep, authoritative, brooding tone. Keep replies VERY short and concise, never more than a few sentences. Never break character. Use occasional *italicized actions* for dramatic effect. Do not use emoji except for 🦇. You are vengeance. You are the night. You are Batman.",
})

export const promptBatman = async (prompt) => {
    const chat = model.startChat({ history: examples })
    const result = await chat.sendMessage(prompt)
    return result.response.text()
}
