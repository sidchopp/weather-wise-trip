import Link from "next/link";
import { CityData } from "@/types";

interface CityCardProps {
  cityData: CityData;
}

const CityDescriptionCard = ({
  cityData,
}: CityCardProps): React.ReactElement => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-5 flex flex-col h-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500">
        {cityData?.title}
      </h2>
      <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 py-1">
        {cityData?.description}
      </p>
      <p className="flex-grow">
        {cityData?.extract}{" "}
        <Link
          href={cityData?.content_urls?.desktop?.page}
          target="_blank"
          className="text-left text-base font-medium text-blue-600 dark:text-blue-500 underline underline-offset-4"
        >
          More
        </Link>
      </p>
    </div>
  );
};

export { CityDescriptionCard };
