import Image from "next/image"
import React from "react"

type Props = {}

const OurTeam = (props: Props) => {
  return (
    <div>
      <section className=" dark:bg-gray-900 mb-2 p-6 md:p-3">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white font-serif">
              Our team
            </h2>
            <p className="font-light text-white sm:text-xl dark:text-gray-400 font-serif">
              Code Club collaborates with a global network of non-profit
              organisations, working together to bring Code Club to young people
              in their communities.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 md:grid-cols-2  lg:grid-cols-4">
            <div className="text-center text-white dark:text-gray-400">
              <Image
                className="w-[50%] mx-auto md:w-full  rounded-full md:rounded-full sm:rounded-full"
                src={"/images/team/af.png"}
                alt="Bonnie Avatar"
                height={1000}
                width={1000}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white font-serif">
                <a href="#">MD.Afzal</a>
              </h3>
              <p className="font-serif">President,coding club</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="text-center text-white dark:text-gray-400">
              <Image
                className="w-[50%] mx-auto md:w-full rounded-full md:rounded-full sm:rounded-full"
                src={"/images/team/img.png"}
                alt="Bonnie Avatar"
                height={1000}
                width={1000}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white font-serif">
                <a href="#">Amit Sah</a>
              </h3>
              <p className="font-serif"> Vice-President,coding club</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="text-center text-white dark:text-gray-400">
              <Image
                className="w-[50%] mx-auto md:w-full rounded-full md:rounded-full sm:rounded-full"
                src={"/images/team/pu.png"}
                alt="Bonnie Avatar"
                height={1000}
                width={1000}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white font-serif">
                <a href="#">Purnima chandrakar</a>
              </h3>
              <p className="font-serif">Secretary,coding club</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="text-center text-white dark:text-gray-400">
              <Image
                className="w-[50%] mx-auto md:w-full rounded-full md:rounded-full sm:rounded-full"
                src={"/images/team/ptt.png"}
                alt="Bonnie Avatar"
                height={1000}
                width={1000}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white font-serif">
                <a href="#">Prakash Tandon</a>
              </h3>
              <p className="font-serif">Treasurer,coding club</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
