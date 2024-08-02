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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header2
