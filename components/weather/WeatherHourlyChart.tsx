"use client";

import { useEffect, useRef, ReactElement } from "react";
import Chart from "chart.js/auto";
import { format } from "date-fns";
import { WeatherData } from "@/types";

interface WeatherHourlyChartProps {
  weatherData: WeatherData;
}

const WeatherHourlyChart = ({
  weatherData,
}: WeatherHourlyChartProps): ReactElement => {
  const options = { timeZone: weatherData.timezone };

  const timeXAxisValues = (weatherData.hourly || []).map((item) => {
    const formattedTime = format(
      new Date(item.dt * 1000).toLocaleString("en-US", options),
      "h"
    );
    const formattedDate = format(
      new Date(item.dt * 1000).toLocaleString("en-US", options),
      "bbb"
    );
    return `${formattedTime}${" "}${formattedDate}`;
  });

  const temperatureYAxisValues =
    weatherData.hourly &&
    weatherData.hourly.map((item) => parseFloat(item.temp.toFixed(1)));

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current && timeXAxisValues && temperatureYAxisValues) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy(); // Destroy existing chart instance
        }

        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: timeXAxisValues,
            datasets: [
              {
                label: "Temp (°C)",
                data: temperatureYAxisValues,
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    return () => {
      // Cleanup: destroy chart instance when component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timeXAxisValues, temperatureYAxisValues]);

  return (
    <div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export { WeatherHourlyChart };
