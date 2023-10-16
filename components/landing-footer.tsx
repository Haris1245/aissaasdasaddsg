import React from "react";

const LandingFooter = () => {
  return (
    <footer className="bg-[#121313] rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="/fdgfdgs.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="mr-4 hover:underline md:mr-6 "
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8 " />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            WinnerAI™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default LandingFooter;
