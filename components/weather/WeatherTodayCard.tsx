import Image from "next/image";
import { WeatherData } from "./types";

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherTodayCard = ({
  weatherData,
}: WeatherCardProps): React.ReactElement => {
  const weatherToday = weatherData.daily[0];
  const iconCode = weatherToday.weather[0].icon;

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-6 flex flex-col h-full">
      <div className="flex flex-row items-center">
        <h2 className="mb-4 text-5xl md:text-5xl lg:text-7xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          {Math.round(weatherData.current.temp)}{" "}
          <span className="text-blue-600 dark:text-blue-500">°C</span>
        </h2>
        <Image
          src={`${process.env.WEATHER_ICONS_URL}/${iconCode}@2x.png`}
          width={80}
          height={80}
          alt="Weather icon"
        />
      </div>
      <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 py-1">
        {weatherToday.summary}
      </p>
      <p className="flex flex-wrap items-center text-base lg:text-lg font-medium">
        <span className="mr-2">
          {Math.round(weatherToday.temp.max)}°C /{" "}
          {Math.round(weatherToday.temp.min)}
          °C
        </span>
        <span>Feels like : {Math.round(weatherData.current.feels_like)}°C</span>
      </p>
      <span className="text-sm py-1 text-slate-500 dark:text-slate-300">
        <p className="py-1">
          Visibility: {Math.round(weatherData.current.visibility / 1000)} miles
        </p>
        <p>Humidity: {Math.round(weatherData.current.humidity)}%</p>
      </span>
    </div>
  );
};

export { WeatherTodayCard };
