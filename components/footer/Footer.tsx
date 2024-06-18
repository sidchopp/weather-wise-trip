import Link from "next/link";
const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bottom-0 left-0 right-0">
      <div className="w-full mx-auto py-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://sid-chopra.netlify.app/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            target="blank"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              My other{" "}
              <span className="text-blue-600 dark:text-blue-500">projects</span>
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Weather Wise trip
          </span>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export { Footer };
