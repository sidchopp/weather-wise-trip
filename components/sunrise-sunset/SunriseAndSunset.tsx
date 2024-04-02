import { SunIcon } from "../../assets/icons";
import { format } from "date-fns";

interface SunriseAndSunSetProps {
  sunrise: number;
  sunset: number;
  timeZone: string;
}

const SunriseAndSunSet = ({
  sunrise,
  sunset,
  timeZone,
}: SunriseAndSunSetProps) => {
  const options = { timeZone: timeZone };
  const sunriseTime = format(
    new Date(sunrise * 1000).toLocaleString("en-US", options),
    "p"
  );
  const sunsetTime = format(
    new Date(sunset * 1000).toLocaleString("en-US", options),
    "p"
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center py-2">
        <div>
          <SunIcon />
        </div>
        <div className="flex flex-col items-start justify-center pl-2 text-xs sm:text-sm">
          <div>{sunriseTime}</div>
          <div>{sunsetTime}</div>
        </div>
      </div>
    </div>
  );
};

export { SunriseAndSunSet };
