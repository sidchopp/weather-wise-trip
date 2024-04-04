"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { format } from "date-fns";
import { AlertIcon } from "@/assets/icons";

const WeatherAlerts = ({ weatherAlerts }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const alert = weatherAlerts[0];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-start">
        <button
          type="button"
          onClick={openModal}
          className="animate-pulse hover:animate-none hover:scale-105"
        >
          <AlertIcon />
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/90" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 capitalize"
                  >
                    <div className="flex items-center">
                      <AlertIcon />
                      {alert.event}
                    </div>
                  </Dialog.Title>
                  <p className="text-sm py-3">
                    {format(new Date(alert.start * 1000), "EEEE")} -{" "}
                    {format(new Date(alert.end * 1000), "EEEE")}
                  </p>
                  <div>
                    <p className="text-sm">{alert.description}</p>
                    <p className="text-xs py-2 font-medium">
                      {" "}
                      Issued by: {alert.sender_name}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export { WeatherAlerts };
