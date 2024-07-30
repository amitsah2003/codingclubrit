import Image from "next/image"
import React from "react"

type Props = {}

const Header2 = (props: Props) => {
  return (
    <div>
      <section className=" dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={"/images/image/8.png"}
              alt="mockup"
              height={1000}
              width={1000}
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-white font-serif">
              CODING CLUB
            </h1>
            <h2 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white text-white font-serif">
              Think | Code | Create | Deploy
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300 font-serif">
              Welcome to our coding club! We are a group of passionate
              individuals who love coding and programming. Our club is a place
              where you can learn, practice, and collaborate on coding projects
              with like-minded individuals.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started */}
            {/* <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
            {/* </a> */}
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header2
