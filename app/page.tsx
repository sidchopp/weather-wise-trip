import { Heading, CitySelectionDropdown } from "@/components";

const Home = (): React.ReactElement => {
  return (
    <main className="flex flex-col items-center justify-center py-40 px-4 md:p-24">
      <CitySelectionDropdown />
      <Heading />
      <h2 className="p-6 text-xl lg:text-2xl font-normal sm:px-16 xl:px-48">
        Do not let the weather rain on your parade – plan your perfect trip.
      </h2>
    </main>
  );
};

export default Home;
