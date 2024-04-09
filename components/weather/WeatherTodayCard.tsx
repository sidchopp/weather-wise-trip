import Image from "next/image";
import { WeatherData } from "@/types";
import { SunriseAndSunSet } from "@/components/sunrise-sunset";
import { WeatherAlerts } from "./WeatherAlerts";
import { WeatherHourlyModal } from "./WeatherHourlyModal";

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
        <h2 className=" text-5xl md:text-6xl lg:text-7xl font-bold lg:font-extrabold text-gray-900 dark:text-white">
          {Math.round(weatherData.current.temp)}
          <span className="text-blue-600 dark:text-blue-500">°C</span>
        </h2>
        <div className="flex justify-end">
          <SunriseAndSunSet
            sunrise={weatherData.current.sunrise}
            sunset={weatherData.current.sunset}
            timeZone={weatherData.timezone}
          />
        </div>
      </div>
      <Image
        src={`${process.env.WEATHER_ICONS_URL}/${iconCode}@2x.png`}
        width={65}
        height={65}
        alt="Weather icon"
      />
      <div className="grid grid-cols-2 gap-4 items-center text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
        <h3 className="lg:col-span-1">
          Feels like:{" "}
          <span className="font-bold">
            {Math.round(weatherData.current.feels_like)}°C
          </span>
        </h3>
        <p className="lg:col-span-1 flex justify-end font-bold">
          {Math.round(weatherToday.temp.max)}°C /{" "}
          {Math.round(weatherToday.temp.min)}°C
        </p>
      </div>
      <div className="gap-4 items-center text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
        <div className="grid grid-cols-2">
          <p>
            Visibility: {Math.round(weatherData.current.visibility / 1000)}{" "}
            miles
          </p>
          <p className="flex justify-end">
            UV Index: {Math.round(weatherData.current.uvi)}
          </p>
        </div>
        <div className="grid grid-cols-2">
          <p>
            Pressure: {(weatherData.current.pressure / 1000).toFixed(1)} atm
          </p>
          <p className="flex justify-end">
            Dew point: {Math.round(weatherData.current.dew_point)}°
          </p>
        </div>
        <div className="grid grid-cols-2">
          <p>Humidity: {Math.round(weatherData.current.humidity)}%</p>
          <p className="flex justify-end">
            Wind: {Math.round(weatherData.current.wind_speed)} km/hr
          </p>
        </div>
      </div>
      <p className="text-sm md:text-base lg:text-lg py-1 font-medium">
        {weatherToday.summary}
      </p>
      <div className="grid grid-cols-2 mt-auto">
        <div className="justify-start flex items-center">
          <div className="hidden sm:block my-auto">
            <WeatherHourlyModal weatherData={weatherData} />
          </div>
        </div>
        {weatherData?.alerts && (
          <div className="justify-end flex items-center">
            <WeatherAlerts weatherAlerts={weatherData.alerts} />
          </div>
        )}
      </div>
    </div>
  );
};

export { WeatherTodayCard };
