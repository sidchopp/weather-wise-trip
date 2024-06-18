import Image from "next/image";

const Home = (): React.ReactElement => {
  return (
    <main className="py-20">
      <section>
        <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Do not let the weather rain on your parade
            </h2>
            <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              Plan your perfect trip.
            </p>
          </div>
          <div className="lg:col-span-5 lg:flex">
            <Image
              src="https://images.unsplash.com/photo-1473864803180-ca1b3d93c9a0?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="weather"
              width={800}
              height={500}
              className="filter brightness-80"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
