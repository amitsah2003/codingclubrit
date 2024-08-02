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
            <Link
              href="#"
              className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image
                src={"/logo1.png"}
                className="mr-3 h-20 w-20 "
                alt="Logo"
                height={100}
                width={100}
              />
            </Link>
            <ul className="flex flex-wrap justify-center items-center  text-gray-900 dark:text-white">
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">
                  <Image
                    src={"/instagram.png"}
                    className="mr-3 h-5 w-5 "
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                  <Image
                    src={"/linkedin.png"}
                    className="mr-3 h-5 w-5 "
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">
                  <Image
                    src={"/twitter.png"}
                    className="mr-3 h-5 w-5 "
                    alt="Logo"
                    height={100}
                    width={100}
                  />
                </Link>
              </li>
            </ul>
            <p className="my-2 text-gray-500 dark:text-gray-400 font-serif">
              Raipur Institute of Technology , Mahanadi Education Society, since
              1995,
              <br />
              Educational institution Chhatauna, Mandir Hasaud
            </p>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-serif">
              © 2021-2025
              <a href="#" className="hover:underline font-serif"></a>. All
              Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
