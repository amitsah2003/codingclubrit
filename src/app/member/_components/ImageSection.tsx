import React from "react"
import ImageSlider from "./ImageSlider"

type Props = {}

const ImageSection = (props: Props) => {
  const images1 = [
    { id: 1, name: "/images/ourmember/1.jpg" },
    { id: 2, name: "/images/ourmember/2.jpg" },
    { id: 3, name: "/images/ourmember/3.jpg" },
    { id: 4, name: "/images/ourmember/4.jpg" },
    { id: 5, name: "/images/ourmember/5.jpg" },
    { id: 5, name: "/images/ourmember/6.jpg" },
  ]

  return (
    <div>
      <h1 className="text-white flex justify-center text-4xl font-extrabold font-serif mt-4">
        OUR MEMBER
      </h1>
      <h3 className="text-cyan-700  flex justify-center  text-3xl ml-4 font-extrabold font-serif mt-6"></h3>
      <ImageSlider images={images1} disha={1} gati={2} />
    </div>
  )
}

export default ImageSection
