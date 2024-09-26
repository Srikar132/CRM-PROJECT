import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
// import { Home, Users, BarChart, Bell, Settings, Search, Menu, X } from 'react-icons/fa';
import { FaHome, FaBell, FaCog, FaChevronDown, FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Import React Icons

const EnhancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    { id: 1, message: 'New message from John', time: '5 minutes ago' },
    { id: 2, message: 'Your report is ready', time: '1 hour ago' },
    { id: 3, message: 'Meeting in 30 minutes', time: '25 minutes ago' },
  ];

  return (
    <nav className="bg-white shadow-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/users"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Users
                </Link>
                <Link
                  to="/analytics"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Analytics
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 text-gray-800 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FaSearch className="h-5 w-5 text-gray-500 absolute left-3 top-2.5" />
              </div>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="ml-3 p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaBell className="h-6 w-6" />
              </button>
              <Link
                to="/settings"
                className="ml-3 p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaCog className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-600">
          <FaHome className="h-4 w-4" />
          <span className="mx-1">/</span>
          <span>Dashboard</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/users"
              className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Users
            </Link>
            <Link
              to="/analytics"
              className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Analytics
            </Link>
          </div>
        </div>
      </Transition>

      {/* Notification Dropdown */}
      <Transition
        show={isNotificationsOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="notifications-menu"
        >
          <div className="py-1" role="none">
            {notifications.map((notification) => (
              <a
                key={notification.id}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <p className="font-medium">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default EnhancedNavbar;
