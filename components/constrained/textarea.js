/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  PaperClipIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const assignees = [
  { name: "غير معين", value: null },
  {
    name: "أحمد خالد مصطفى",
    value: "أحمد خالد مصطفى",
    avatar:
      "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-1/121242321_183378023358492_5514636738684769651_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-5&_nc_sid=c6021c&_nc_ohc=RPHl8c9r9P8AX80QjPN&_nc_ht=scontent.ftun15-1.fna&oh=00_AT8rJD23edOeZ6Or8qTcUX8Cwr3evXXuL83Nbi7DchXmGg&oe=62611CB4",
  },
  // More items...
];
const labels = [
  { name: "بدون تسمية", value: null },
  { name: "ارااب", value: "ارااب" },
  // More items...
];
const dueDates = [
  { name: "No due date", value: null },
  { name: "Today", value: "today" },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TextArea() {
  const [assigned, setAssigned] = useState(assignees[0]);
  const [labelled, setLabelled] = useState(labels[0]);
  const [dated, setDated] = useState(dueDates[0]);

  return (
    <form action="#" className="relative">
      <div
        dir="rtl"
        className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
      >
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
          placeholder="عنوان"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="المقالة..."
          defaultValue={""}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-px">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
        <div className="flex flex-nowrap justify-end py-2 px-2 space-x-2 sm:px-3">
          <Listbox
            as="div"
            value={assigned}
            onChange={setAssigned}
            className="flex-shrink-0"
          >
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">Assign</Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3">
                    {assigned.value === null ? (
                      <UserCircleIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-300 sm:-ml-1"
                        aria-hidden="true"
                      />
                    ) : (
                      <img
                        src={assigned.avatar}
                        alt=""
                        className="flex-shrink-0 h-5 w-5 rounded-full"
                      />
                    )}

                    <span
                      className={classNames(
                        assigned.value === null ? "" : "text-gray-900",
                        "hidden truncate sm:ml-2 sm:block"
                      )}
                    >
                      {assigned.value === null ? "تعيين" : assigned.name}
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {assignees.map((assignee) => (
                        <Listbox.Option
                          key={assignee.value}
                          className={({ active }) =>
                            classNames(
                              active ? "bg-gray-100" : "bg-white",
                              "cursor-default select-none relative py-2 px-3"
                            )
                          }
                          value={assignee}
                        >
                          <div className="flex justify-end items-center">
                            <span className="mr-3 block font-medium truncate">
                              {assignee.name}
                            </span>

                            {assignee.avatar ? (
                              <img
                                src={assignee.avatar}
                                alt=""
                                className="flex-shrink-0 h-5 w-5 rounded-full"
                              />
                            ) : (
                              <UserCircleIcon
                                className="flex-shrink-0 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          <Listbox
            as="div"
            value={labelled}
            onChange={setLabelled}
            className="flex-shrink-0"
          >
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">Add a label</Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3">
                    <TagIcon
                      className={classNames(
                        labelled.value === null
                          ? "text-gray-300"
                          : "text-gray-500",
                        "flex-shrink-0 h-5 w-5 sm:-ml-1"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        labelled.value === null ? "" : "text-gray-900",
                        "hidden truncate sm:ml-2 sm:block"
                      )}
                    >
                      {labelled.value === null ? "أضف تسمية" : labelled.name}
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {labels.map((label) => (
                        <Listbox.Option
                          key={label.value}
                          className={({ active }) =>
                            classNames(
                              active ? "bg-gray-100" : "bg-white",
                              "cursor-default select-none relative py-2 px-3"
                            )
                          }
                          value={label}
                        >
                          <div className="flex justify-end items-center">
                            <span className="block font-medium truncate">
                              {label.name}
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

          {/* <Listbox
            as="div"
            value={dated}
            onChange={setDated}
            className="flex-shrink-0"
          >
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">
                  Add a due date
                </Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3">
                    <CalendarIcon
                      className={classNames(
                        dated.value === null
                          ? "text-gray-300"
                          : "text-gray-500",
                        "flex-shrink-0 h-5 w-5 sm:-ml-1"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        dated.value === null ? "" : "text-gray-900",
                        "hidden truncate sm:ml-2 sm:block"
                      )}
                    >
                      {dated.value === null ? "Due date" : dated.name}
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {dueDates.map((dueDate) => (
                        <Listbox.Option
                          key={dueDate.value}
                          className={({ active }) =>
                            classNames(
                              active ? "bg-gray-100" : "bg-white",
                              "cursor-default select-none relative py-2 px-3"
                            )
                          }
                          value={dueDate}
                        >
                          <div className="flex items-center">
                            <span className="block font-medium truncate">
                              {dueDate.name}
                            </span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox> */}
        </div>
        <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
            >
              <PaperClipIcon
                className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">
                إرفاق ملف
              </span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              نشر
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export { TextArea };
