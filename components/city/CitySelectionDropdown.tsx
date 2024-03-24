"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";

import { cityNames } from "@/lib/cityNames";
import { ChevronUpDownIcon } from "@/assets/icons";

const CitySelectionDropdown = (): React.ReactElement => {
  return (
    <div className="fixed top-5 w-72">
      <Listbox>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-blue-50 dark:bg-blue-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">Select a City</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base sm:text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
              {cityNames.map((city, cityIdx) => (
                <Listbox.Option
                  key={cityIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-6 ${
                      active
                        ? "hover:bg-gray-50 dark:hover:bg-gray-700"
                        : "text-gray-900 dark:text-gray-100"
                    }`
                  }
                  value={city}
                >
                  <Link
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    key={city}
                    href={`/${city}`}
                  >
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </Link>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export { CitySelectionDropdown };
