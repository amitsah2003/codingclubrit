import Image from "next/image"
import React from "react"

type Props = {}

const Student = (props: Props) => {
  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-4 items-center  justify-center mt-8 md:px-8 lg:px-48">
      <div className="w-72 p-4 ml-4 border rounded-3xl ">
        <Image
          src={"/images/logos/20.png"}
          alt="mockup"
          height={100}
          width={100}
          className=" ml-20 h-20 w-20"
        />
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white ml-4">
            70+
            <br />
            Student Enrolled
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
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white ml-4">
            10+ <br />
            Workshop Complete
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
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white ml-4">
            10+ <br />
            Skilled Instructors
          </h5>
        </a>
      </div>
    </div>
  )
}

export default Student
