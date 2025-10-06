import axios from "axios";

const API_KEY = process.env.WEATHER_API_KEY; // Set this in your .env file

export const fetchWeather = async (city) => {
  try {
    if (!city) throw new Error("City name is required");

    const url = `https://api.openweathermap.org/data/2.5/weather`;
    const response = await axios.get(url, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    const data = response.data;
    const weatherInfo = {
      city: data.name,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      description: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      timestamp: new Date(),
    };

    return weatherInfo;

  } catch (error) {
    console.error("❌ Error fetching weather data:", error.response?.data || error.message);
    return null;
  }
};
