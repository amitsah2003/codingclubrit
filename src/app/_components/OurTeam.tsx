import Image from "next/image"
import React from "react"
import { orbitron, poppins } from "../font"

type Props = {}

const OurTeam = (props: Props) => {
  return (
    <div>
      <section className=" dark:bg-gray-900 mb-2 p-6 md:p-3">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2
              className={`mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white font-serif ${poppins.className}`}
            >
              OUR TEAM
            </h2>
            <p
              className={`font-light text-white sm:text-xl dark:text-gray-400 font-serif ${poppins.className}`}
            >
              Code Club partners with a worldwide network of non-profit
              organizations to deliver coding education to young people within
              their communities.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 md:grid-cols-2  lg:grid-cols-4">
            <div className="text-center text-white dark:text-gray-400">
              <Image
                className="w-[50%] mx-auto md:w-full mt-2 rounded-full md:rounded-full sm:rounded-full"
                src={"/images/team/af.png"}
                alt="Bonnie Avatar"
                height={1000}
                width={1000}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white font-serif mt-4">
                <a href="#">Afzal</a>
              </h3>
              <div className="flex justify-center items-center">
                <p className="font-serif border-amber-400 border bg-yellow-500 sm:justify-between w-56  rounded-xl text-black">
                  President , Coding Club
                </p>
              </div>
            </div>
            <div className="text-center text-white dark:text-gray-400">
              <Image
                className="w-[50%] mx-auto md:w-full rounded-full md:rounded-full sm:rounded-full"
                src={"/images/team/img.png"}
                alt="Bonnie Avatar"
                height={1000}
                width={1000}
              />
              <h3 className=" text-2xl font-bold tracking-tight text-white dark:text-white font-serif mt-4">
                <a href="#">Amit Sah</a>
              </h3>
              <div className="flex justify-center items-center">
                <p className="font-serif border-amber-400 border bg-yellow-500 w-56  rounded-xl text-black ">
                  Vice-President , Coding Club
                </p>
              </div>
            </div>
            <div className="text-center text-white dark:text-gray-400">
              <Image
                className="w-[50%] mx-auto md:w-full rounded-full md:rounded-full sm:rounded-full"
                src={"/images/team/pu.png"}
                alt="Bonnie Avatar"
                height={1000}
                width={1000}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white font-serif mt-4">
                <a href="#">Purnima Chandrakar</a>
              </h3>

              <div className="flex justify-center items-center">
                <p className="font-serif border-amber-400 border bg-yellow-500 w-56  rounded-xl text-black">
                  Secretary , Coding Club
                </p>
              </div>
            </div>
            <div className="text-center text-white dark:text-gray-400">
              <Image
                className="w-[50%] mx-auto md:w-full rounded-full md:rounded-full sm:rounded-full"
                src={"/images/team/ptt.png"}
                alt="Bonnie Avatar"
                height={1000}
                width={1000}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white font-serif mt-4">
                <a href="#">Prakash Tandon</a>
              </h3>
              <div className="flex justify-center items-center">
                <p className="font-serif border-amber-400 border bg-yellow-500 w-56  rounded-xl text-black">
                  Treasurer , Coding Club
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
