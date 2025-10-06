import { fetchWeather } from "../service/fetchweather.js";

export const handleCity = async (req, res) => {
  try {
    const { city } = req.body;

    if (!city) {
      return res.status(400).json({ error: "City is required." });
    }

    const weatherData = await fetchWeather(city);
    if (!weatherData) {
      return res.status(404).json({ error: "Weather data not found for this city." });
    }

    res.status(200).json({
      message: "Weather fetched successfully.",
      weather: weatherData,
    });
  } catch (e) {
    console.error("❌ Error in controller:", e);
    res.status(500).json({ error: e.message });
  }
};
