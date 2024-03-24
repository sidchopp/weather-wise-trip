import { ReactElement } from "react";
import { format } from "date-fns";

import { Heading } from "@/components";
import { WeatherTodayCard } from "@/components/weather";
import { fetchCityInfo, fetchWeatherInfo } from "@/lib/api";

interface CityHomeProps {
  params: { city: string };
}

const fetchData = async (city: string) => {
  const dateToday = format(new Date(), "yyyy-MM-dd");
  const weatherNewData = await fetchWeatherInfo(city, dateToday);
  const cityData = await fetchCityInfo(city);

  return { cityData, weatherNewData };
};

const CityHome = async ({ params }: CityHomeProps): Promise<ReactElement> => {
  const cityDetails = await fetchData(params.city);
  const { cityData, weatherNewData } = cityDetails;

  return (
    <main className="p-8">
      <Heading />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex flex-col md:flex-row">
        <div className="col-span-1 md:col-span-1">
          <WeatherTodayCard weatherNewData={weatherNewData} />
        </div>
        {/* City Description card here... */}
      </div>
    </main>
  );
};

export default CityHome;
