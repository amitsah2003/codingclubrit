"use client"

import Image from "next/image"
import React from "react"
import { Typewriter } from "react-simple-typewriter"
import Header from "../_components/Header"
import Footer from "../_components/Footer"
type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <section className=" dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <Image
                className="w-full dark:hidden"
                src={"/images/image/5.jpg"}
                alt="dashboard image"
                height={1000}
                width={1000}
              />

              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-yellow-500 dark:text-white">
                  Principal’s Message
                </h2>
                <p className="mb-6 font-light text-white md:text-lg text-justify dark:text-gray-400">
                  <Typewriter
                    loop={0}
                    cursorColor="yellow"
                    delaySpeed={0}
                    typeSpeed={50}
                    cursor
                    cursorStyle={"|"}
                    words={[
                      "Learning is more fun and efficient when we help each other along the way. I strongly believe that the Coding club of Raipur institute of Technology, through its activities will provides adequate awareness and resources among students to develop the required skills in the field of computer science & engineering and the IT sector. I convey all my best wishes to the entire team for their success..",
                    ]}
                  />
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
