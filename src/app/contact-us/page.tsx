import React from "react"
import Header from "../_components/Header"
import Image from "next/image"

type Props = {}

const ContactUs: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className=" lg:w-[30%] w-full flex justify-center items-center ">
          <div className="h-[24rem] w-[25rem] mb-8 lg:ml-16">
            <Image
              src="/images/image/9.png"
              className="w-full aspect-[1]"
              alt="Bonnie Avatar"
              height={1000}
              width={1000}
            />
          </div>
        </div>
        <div className=" lg:w-[70%] w-full lg:py-10 lg:px-40">
          <div>
            <section>
              <div className="">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white font-serif">
                  Contact Us
                </h2>
                <p className="mb-4 lg:mb-16 font-light text-center text-white sm:text-xl font-serif">
                  We use an agile approach to test assumptions and connect with
                  the needs of your audience early and often.
                </p>
                <form action="#" className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white font-serif"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white font-serif"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-white font-serif"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-white font-serif"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-900 sm:w-fit hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-offset-lime-600 dark:bg-teal-700 dark:hover:bg-pink-700 dark:focus:ring-emerald-900 font-serif"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
