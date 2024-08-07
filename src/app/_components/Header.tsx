import React from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { orbitron, poppins } from "../font"
type Props = {}

const Header = (props: Props) => {
  return (
    <div
      className={cn(
        "border-gray-900 px-2  dark:bg-gray-800 dark:border-gray-700 bg-opacity-10 bg-black shadow-md shadow-black"
      )}
    >
      <header>
        <nav className="px-2 lg:px-2  dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
            <a href="#" className="flex items-center">
              <Image
                src={"/images/logos/16.png"}
                className="mr-3 h-28 w-28 rounded-full"
                alt="Logo"
                height={100}
                width={100}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                {/* CODING CLUB */}
              </span>
            </a>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
              id="mobile-menu-2"
            >
              <ul
                className={cn(
                  poppins.className,
                  "flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0  text-lg font-extrabold mr-4"
                )}
              >
                <li>
                  <a
                    href="/#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0  "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="block py-2 pr-4 pl-3 text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0">
                      About
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className={` ${poppins.className}`}>
                        <Link href={"/about-us"}>About us</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className={` ${poppins.className}`}>
                        <Link href={"/principle"}> Principle’s Message</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className={` ${poppins.className}`}>
                        <Link href={"/sectartsirmsg"}>Secretary’s Message</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>

                {/* <li>
                  <Link
                    href="/about-us"
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 "
                  >
                    About Us
                  </Link>
                </li> */}
                <li>
                  <a
                    href="/Events"
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700  "
                  >
                    Events
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Notices
                  </a>
                </li> */}
                <li>
                  <a
                    href="/gallery"
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 "
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href={"/contact-us"}
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700  "
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href={"/member"}
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700  "
                  >
                    Our Member
                  </a>
                </li>
                <li>
                  <a
                    href={"/oursponser"}
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700  "
                  >
                    Our Sponsors
                  </a>
                </li>
                <div
                  className={cn(
                    orbitron.className,
                    "flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0  text-lg font-extrabold mr-4  justify-center items-center"
                  )}
                >
                  <Link href={"/pdf/1.pdf"}>
                    <Button
                      className={`bg-yellow-500 text-white border-2 rounded-xl hover:border-blue-900 font-serif ${poppins.className}`}
                    >
                      DOWNLOAD RULEBOOK
                    </Button>
                  </Link>
                </div>
              </ul>
              <a href="https://rit.edu.in/" className="flex items-center">
                <Image
                  src={"/images/logos/24.png"}
                  className=" h-24 w-28 px-2  rounded-xl"
                  alt="Logo"
                  height={1000}
                  width={1000}
                />
              </a>
            </div>
            <Navbar />
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Header
