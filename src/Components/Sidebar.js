import React from "react";
import {
  BoltIcon,
  ChartBarIcon,
  CommandLineIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ArrowLeftOnRectangleIcon,
  CalendarIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <h1 style={{color:"white"}}><BoltIcon className="w-10 h-10" />TaskSphere</h1>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3 ">
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/"
          >
            <CalendarIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Planner</span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/"
          >
            <ChartBarIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/"
          >
            <CommandLineIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Projects</span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/"
          >
            <UserGroupIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Utilities</span>
          </a>

          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="/"
          >
            <WrenchScrewdriverIcon className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Setting</span>
          </a>
        </nav>
        <div className="mt-6">
          
          <div className="flex items-center justify-between mt-6">
            <Link to="/login" className="flex items-center gap-x-2">
              <img
                className="object-cover rounded-full h-7 w-7"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Dan Abromov
              </span>
            </Link>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

Sidebar.displayName = "SidebarTwo";
