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
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg sm:p-4 p-6 flex flex-col h-full">
      <div className="flex md:flex-row items-center">
        <h2 className="mb-4 text-3xl md:text-4xl lg:text-7xl font-bold lg:font-extrabold text-gray-900 dark:text-white">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3 text-base lg:text-lg">
        <h3 className="lg:col-span-1">
          Feels like {Math.round(weatherData.current.feels_like)}°C
        </h3>
        <p className="lg:col-span-1">
          {Math.round(weatherToday.temp.max)}°C /{" "}
          {Math.round(weatherToday.temp.min)}°C
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3 text-sm text-slate-500 dark:text-slate-300">
        <p>
          Visibility: {Math.round(weatherData.current.visibility / 1000)} miles
        </p>
        <p>Humidity: {Math.round(weatherData.current.humidity)}%</p>
      </div>
      <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 py-1">
        {weatherToday.summary}
      </p>
    </div>
  );
};

export { WeatherTodayCard };
