import { City } from "./types";

interface CityCardProps {
  cityData: City | null;
}

const CityDescriptionCard = ({
  cityData,
}: CityCardProps): React.ReactElement => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-6 flex flex-col h-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500">
        {cityData?.title}
      </h2>
      <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 py-1">
        {cityData?.description}
      </p>
      <p className="py-5 flex-grow">{cityData?.extract}</p>
      <a
        href={cityData?.content_urls?.desktop?.page}
        target="_blank"
        className="max-w-24 inline-flex items-center justify-center py-2 text-base font-medium text-center dark:text-gray-200 bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
      >
        More
      </a>
    </div>
  );
};

export { CityDescriptionCard };
