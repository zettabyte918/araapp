/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";

import {
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  StarIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";

import {
  EmojiHappyIcon,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  PaperClipIcon,
  ThumbUpIcon,
  XIcon,
} from "@heroicons/react/solid";

const moods = [
  // {
  //   name: "Excited",
  //   value: "excited",
  //   icon: FireIcon,
  //   iconColor: "text-white",
  //   bgColor: "bg-red-500",
  // },
  {
    name: "الحب",
    value: "الحب",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-indigo-400",
  },
  // {
  //   name: "Happy",
  //   value: "happy",
  //   icon: EmojiHappyIcon,
  //   iconColor: "text-white",
  //   bgColor: "bg-green-400",
  // },
  // {
  //   name: "Sad",
  //   value: "sad",
  //   icon: EmojiSadIcon,
  //   iconColor: "text-white",
  //   bgColor: "bg-yellow-400",
  // },
  {
    name: "ممتاز",
    value: "ممتاز",
    icon: ThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "أنا لا اشعر بشيء",
    value: null,
    icon: XIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CardWithAvatar() {
  const [selected, setSelected] = useState(moods[2]);
  return (
    <div className="bg-indigo-200 p-1 my-5 rounded-md py-5 space-y-3 ">
      <div className="flex flex-row-reverse">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 ml-2 rounded-full"
            src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-1/121242321_183378023358492_5514636738684769651_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-5&_nc_sid=c6021c&_nc_ohc=RPHl8c9r9P8AX80QjPN&_nc_ht=scontent.ftun15-1.fna&oh=00_AT8rJD23edOeZ6Or8qTcUX8Cwr3evXXuL83Nbi7DchXmGg&oe=62611CB4"
            alt=""
          />
        </div>
        <div dir="rtl" className="min-w-0 flex-1">
          <p className="text-sm flex font-medium text-gray-900">
            <a href="#" className="hover:underline">
              أحمد خالد مصطفى
            </a>
            <CheckCircleIcon
              className="-ml-1 h-5 w-5 mr-1 text-indigo-600 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </p>
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
              9 ديسمبر الساعة 11:43 صباحًا
            </a>
          </p>
        </div>
        <div className="flex-shrink-0 self-center flex">
          <Menu
            dir="rtl"
            as="div"
            className="relative z-30 inline-block text-left"
          >
            <div>
              <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-2 py-2 text-sm"
                        )}
                      >
                        <StarIcon
                          className="ml-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>اضافة الى المفضلة</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-2 py-2 text-sm"
                        )}
                      >
                        <CodeIcon
                          className="ml-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>انسخ الكود</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-2 py-2 text-sm"
                        )}
                      >
                        <FlagIcon
                          className="ml-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>أبلغ عن مشكلة</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div dir="rtl" className="text-gray-700 px-4 pt-5 pb-2 space-y-2 sm:pt-0">
        <p>
          🎊 كونوا على الموعد مع أول لايف مباشر للدكتور - أحمد خالد مصطفى - حول
          مشروع المختارون.. اليوم 22 مارس ⏱️ على الساعة 10 ليلا بتوقيت مصر 🇪🇬
          حصريا على الصفحة الرسمية للمختارين 👇
        </p>
        <div dir="rtl" className="flex items-center">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">Your mood</Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative -m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500">
                    <span className="flex items-center justify-center">
                      {selected.value === null ? (
                        <span className="flex items-center">
                          <EmojiHappyIcon
                            className="flex-shrink-0 h-5 w-5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Add your mood</span>
                        </span>
                      ) : (
                        <span>
                          <div
                            className={classNames(
                              selected.bgColor,
                              "w-8 h-8 rounded-full flex items-center justify-center"
                            )}
                          >
                            <selected.icon
                              className="flex-shrink-0 h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="sr-only">{selected.name}</span>
                        </span>
                      )}
                      <span className="mr-2">0</span>
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                      {moods.map((mood) => (
                        <Listbox.Option
                          key={mood.value}
                          className={({ active }) =>
                            classNames(
                              active ? "bg-gray-100" : "bg-white",
                              "cursor-default select-none relative py-2 px-3"
                            )
                          }
                          value={mood}
                        >
                          <div className="flex items-center">
                            <div
                              className={classNames(
                                mood.bgColor,
                                "w-8 h-8 rounded-full flex items-center justify-center"
                              )}
                            >
                              <mood.icon
                                className={classNames(
                                  mood.iconColor,
                                  "flex-shrink-0 h-5 w-5"
                                )}
                                aria-hidden="true"
                              />
                            </div>
                            <span className="mr-3 block font-medium truncate">
                              {mood.name}
                            </span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>
    </div>
  );
}

export { CardWithAvatar };
