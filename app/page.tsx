import { CitySelectionDropdown } from "@/components";

const Home = (): React.ReactElement => {
  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-12">
      <CitySelectionDropdown />
      <h2 className="p-6 text-xl lg:text-2xl font-normal sm:px-16 xl:px-48">
        Do not let the weather rain on your parade – plan your perfect trip.
      </h2>
    </main>
  );
};

export default Home;
