import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import './globals.css'
import Logo from '../../public/Logo2.png'
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

// import { ThemeProvider, useTheme } from "next-themes";
export const metadata = {
  title: "Seyam-Store",
};
export default function RootLayout(

  {
    children,
  }: {
    children: React.ReactNode,
  }) {
  // const { theme, setTheme } = useTheme()
  // const currenttheme = theme === 'system' ? systemTheme : theme
  return (

    // <ThemeProvider enableSystem={true} attribute="class">
      <ClerkProvider>
        <html lang="en">
          <link rel="icon" href="/Logo2.png" sizes="any" />
        <body style={{ height: '100vh' }}>

            {<nav className="bg-white border-gray-200 dark:bg-gray-900">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                  <Image
                    src='/Logo2.png'
                    className=" mr-3"
                    alt="Flowbite Logo"
                    width={35}
                    height={100}
                    priority
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Seyam-Store
                  </span>
                </a>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >

                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a
                        href="/"
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Contact
                      </a>
                    </li>
                    <UserButton afterSignOutUrl="/sign-in" />
                  </ul>


                </div>
              </div>
            </nav>}
            {children}</body>
        </html>
      </ClerkProvider>
    // </ThemeProvider>
  );
}
