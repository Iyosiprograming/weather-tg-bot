import { Telegraf } from "telegraf";
import { config } from "dotenv";
import { fetchWeather } from "../service/fetchweather.js";
import path from "path";

config({ path: path.resolve('../.env') }); // ensure dotenv loads from root

const bot = new Telegraf(process.env.BOT_TOKEN);

// Guide message on /start
bot.start((ctx) => {
  const guide = `
🌤 Welcome to the Weather Bot! 🌤

You can now just type the city name directly to get the weather.

Examples:
Addis Ababa
London
New York


Type /help for command summary.
  `;
  ctx.reply(guide);
});

// /help command
bot.help((ctx) => {
  ctx.reply(`
  📘 You can now just type the city name directly to get the weather.

Examples:
Addis Ababa
London
New York
  `);
});

// Handle messages (city names)
bot.on("text", async (ctx) => {
  try {
    const city = ctx.message.text.trim();
    if (!city) return;

    ctx.reply(`🔍 Fetching weather for: ${city}...`);

    const weatherData = await fetchWeather(city);
    if (!weatherData) {
      return ctx.reply("❌ Unable to fetch weather. Please check the city name or try again.");
    }

    const weatherMsg = `
🌆 *${weatherData.city}*
🌡️ Temperature: *${weatherData.temp}°C*
🤔 Feels like: *${weatherData.feels_like}°C*
💧 Humidity: *${weatherData.humidity}%*
🌬️ Wind: *${weatherData.wind_speed} m/s*
☁️ Condition: *${weatherData.description}*
    `;

    await ctx.replyWithPhoto(weatherData.icon, {
      caption: weatherMsg,
      parse_mode: "Markdown",
    });

  } catch (e) {
    console.error("Error fetching weather:", e);
    ctx.reply("❌ Something went wrong. Please try again.");
  }
});

// Launch bot
bot.launch();
console.log("🤖 Telegram bot started!");

// Graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
