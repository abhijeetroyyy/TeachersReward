"use client"; // Make sure this is at the top of your file to indicate client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation';
import ConnectButton from '@/ConnectButton';

const Navbar: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="bg-teal-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon can be added here for mobile menu */}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1
                className="text-xl font-bold cursor-pointer"
                onClick={() => navigateTo('/')}
              >
                TeacherRewards
              </h1>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a
                href="#"
                className="text-white hover:bg-teal-600 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => navigateTo('/')}
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:bg-teal-600 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => navigateTo('/rewards')}
              >
                Rewards
              </a>
              <a
                href="#"
                className="text-white hover:bg-teal-600 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => navigateTo('/about')}
              >
                About
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            {/* Add more elements if needed, like user profile or logout */}
            <ConnectButton/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
