"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="bg-teal-500 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">TeacherRewards</h2>
          <div className="flex space-x-4 mb-4">
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
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TeacherRewards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
