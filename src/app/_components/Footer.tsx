import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <div>
        <footer className="p-4  md:p-8 lg:p-10 dark:bg-gray-800">
          <div className="mx-auto max-w-screen-xl text-center my-1">
            {/* <Link
              href="#"
              className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image
                src={"/images/logos/1.png"}
                className="mr-3 h-20 w-20 "
                alt="Logo"
                height={100}
                width={100}
              />
            </Link> */}
            <ul className="flex flex-wrap justify-center items-center  text-gray-900 dark:text-white">
              <li>
                <Link
                  href="https://www.instagram.com/?hl=en"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <Image
                    src={"/images/logos/2.png"}
                    className="mr-3 h-5 w-5 "
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/feed/"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  <Image
                    src={"/images/logos/3.png"}
                    className="mr-3 h-5 w-5 "
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/home"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <Image
                    src={"/images/logos/4.png"}
                    className="mr-3 h-5 w-5 "
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </Link>
              </li>
            </ul>
            <p className="my-2 text-gray-500 dark:text-gray-400 font-serif">
              RITEE Group of Institutes (Under the aegis of Mahanadi Education
              Society)
              <br />
            </p>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-serif">
              © 2021-2025
              <a href="#" className="hover:underline font-serif"></a>. All
              Rights Reserved. Design and maintain by Amit sah.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
