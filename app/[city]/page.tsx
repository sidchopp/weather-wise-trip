import { ReactElement } from "react";
import { format } from "date-fns";

import { Heading } from "@/components";
import {
  WeatherTodayCard,
  WeatherWeeklyForecastCard,
} from "@/components/weather";
import { CityDescriptionCard } from "@/components/city";
import { fetchCityInfo, fetchWeatherInfo } from "@/lib/api";

interface CityHomeProps {
  params: { city: string };
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
    <main className="p-8">
      <Heading />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex flex-col md:flex-row">
        <div className="col-span-1 md:col-span-1">
          <WeatherTodayCard weatherData={weatherData} />
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col h-full">
          <div className="flex-grow">
            <CityDescriptionCard cityData={cityData} />
          </div>
        </div>
      </div>
      <WeatherWeeklyForecastCard weatherData={weatherData} />
    </main>
  );
};

export default CityHome;
