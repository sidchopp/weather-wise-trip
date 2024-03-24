import Image from "next/image";
import { format } from "date-fns";

import { WeatherData } from "./types";

interface WeatherWeeklyForecastCardProps {
  weatherData: WeatherData;
}

const WeatherWeeklyForecastCard = ({
  weatherData,
}: WeatherWeeklyForecastCardProps): React.ReactElement => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-6 flex flex-col h-full w-full my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
        {weatherData.daily.map((item, index) => (
          <div key={item.dt}>
            <div
              key={item.dt}
              className="grid grid-cols-2 gap-4 flex items-center justify-center"
            >
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-500">
                {index === 0
                  ? "Today"
                  : format(new Date(item.dt * 1000), "EEE")}
              </p>
              {item.weather.map((weather) => (
                <div key={weather.id}>
                  <Image
                    key={weather.icon}
                    src={`${process.env.WEATHER_ICONS_URL}/${weather.icon}@2x.png`}
                    alt={weather.main}
                    width={50}
                    height={50}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm py-1">
              {Math.round(item.temp.max)}°C / {Math.round(item.temp.min)}
              °C
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-light">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WeatherWeeklyForecastCard };
