import Image from "next/image";
import { WeatherData } from "@/types";
import { SunriseAndSunSet } from "@/components/sunrise-sunset";

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
      <div className="grid grid-cols-2 gap-4 items-center">
        <h2 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold lg:font-extrabold text-gray-900 dark:text-white">
          {Math.round(weatherData.current.temp)}
          <span className="text-blue-600 dark:text-blue-500">°C</span>
        </h2>
        <div className="flex justify-center">
          <Image
            src={`${process.env.WEATHER_ICONS_URL}/${iconCode}@2x.png`}
            width={80}
            height={80}
            alt="Weather icon"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center text-sm md:text-lg">
        <h3 className="lg:col-span-1">
          Feels like {Math.round(weatherData.current.feels_like)}°C
        </h3>
        <p className="lg:col-span-1 flex justify-center">
          {Math.round(weatherToday.temp.max)}°C /{" "}
          {Math.round(weatherToday.temp.min)}°C
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
        <p>
          Visibility: {Math.round(weatherData.current.visibility / 1000)} miles
        </p>
        <p className="flex justify-center">
          Humidity: {Math.round(weatherData.current.humidity)}%
        </p>
      </div>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 py-1">
        {weatherToday.summary}
      </p>
      <div className="mt-auto">
        <SunriseAndSunSet
          sunrise={weatherData.current.sunrise}
          sunset={weatherData.current.sunset}
          timeZone={weatherData.timezone}
        />
      </div>
    </div>
  );
};

export { WeatherTodayCard };
