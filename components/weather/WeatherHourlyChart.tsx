"use client";

import React, { useEffect, useRef, ReactElement } from "react";
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

  const timeAxisValues =
    weatherData.hourly &&
    weatherData.hourly.map((item) =>
      format(new Date(item.dt * 1000).toLocaleString("en-US", options), "p")
    );

  const temperatureAxisValues =
    weatherData.hourly &&
    weatherData.hourly.map((item) => parseFloat(item.temp.toFixed(1)));

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current && timeAxisValues && temperatureAxisValues) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy(); // Destroy existing chart instance
        }

        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: timeAxisValues,
            datasets: [
              {
                label: "Temp (°C) ",
                data: temperatureAxisValues,
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
  }, [temperatureAxisValues, timeAxisValues]);

  return (
    <div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export { WeatherHourlyChart };
