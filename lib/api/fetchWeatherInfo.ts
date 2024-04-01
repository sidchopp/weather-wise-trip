import { WeatherData } from "@/types";

const fetchWeatherInfo = async (
  city: string,
  date: string
): Promise<WeatherData | null> => {
  try {
    const getLatAndLong = await fetch(
      `${process.env.WEATHER_GEO_API_URL}?q=${city}&appid=${process.env.WEATHER_APP_ID}`,
      {
        next: {
          revalidate: 1800,
        },
      }
    );

    if (!getLatAndLong.ok) {
      throw new Error("Network response for lat and long was not ok");
    }
    const [data] = await getLatAndLong.json();
    const { lat, lon } = data;

    const getCityData = await fetch(
      `${process.env.WEATHER_MAIN_API_URL}?lat=${lat}&lon=${lon}&exclude=minutely,hourly&date=${date}&units=metric&appid=${process.env.WEATHER_APP_ID}`
    );

    const cityData = await getCityData.json();
    return cityData;
  } catch (error) {
    console.error("Error fetching weather information data:", error);
    return null;
  }
};

export { fetchWeatherInfo };
