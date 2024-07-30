import React from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import { Button } from "@/components/ui/button"
type Props = {}

const Header = (props: Props) => {
  return (
    <div className="border-gray-900 px-2  dark:bg-gray-800 dark:border-gray-700 bg-opacity-10 bg-black shadow-md shadow-black">
      <header>
        <nav className="px-2 lg:px-2  dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
            <a href="https://flowbite.com" className="flex items-center">
              <Image
                src={"/logoo.png"}
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
              <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0  text-lg font-extrabold mr-4">
                <li>
                  <a
                    href="/#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:underline font-serif"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline font-serif"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="/Events"
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline font-serif"
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
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline font-serif"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href={"/contact-us"}
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline font-serif"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href={"/member"}
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline font-serif"
                  >
                    Our Member
                  </a>
                </li>
                <li>
                  <a
                    href={"/oursponser"}
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline font-serif"
                  >
                    Our Sponsors
                  </a>
                </li>
                {/* <a href="https://www.instagram.com/scripting_coders_ritee/?igsh=MWZoaWp4NzltZXh0OQ%3D%3D className="flex items-center >
                  <Image
                    src={"/instagram.png"}
                    className="ml-1 h-10 w-10 rounded-full"
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF75mkbqngqdgAAAY7Wj4IoRa-eeLWhi_yD_zGKG3tgyX30EqRB0PIXOFrxezNIw3ijc_GP6BL1u2vVZO8SeOcQZD9CwBZRjs7HyrMyOS13ZWe5MUO7WXRgMisbi9owYt8L5wo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fscripting-coders%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
                  className="flex items-center"
                >
                  <Image
                    src={"/linkedin.png"}
                    className="ml-1 h-10 w-10 rounded-full"
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VaVAhTaEQIakWoucNd3A"
                  className="flex items-center"
                >
                  <Image
                    src={"/whatsapp.png"}
                    className="ml-1 h-10 w-10 rounded-xl"
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </a> */}
                <div className="flex justify-center items-center px- ">
                  <Link href={"/sp.pdf"}>
                    <Button className="bg-transparent text-white border-2 rounded-xl hover:border-blue-900 font-serif">
                      DOWNLOAD RULEBOOK
                    </Button>
                  </Link>
                </div>
              </ul>
              <a href="https://rit.edu.in/" className="flex items-center">
                <Image
                  src={"/l1.png"}
                  className=" h-24 w-24 px-2  rounded-xl"
                  alt="Logo"
                  height={100}
                  width={100}
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
