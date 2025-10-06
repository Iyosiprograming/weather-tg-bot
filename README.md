

# Telegram Weather Bot 🌤️

A **Telegram bot** built with Node.js that fetches **live weather updates** using the OpenWeather API. Users can simply type a city name, and the bot responds with the current weather — no commands required.

This project is **open-source** and ideal for developers who want to explore Telegram bot development, API integration, or automation projects.

---

## Features

* Fetch live weather by **typing a city name**
* Provides **temperature, humidity, wind, and condition**
* Lightweight, modular, and easy to extend
* Uses **OpenWeather API** for accurate weather data

---

## Demo

> The bot is not live yet. You can run it locally by following the steps below.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Iyosiprograming/weather-tg-bot.git
cd weather-tg-bot
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder with the following:

```
BOT_TOKEN=your_telegram_bot_token
WEATHER_API_KEY=your_openweather_api_key
```




## Usage

Start the bot locally:

```bash
node Bot/tgBot.js
```

* Open your bot in Telegram
* Type `/start` to see the guide
* Type any city name (e.g., `London`) to get live weather

---

## Project Structure

```
├── app.js
├── Bot/
│   └── tgBot.js           # Main Telegram bot logic
├── controller/
│   └── weatherController.js  
├── router/
│   └── userRouter.js      
├── service/
│   └── fetchweather.js    # Fetches data from OpenWeather API
├── package.json
├── package-lock.json
├── .env
└── README.md
```

---

## Contributing

Contributions are welcome! Some ideas:

* Add support for **multiple cities in one message**
* Add **weather forecast for 5 days**
* Add **weather icons or emojis** in messages
* Deploy bot to **Heroku, Railway, or other platforms**

---

## License

MIT License © Iyosi Programming




Do you want me to do that?
