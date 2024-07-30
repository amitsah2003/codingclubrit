import React from "react"
import ImageSlider from "./ImageSlider"

type Props = {}

const GallerySection = (props: Props) => {
  const images1 = [
    { id: 1, name: "/s2.jpg" },
    { id: 2, name: "/s3.jpg" },
    { id: 4, name: "/s4.jpg" },
    { id: 5, name: "/s5.jpg" },
    { id: 6, name: "/s6.jpg" },
    { id: 7, name: "/s7.jpg" },
    { id: 8, name: "/s8.jpg" },
    { id: 9, name: "/s9.jpg" },
    { id: 10, name: "/s10.jpg" },
  ]

  const images2 = [
    { id: 1, name: "/l1.jpeg" },
    { id: 2, name: "/l2.jpeg" },
    { id: 3, name: "/l3.jpeg" },
    { id: 4, name: "/l4.jpeg" },
    { id: 5, name: "/l5.jpeg" },
    { id: 6, name: "/l6.jpeg" },
  ]

  const images3 = [
    { id: 1, name: "/g1.jpg" },
    { id: 2, name: "/g2.jpg" },
    { id: 3, name: "/g3.jpg" },
    { id: 4, name: "/g4.jpg" },
    { id: 5, name: "/g5.jpg" },
    { id: 6, name: "/g6.jpg" },
    { id: 7, name: "/g7.jpg" },
    { id: 8, name: "/g8.jpg" },
    { id: 9, name: "/g9.jpg" },
    { id: 10, name: "/g10.jpg" },
    { id: 11, name: "/g11.jpg" },
    { id: 12, name: "/g12.jpg" },
    { id: 13, name: "/g13.jpg" },
    { id: 14, name: "/g14.jpg" },
    { id: 15, name: "/g14.jpg" },
  ]

  const images4 = [
    { id: 1, name: "/g1.jpg" },
    { id: 2, name: "/g2.jpg" },
    { id: 3, name: "/g3.jpg" },
    { id: 4, name: "/g4.jpg" },
    { id: 5, name: "/g5.jpg" },
    { id: 6, name: "/g6.jpg" },
    { id: 7, name: "/g7.jpg" },
    { id: 8, name: "/g8.jpg" },
    { id: 9, name: "/g9.jpg" },
    { id: 10, name: "/g10.jpg" },
    { id: 11, name: "/g11.jpg" },
    { id: 12, name: "/g12.jpg" },
    { id: 13, name: "/g13.jpg" },
    { id: 14, name: "/g14.jpg" },
    { id: 15, name: "/g14.jpg" },
  ]

  const images5 = [
    { id: 1, name: "/g1.jpg" },
    { id: 2, name: "/g2.jpg" },
    { id: 3, name: "/g3.jpg" },
    { id: 4, name: "/g4.jpg" },
    { id: 5, name: "/g5.jpg" },
    { id: 6, name: "/g6.jpg" },
    { id: 7, name: "/g7.jpg" },
    { id: 8, name: "/g8.jpg" },
    { id: 9, name: "/g9.jpg" },
    { id: 10, name: "/g10.jpg" },
    { id: 11, name: "/g11.jpg" },
    { id: 12, name: "/g12.jpg" },
    { id: 13, name: "/g13.jpg" },
    { id: 14, name: "/g14.jpg" },
    { id: 15, name: "/g14.jpg" },
  ]
  return (
    <div>
      <h1 className="text-white flex justify-center text-4xl font-extrabold font-serif mt-4">
        PAST GLIMPSES
      </h1>
      <h3 className="text-pink-500  flex justify-center  text-3xl ml-4 font-extrabold font-serif mt-6">
        Soft Skills Traning Program
      </h3>
      <ImageSlider images={images1} disha={1} gati={1} />

      <div>
        <h3 className="text-pink-500 flex justify-center text-4xl font-extrabold font-serif">
          Linkedin Sessions For Nursing and Pharmacy
        </h3>
        <ImageSlider images={images2} disha={1} gati={1} />
      </div>
      <div>
        <h3 className="text-pink-500 flex justify-center text-4xl font-extrabold font-serif">
          E-Sport
        </h3>
        <ImageSlider images={images3} disha={1} gati={1} />
      </div>
      <div>
        <h3 className="text-pink-500 flex justify-center text-4xl font-extrabold font-serif">
          Unboxing Events
        </h3>
        <ImageSlider images={images4} disha={1} gati={1} />
      </div>
      <div>
        <h3 className="text-pink-500 flex justify-center text-4xl font-extrabold font-serif">
          Vote For Leader Member
        </h3>
        <ImageSlider images={images5} disha={1} gati={1} />
      </div>
    </div>
  )
}

export default GallerySection
