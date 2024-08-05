import Image from "next/image"
import React from "react"
import Header from "../_components/Header"
import Footer from "../_components/Footer"

type Props = {}

const Sponsors = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <section className=" dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white dark:text-white font-serif">
                OUR SPONSERS
              </h2>
              <p className="font-light text-gray-400 sm:text-xl dark:text-gray-400  font-serif">
                Powering innovation and excellence in our coding club. Thank you
                for your generous support in nurturing the next generation of
                tech leaders!
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 ">
              <div className="flex justify-between items-center p-2  rounded-lg border border-gray-600 shadow-md dark:bg-gray-700 dark:border-gray-900">
                <div className="flex items-center space-x-4 ">
                  <Image
                    src={"/images/partner/2.png"}
                    alt="Jese Leos avatar"
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center p-2  rounded-lg border border-gray-600 shadow-md dark:bg-gray-700 dark:border-gray-900">
                <div className="flex items-center space-x-4">
                  <Image
                    src={"/images/partner/1.png"}
                    alt="Bonnie Green avatar"
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Sponsors
