import Image from "next/image"
import React from "react"
import Header from "./Header"
import Footer from "./Footer"

type Props = {}

const Aboutus = (props: Props) => {
  return (
    <div>
      <Header />
      <section className=" dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white font-serif text-white ">
              Scripting Coders
            </h1>
            <p className="max-w-2xl mb-2 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 font-serif">
              Established In 2024 In Raipur Institutes of Technology, Located in
              Raipur, Chhattisgarh 100+ Students
            </p>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex h-[100%] w-[90%]">
            <Image
              className=" mb-3  shadow-lg"
              src={"/images/image/7.png"}
              alt="image"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </section>
      <div className=" lg:grid grid-cols-2  md:col-span-1 gap-16 py-1  lg:ml-12 lg:mr-12 md:ml-10 md:mr-10 text-white  max-sm:ml-5 max-sm:mr-5">
        <div className="text-justify leading-loose font-serif">
          Welcome to our coding club! We are a group of passionate individuals
          who love coding and programming. Our club is a place where you can
          learn, practice, and collaborate on coding projects with like-minded
          individuals. Whether you are a beginner looking to learn the basics of
          coding or an experienced programmer looking to expand your skills, our
          club is open to all levels of expertise. We offer workshops, coding
          challenges, project collaborations, guest speakers, and networking
          opportunities to help you grow as a coder. Let s code together and
          create amazing things! Our coding club is a community of individuals
          who share a passion for coding and programming. We come together to
          learn, practice, and collaborate on coding projects. The club offers
          various activities such as workshops, coding challenges, project
          collaborations, guest speakers, and networking opportunities. Members
          of the club can participate in these activities to enhance their
          coding skills, expand their knowledge, and connect with like-minded
          individuals.
        </div>
        <div className="text-justify leading-loose font-serif">
          Whether you are a beginner or an experienced programmer, there is
          something for everyone in our coding club. By joining the club, you
          can engage in coding-related discussions, share your projects, seek
          help from others, and contribute to the growth of the coding
          community. Our goal is to create a supportive and inspiring
          environment where members can learn, grow, and have fun while
          exploring the world of programming. If you have a passion for coding
          and want to connect with others who share that passion, our coding
          club is the perfect place for you. Join us and let s code together! A
          coding club is a group of individuals who come together to learn,
          practice, and collaborate on coding and programming projects. These
          clubs are often formed by students, professionals, or hobbyists who
          share a common interest in computer programming.
        </div>
      </div>

      <div className=" md:grid grid-cols-3  py-8 px-8 ml-2 mr-2  gap-2 sm:gap-2 text-white">
        <div className="w-full max-w-sm  border border-cyan-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center  ">
          <Image
            className="w-32 h-32 mb-3 rounded-full shadow-lg"
            src={"/images/image/1.jpg"}
            alt="image"
            height={1000}
            width={1000}
          />
          <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
            Develop your skills
          </h5>
          <span className="text-sm text-white dark:text-gray-400 font-serif">
            You can learn to create games, animations, websites, and robots
            alongside your young students at Code Club!
          </span>
        </div>

        <div className="w-full max-w-sm  border border-cyan-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center  ">
          <Image
            className="w-32 h-32 mb-3 rounded-full shadow-lg"
            src={"/images/image/2.jpg"}
            alt="image"
            height={1000}
            width={1000}
          />
          <h5 className="mb-1 text-xl font-medium text-white dark:text-white font-serif">
            Resources and support
          </h5>
          <span className="text-sm text-white dark:text-gray-400 font-serif">
            When you start a Code Club or join an existing one, we will give you
            all the coding projects and support you need!
          </span>
        </div>

        <div className="w-full max-w-sm  border border-cyan-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center  ">
          <Image
            className="w-32 h-32 mb-3 rounded-full shadow-lg"
            src={"/images/image/3.jpg"}
            alt="image"
            height={1000}
            width={1000}
          />
          <h5 className="mb-1 text-xl font-medium text-whitedark:text-white font-serif">
            Be part of the community
          </h5>
          <span className="text-sm text-white dark:text-gray-400 font-serif">
            Join more than 500 Code Clubs across India supporting young students
            to learn to code!
          </span>
        </div>
      </div>
      <div className=" ml-10 mr-10 text-white  ">
        <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 h-auto  ">
          <div className="  flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-sky-800 font-serif">
              RAIPUR INSTITUTE OF TECHNOLOGY (RITEE)
            </h5>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 font-serif">
              Raipur Institute of Technology (RITEE) was established in the year
              1995 under the aegis of Mahanadi Education Society by a group of
              eminent technocrats, industrialists, and management professionals
              coming from diverse backgrounds – industry, consultancy, academics
              & social development work with the aim of providing quality &
              contemporary technical education to the aspiring students, keeping
              in view the needs and challenges of the third millennium. The
              institute is approved by All India Council of Technical Education
              (AICTE) and the State Government Directorate of Technical
              Education and is affiliated to Chhattisgarh Swami Vivekananda
              Technical University, Bhilai.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus
