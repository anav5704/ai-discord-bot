# Batman Discord Bot 🦇

![hero page](https://github.com/anav5704/ai-discord-bot/blob/main/docs/batman.png)

A Discord bot powered by Google Gemini that replies to messages in character as Batman. If you want to talk to him, feel free to join the [Gotham City](https://discord.gg/K9rMzPudgS) Discord server.

## Technologies Used
- Node.js (ES modules, Node 20+)
- Discord.js
- Google Gemini API (`gemini-2.5-flash-lite`)

## Getting Started

First, fork and clone the repo, and install all the required dependencies by running:

```sh
npm install
```

Then create a `.env` file in the root of your project and add the following variables:

```
GEMINI_API_KEY
DISCORD_TOKEN
GIPHY_API_KEY
```

Finally start the app:

```sh
node index.js
```

## Docker (Self-Hosting)

See [docs/DEPLOY.md](docs/DEPLOY.md) for Docker Compose setup.

## Learning Resources

- [Creating an AI Discord bot](https://www.youtube.com/watch?v=VxD7Lt1eV2U)
- [How to build a Discord bot](https://www.youtube.com/watch?v=Oy5HGvrxM4o)
- [Discord.js docs](https://discord.js.org/)
