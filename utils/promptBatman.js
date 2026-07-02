import "dotenv/config"

import { GoogleGenerativeAI } from "@google/generative-ai"
import { examples } from "./promptExamples.js"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
})

export const promptBatman = async (prompt) => {
    const chat = model.startChat({ history: examples })
    const result = await chat.sendMessage(prompt)
    return result.response.text()
}
