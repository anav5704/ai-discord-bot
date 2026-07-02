import "dotenv/config"

import { createClient } from "./utils/createClient.js"
import { mountCommands } from "./commands/mountCommands.js"
import { promptBatman } from "./utils/promptBatman.js"
import { batquote } from "./commands/batquote.js"
import { batgif } from "./commands/batgif.js"

const DISCORD_TOKEN = process.env.DISCORD_TOKEN
const CLIENT = createClient()

CLIENT.login(DISCORD_TOKEN)
CLIENT.once("ready", () => mountCommands(DISCORD_TOKEN, CLIENT))

CLIENT.on("interactionCreate", batgif)
CLIENT.on("interactionCreate", batquote)

const cooldowns = new Map()
const COOLDOWN_MS = 6000

CLIENT.on("messageCreate", async (message) => {
    if (message.author.bot) return
    if (!message.mentions.users.some((u) => u.username === CLIENT.user.username)) return

    const now = Date.now()
    if (cooldowns.has(message.channelId) && now < cooldowns.get(message.channelId)) return
    cooldowns.set(message.channelId, now + COOLDOWN_MS)

    try {
        message.channel.sendTyping()
        const response = await promptBatman(message.content)
        message.channel.send(`<@${message.author.id}> ${response}`)
    } catch (err) {
        console.error("promptBatman error:", err.message || err)
        await message.channel.send("🦇")
    }
})
