import React from "react"
import ImageSlider from "./ImageSlider"
import { poppins } from "@/app/font"

type Props = {}

const GallerySection = (props: Props) => {
  const images1 = [
    { id: 1, name: "/images/event/s2.jpg" },
    { id: 2, name: "/images/event/s3.jpg" },
    { id: 4, name: "/images/event/s4.jpg" },
    { id: 5, name: "/images/event/s5.jpg" },
    { id: 6, name: "/images/event/s6.jpg" },
    { id: 7, name: "/images/event/s7.jpg" },
    { id: 8, name: "/images/event/s8.jpg" },
    { id: 9, name: "/images/event/s9.jpg" },
    { id: 10, name: "/images/event/s10.jpg" },
  ]

  const images2 = [
    { id: 1, name: "/images/event/l1.jpeg" },
    { id: 2, name: "/images/event/l2.jpeg" },
    { id: 3, name: "/images/event/l3.jpeg" },
    { id: 4, name: "/images/event/l4.jpeg" },
    { id: 5, name: "/images/event/l5.jpeg" },
    { id: 6, name: "/images/event/l6.jpeg" },
  ]

  const images3 = [
    { id: 1, name: "/images/event/g1.png" },
    { id: 2, name: "/images/event/g2.png" },
    { id: 3, name: "/images/event/g3.png" },
    { id: 4, name: "/images/event/g4.png" },
    { id: 5, name: "/images/event/g5.png" },
    { id: 6, name: "/images/event/g6.png" },
    { id: 7, name: "/images/event/g7.png" },
    { id: 8, name: "/images/event/g8.png" },
    { id: 9, name: "/images/event/g9.png" },
    { id: 10, name: "/images/event/g10.png" },
  ]

  const images4 = [
    { id: 1, name: "/images/event/ub1.jpeg" },
    { id: 2, name: "/images/event/ub2.jpeg" },
    { id: 3, name: "/images/event/ub3.jpeg" },
    { id: 4, name: "/images/event/ub4.jpeg" },
    { id: 5, name: "/images/event/ub5.jpeg" },
    { id: 6, name: "/images/event/ub6.jpeg" },
    { id: 7, name: "/images/event/ub7.jpeg" },
    { id: 8, name: "/images/event/ub8.jpeg" },
  ]

  const images5 = [
    { id: 1, name: "/images/event/v1.png" },
    { id: 2, name: "/images/event/v2.png" },
    { id: 3, name: "/images/event/v3.png" },
    { id: 4, name: "/images/event/v4.png" },
    { id: 5, name: "/images/event/v5.png" },
    { id: 6, name: "/images/event/v6.png" },
    { id: 7, name: "/images/event/v7.png" },
    { id: 8, name: "/images/event/v8.png" },
    { id: 9, name: "/images/event/v9.png" },
    { id: 10, name: "/images/event/v10.png" },
  ]
  return (
    <div>
      <h1
        className={`text-white flex justify-center text-4xl font-extrabold font-serif mt-4 ${poppins.className}`}
      >
        PAST GLIMPSES
      </h1>
      <h3
        className={`text-cyan-700  flex justify-center  text-3xl ml-4 font-extrabold font-serif mt-6 ${poppins.className}`}
      >
        Soft Skills Traning Program
      </h3>
      <ImageSlider images={images1} disha={1} gati={3} />

      <div>
        <h3
          className={`text-cyan-600 flex justify-center text-4xl font-extrabold font-serif ${poppins.className}`}
        >
          Linkedin Sessions For Nursing and Pharmacy
        </h3>
        <ImageSlider images={images2} disha={0} gati={2} />
      </div>
      <div>
        <h3
          className={`text-cyan-600 flex justify-center text-4xl font-extrabold font-serif ${poppins.className}`}
        >
          E-Sport
        </h3>
        <ImageSlider images={images3} disha={1} gati={3} />
      </div>
      <div>
        <h3
          className={`text-cyan-600 flex justify-center text-4xl font-extrabold ${poppins.className}`}
        >
          Unboxing Events
        </h3>
        <ImageSlider images={images4} disha={0} gati={2} />
      </div>
      <div>
        <h3
          className={`text-cyan-600 flex justify-center text-4xl font-extrabold font-serif ${poppins.className}`}
        >
          Vote For Leader Member
        </h3>
        <ImageSlider images={images5} disha={1} gati={3} />
      </div>
    </div>
  )
}

export default GallerySection
