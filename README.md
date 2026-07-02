# Batman Discord Bot 🦇

![hero page](https://github.com/anav5704/ai-discord-bot/blob/main/docs/batman.png)

A Discord bot powered by Google Gemini that replies to messages in character as Batman. If you want to talk to him, feel free to join the [Gotham City](https://discord.gg/K9rMzPudgS) Discord server.

## Technologies Used
- Node.js (ES modules, Node 20+)
- Discord.js
- Google Gemini API (`gemini-2.5-flash-lite`)

## Quick Start (Docker)

A prebuilt image is published to GitHub Container Registry on every push to `main`. No build required.

1. Create a `.env` file:

    ```ini
    DISCORD_TOKEN=your_discord_bot_token
    GEMINI_API_KEY=your_gemini_api_key
    GIPHY_API_KEY=your_giphy_api_key
    ```

2. Download [`docker-compose.example.yml`](docker-compose.example.yml) as `docker-compose.yml`, then run:

    ```sh
    docker compose up -d
    ```

3. Tail logs:

    ```sh
    docker compose logs -f
    ```

To update to the latest image:

```sh
docker compose pull && docker compose up -d
```

## Run From Source

```sh
npm install
node index.js
```

## Build Your Own Image

```sh
docker build -t batman-bot .
docker run -d --env-file .env --restart unless-stopped batman-bot
```

## Development (self-hosting on a homelab)

See [docs/DEPLOY.md](docs/DEPLOY.md) for the in-repo deployment guide (when running from source or building locally).

## Slash Commands

- `/batgif` — fetch a random Batman GIF
- `/batquote` — drop a Batman quote
- `@Batman` — chat with Batman in any channel

## Learning Resources

- [Discord.js docs](https://discord.js.org/)
- [Google Gemini API](https://ai.google.dev/gemini-api/docs)
