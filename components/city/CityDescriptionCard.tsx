import Link from "next/link";
import { CityData } from "@/types";

interface CityCardProps {
  cityData: CityData;
}

const CityDescriptionCard = ({
  cityData,
}: CityCardProps): React.ReactElement => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg sm:p-4 p-6 flex flex-col h-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500">
        {cityData?.title}
      </h2>
      <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 py-1">
        {cityData?.description}
      </p>
      <p className="flex-grow pb-2">{cityData?.extract}</p>
      <div className="flex justify-start my-2">
        <Link
          href={cityData?.content_urls?.desktop?.page}
          target="_blank"
          className="inline-flex py-2 px-4 text-base font-medium text-center dark:text-gray-200 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export { CityDescriptionCard };
