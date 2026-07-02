import "dotenv/config"

import { Client, Events, GatewayIntentBits, userMention, REST, Routes } from "discord.js"
import { mountCommands } from "./commands/mountCommands.js"
import { promptBatman } from "./utils/promptBatman.js"
import { batquote } from "./commands/batquote.js"
import { batgif } from "./commands/batgif.js"


const DISCORD_TOKEN = process.env.DISCORD_TOKEN


const DISCORD_BOT = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageTyping] })


DISCORD_BOT.login(DISCORD_TOKEN)
DISCORD_BOT.once("ready", () => mountCommands(DISCORD_TOKEN, DISCORD_BOT))


DISCORD_BOT.on("interactionCreate", batgif)
DISCORD_BOT.on("interactionCreate", batquote)


DISCORD_BOT.on("messageCreate", async (message) => {
    if (message.author.bot || message.author.id === DISCORD_BOT.user.id) return
    if (message.content && message.mentions.users.some((user) => user.username === DISCORD_BOT.user.username)) {
        try {
            message.channel.sendTyping()
            const response = await promptBatman(message.content)
            message.channel.send(`<@${message.author.id}> ${response}`)
        } catch (error) {
            await message.channel.send("🦇");
        }
    }
})
