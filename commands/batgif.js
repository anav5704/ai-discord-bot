import "dotenv/config"

const GIPHY_BASE = "https://api.giphy.com/v1/gifs/search"
const FETCH_TIMEOUT_MS = 15000

export const batgif = async (interaction) => {
    if (!interaction.isCommand()) return
    if (interaction.commandName !== "batgif") return

    await interaction.deferReply()

    try {
        const url = `${GIPHY_BASE}?api_key=${process.env.GIPHY_API_KEY}&q=batman&limit=50&rating=pg-13`
        const controller = new AbortController()
        const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

        const response = await fetch(url, { signal: controller.signal })
        clearTimeout(timer)

        if (!response.ok) throw new Error(`Giphy returned ${response.status}`)
        const gifs = await response.json()
        if (!gifs.data?.length) throw new Error("No gifs returned")

        const random = Math.floor(Math.random() * gifs.data.length)
        await interaction.editReply(gifs.data[random].images.original.url)
    } catch (err) {
        console.error("batgif error:", err.message, err.cause?.message || "")
        await interaction.editReply("The Joker! He has hacked my GIF signal!")
    }
}
