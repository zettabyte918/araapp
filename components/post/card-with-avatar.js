/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  StarIcon,
} from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CardWithAvatar() {
  return (
    <div className="bg-white  py-5 space-y-3 ">
      <div className="flex flex-row-reverse">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 ml-2 rounded-full"
            src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-1/121242321_183378023358492_5514636738684769651_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-5&_nc_sid=c6021c&_nc_ohc=RPHl8c9r9P8AX80QjPN&_nc_ht=scontent.ftun15-1.fna&oh=00_AT8rJD23edOeZ6Or8qTcUX8Cwr3evXXuL83Nbi7DchXmGg&oe=62611CB4"
            alt=""
          />
        </div>
        <div dir="rtl" className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">
            <a href="#" className="hover:underline">
              أحمد خالد مصطفى
            </a>
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
      <div dir="rtl" class=" text-gray-600 px-4 pt-5 pb-5 sm:p-6 sm:pt-0">
        <p>
          🎊 كونوا على الموعد مع أول لايف مباشر للدكتور - أحمد خالد مصطفى - حول
          مشروع "المختارون".. اليوم 22 مارس ⏱️ على الساعة 10 ليلا بتوقيت مصر 🇪🇬
          حصريا على الصفحة الرسمية للمختارين 👇
        </p>
      </div>
    </div>
  );
}

export { CardWithAvatar };
