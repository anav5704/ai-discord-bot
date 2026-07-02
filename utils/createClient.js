import "dotenv/config"

import { Client, GatewayIntentBits } from "discord.js"

export const createClient = () => {
    return new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMessageTyping,
        ],
    })
}
