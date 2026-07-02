# Deploying with Docker

## Prerequisites
- Docker and Docker Compose installed on your host
- A Discord bot token and Google Gemini API key

## Setup

1. Create a `.env` file in the project root:

    ```ini
    GEMINI_API_KEY=your_gemini_api_key
    DISCORD_TOKEN=your_discord_bot_token
    GIPHY_API_KEY=your_giphy_api_key
    ```

2. Build and start:

    ```sh
    docker compose up -d
    ```

3. View logs:

    ```sh
    docker compose logs -f
    ```

4. Stop:

    ```sh
    docker compose down
    ```

The container restarts automatically unless stopped.
