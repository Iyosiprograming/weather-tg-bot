import { Telegraf } from "telegraf";
import axios from "axios";
import { config } from "dotenv";
config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const API_URL = process.env.API_URL || "http://localhost:5000/api"; // backend URL

// ────────────────────────────────
// /start command
// ────────────────────────────────
bot.start(async (ctx) => {
  try {
    ctx.reply("🌤 Welcome to the Weather Bot!\n\nType /weather <city> to get current weather.\nExample: /weather Addis Ababa");
  } catch (e) {
    console.log(e);
  }
});

// ────────────────────────────────
// /help command
// ────────────────────────────────
bot.help(async (ctx) => {
  try {
    ctx.reply("📘 Commands:\n/start - Start the bot\n/help - Show help\n/weather <city> - Get weather for a city");
  } catch (e) {
    console.log(e);
  }
});

// ────────────────────────────────
// /weather command
// ────────────────────────────────
bot.command("weather", async (ctx) => {
  try {
    const chatId = ctx.chat.id;
    const message = ctx.message.text;
    const city = message.split(" ")[1]; // /weather <city>

    if (!city) {
      return ctx.reply("⚠️ Please provide a city name.\nExample: /weather London");
    }

    ctx.reply("🔍 Fetching weather data...");

    // Send request to backend API
    const response = await axios.post(`${API_URL}/cities`, {
      chatId,
      city,
    });

    const { weather } = response.data;
    const { description, temp, feels_like, humidity, wind_speed, city: cityName } = weather;

    const weatherMsg = `
🌆 *${cityName}*
🌡️ Temperature: *${temp}°C*
🤔 Feels like: *${feels_like}°C*
💧 Humidity: *${humidity}%*
🌬️ Wind: *${wind_speed} m/s*
☁️ Condition: *${description}*
    `;

    ctx.replyWithMarkdown(weatherMsg);
  } catch (e) {
    console.error("❌ Error fetching weather:", e.message);
    ctx.reply("❌ Failed to fetch weather data. Please try again later.");
  }
});

// ────────────────────────────────
// Start bot
// ────────────────────────────────
const start = async () => {
  try {
    await bot.launch();
    console.log("🤖 Telegram bot started!");
  } catch (e) {
    console.error(e);
  }
};

start();
