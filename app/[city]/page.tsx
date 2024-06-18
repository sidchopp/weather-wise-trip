import { ReactElement } from "react";
import { format } from "date-fns";

import {
  CityDescriptionCard,
  WeatherTodayCard,
  WeatherWeeklyForecastCard,
} from "@/components";
import { fetchCityInfo, fetchWeatherInfo } from "@/lib/api";
import { cityNames } from "@/lib/cityNames";

interface CityHomeProps {
  params: { city: string };
}

export function generateStaticParams() {
  return cityNames.map((cityName) => ({
    city: cityName,
  }));
}

const fetchData = async (city: string) => {
  const dateToday = format(new Date(), "yyyy-MM-dd");
  const weatherData = await fetchWeatherInfo(city, dateToday);
  const cityData = await fetchCityInfo(city);

  return { cityData, weatherData };
};

const CityHome = async ({ params }: CityHomeProps): Promise<ReactElement> => {
  const cityDetails = await fetchData(params.city);
  const { cityData, weatherData } = cityDetails;

  return (
    <main className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
        {weatherData && (
          <div className="col-span-1 md:col-span-1">
            <WeatherTodayCard weatherData={weatherData} />
          </div>
        )}
        {cityData && (
          <div className="col-span-1 md:col-span-2 flex flex-col h-full">
            <div className="flex-grow">
              <CityDescriptionCard cityData={cityData} />
            </div>
          </div>
        )}
      </div>
      {weatherData && <WeatherWeeklyForecastCard weatherData={weatherData} />}
    </main>
  );
};

export default CityHome;
