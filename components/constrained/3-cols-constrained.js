import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FireIcon, PencilIcon } from "@heroicons/react/solid";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { VerticalNavigation } from "./vertical-navigation";
import { TextArea } from "./textarea";
import { CardWithAvatar } from "../post";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ThreeColsConstrained() {
  return (
    <>
      {/* Background color split screen for large screens */}
      <div
        className="fixed top-0 left-0 w-1/2 h-full bg-white"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
        aria-hidden="true"
      />
      <div className="relative min-h-screen flex flex-col">
        {/* Navbar */}
        <Disclosure
          as="nav"
          className="flex-shrink-0 fixed w-full z-40 shadow-md bg-indigo-600"
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex flex-row-reverse md:flex-row items-center justify-between lg:justify-end h-16">
                  {/* Links section */}
                  <div className="flex md:hidden items-center justify-end px-2 lg:px-0 xl:w-64">
                    <div className="flex-shrink-0">
                      <span className=" text-xl text-gray-50">
                        المختارون{" "}
                        <span className="text-xs p-2 bg-indigo-700 rounded-md hover:bg-transparent">
                          بالنور نوقد شعلة التغيير
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* <div className="hidden lg:block lg:w-80">
                    <div className="flex items-center justify-strat">
                      <div className="flex">
                        <a
                          href="#"
                          className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                        >
                          Documentation
                        </a>
                        <a
                          href="#"
                          className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                        >
                          Support
                        </a>
                      </div>
                    </div>
                  </div> */}

                  {/* Search section */}
                  {/* <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="w-full px-2 lg:px-6">
                      <label htmlFor="search" className="sr-only">
                        Search projects
                      </label>
                      <div className="relative text-indigo-200 focus-within:text-gray-400">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <SearchIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                          placeholder="Search projects"
                          type="search"
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuAlt1Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  {/* Logo section */}
                  <div className="hidden md:flex items-center justify-end px-2 lg:px-0 xl:w-64">
                    <div className="flex-shrink-0">
                      <span className=" text-xl text-gray-50">
                        المختارون{" "}
                        <span className="text-xs p-2 bg-indigo-700 rounded-md hover:bg-transparent">
                          بالنور نوقد شعلة التغيير
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                  >
                    Support
                  </Disclosure.Button>
                </div>
                <div className="pt-4 pb-3 border-t border-indigo-800">
                  <div className="px-2">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                    >
                      Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                    >
                      Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* 3 column wrapper */}
        <div className="flex-grow w-full pt-16 max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex lg:flex-1 flex-col-reverse lg:flex-row min-w-0 bg-white xl:flex">
            <div
              dir="rtl"
              className="border-b hidden xl:block border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white"
            >
              <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* Start left column area */}
                <div className="h-full fixed space-y-4">
                  <div className=" flex">
                    <h2> المتداول لك</h2>
                    <FireIcon
                      className="block mr-2 text-indigo-600 h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <div className=" flex">
                    <h2>اقتراحات المتابعة</h2>
                    <PencilIcon
                      className="block mr-2 text-indigo-600 h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {/* End left column area */}
              </div>
            </div>

            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div
                style={{ minHeight: "100rem" }}
                className="h-full py-6 px-4 sm:px-6 lg:px-8"
              >
                {/* Start main area*/}
                <TextArea />
                {/* <div className="relative h-full" style={{ minHeight: "36rem" }}>
                  <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" />
                </div> */}
                <CardWithAvatar />
                {/* End main area */}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 hidden lg:block pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
            <div className="h-full pl-6 py-6 lg:w-80">
              {/* Start right column area */}
              <div className="fixed md:w-80">
                <VerticalNavigation />
              </div>
              {/* End right column area */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ThreeColsConstrained };
