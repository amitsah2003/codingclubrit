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
                className="w-full dark:hidden aspect-[13/11]"
                src={"/images/image/6.jpeg"}
                alt="dashboard image"
                height={1000}
                width={1000}
              />

              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-yellow-500 dark:text-white">
                  Secretary’s Message
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
                      "The coding club serves as an invaluable platform for students to enhance their programming skills and foster a collaborative environment. Through a variety of activities such as weekly coding challenges, hands-on workshops, and hackathons, the club not only encourages practical learning but also nurtures creativity and innovation. The recent introduction of the mentorship program is particularly commendable, as it provides new members with guidance and support from experienced peers, ensuring that everyone, regardless of their skill level, can grow and succeed. The dedication and effort you put into organizing these events and initiatives have significantly contributed to the club’s vibrant and dynamic community.",
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

// import React from "react"
// import Header from "../_components/Header"
// import Footer from "../_components/Footer"

// type Props = {}

// const page = (props: Props) => {
//   return (
//     <div>
//       <Header />
//       <div>
//         <div>
//           <div>
//             <section className=" dark:bg-gray-900">
//               <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
//                 <Image
//                   className="w-full dark:hidden aspect-[9/8]"
//                   src={"/images/image/6.jpeg"}
//                   alt="dashboard image"
//                   height={1000}
//                   width={1000}
//                 />

//                 <div className="mt-4 md:mt-0">
//                   <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//                     Secretary’s Message
//                   </h2>
//                   <p className="mb-6 font-light text-gray-500 md:text-lg text-justify dark:text-gray-400">
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Vitae illum voluptatibus quaerat velit totam placeat iusto
//                     quidem, dolore, perferendis cupiditate repudiandae, amet
//                     sit? Voluptate aliquid commodi officiis cumque itaque
//                     laborum cum quibusdam earum ex explicabo! Sint velit,
//                     consequuntur iure nisi tempora ut. Numquam quos assumenda
//                     earum quas deleniti nostrum totam, aut ut saepe vitae
//                     delectus consequuntur a facilis neque laborum temporibus
//                     officiis atque fugiat esse facere, iusto officia,
//                     consectetur sed? Maiores cum ipsam autem corporis rerum
//                     dicta dolor quis eius obcaecati dolorem earum quia beatae
//                     recusandae iusto ea, explicabo, at sed possimus ab assumenda
//                     ut quasi numquam? Eius, aspernatur architecto.
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default page
