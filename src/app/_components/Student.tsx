import Image from "next/image"
import React from "react"
import { poppins } from "../font"

type Props = {}

const Student = (props: Props) => {
  return (
    <div>
      <div className="mx-auto  max-w-screen-sm lg:mb-16">
        <h2
          className={` text-4xl tracking-tight font-extrabold text-white dark:text-white font-serif text-center mt-5 ${poppins.className}`}
        >
          INSIGHTS
        </h2>
      </div>

      <div className="grid lg:grid-cols-3  md:grid-cols-3 gap-4 items-center  justify-center  md:mr-12 lg:px-48">
        <div className="w-72 p-4 ml-4 border rounded-3xl ">
          <Image
            src={"/images/logos/20.png"}
            alt="mockup"
            height={100}
            width={100}
            className=" ml-20 h-20 w-20"
          />
          <a href="#">
            <h5
              className={`mb-2 text-xl font-semibold tracking-tight text-yellow-500 dark:text-white ml-4 ${poppins.className}`}
            >
              70+
              <br />
              Students Enrolled
            </h5>
          </a>
        </div>

        <div className="w-72 p-4 ml-4 border rounded-3xl">
          <Image
            src={"/images/logos/18.png"}
            alt="mockup"
            height={100}
            width={100}
            className=" ml-20 h-20 w-20"
          />
          <a href="#">
            <h5
              className={`mb-2 text-xl font-semibold tracking-tight text-yellow-500 dark:text-white ml-4 ${poppins.className}`}
            >
              10+ <br />
              Workshops Complete
            </h5>
          </a>
        </div>

        <div className="w-72 p-4 ml-4 border rounded-3xl">
          <Image
            src={"/images/logos/19.png"}
            alt="mockup"
            height={100}
            width={100}
            className=" ml-20 h-20 w-20"
          />
          <a href="#">
            <h5
              className={`mb-2 text-xl font-semibold tracking-tight text-yellow-500 dark:text-white ml-4 ${poppins.className}`}
            >
              10+ <br />
              Skilled Instructors
            </h5>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Student
