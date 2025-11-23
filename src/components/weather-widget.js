import { useEffect, useState } from "react";

export default function WeatherWidget({ city, country }) {
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState("");
  const [time, setTime] = useState(null);
  const [timephone, setTimephone] = useState(null);

  useEffect(() => {
    // Fetch weather data from OpenWeatherMap API
    const fetchWeather = async () => {
      try {
        const apiKey = "0f817ef914e8bfa1914f53d3d2f16c67"; // Replace with your API key
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        setTemperature(Math.round(data.main.temp));
        setCondition(data.weather[0].description); // Get weather condition (e.g., "cloudy")

        // Calculate sunrise and sunset
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Pacific/Honolulu",
        });
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Pacific/Honolulu",
        });

        const now = new Date();
        const currentTime = now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        });

        const isNight = now >= new Date(data.sys.sunset * 1000) || now <= new Date(data.sys.sunrise * 1000);
        setTime(`${currentTime} ${isNight ? "Night ( i can see 🌙 )" : "Day ( i can see sun ☀️ )"}`);
        setTimephone(`${currentTime} `);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, [city, country]);

  return (
    <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm">
      {/* <span className="hidden md:block">{time}</span> */}
      <span className="block">{timephone}</span>
      <span>
        {city}, {country}
      </span>
      <span className="inline-flex items-center">
        {temperature}°C, {condition}
        <CloudIcon className="w-4 h-4 ml-1 mr-1" /> 🌊
      </span>
    </div>
  );
}

function CloudIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

// Usage example:
// <WeatherWidget city="Hawaii" country="US" />
