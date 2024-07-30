import React from "react"
import ImageSlider from "./ImageSlider"

type Props = {}

const ImageSection = (props: Props) => {
  const images1 = [
    { id: 1, name: "/file3.png" },
    { id: 2, name: "/file3.png" },
    { id: 4, name: "/file3.png" },
    { id: 5, name: "/file3.png" },
    { id: 6, name: "/file3.png" },
    { id: 7, name: "/file3.png" },
    { id: 8, name: "/file3.png" },
    { id: 9, name: "/file3.png" },
    { id: 10, name: "/file3.png" },
  ]

  return (
    <div>
      <h1 className="text-white flex justify-center text-4xl font-extrabold font-serif mt-4">
        OUR MEMBER
      </h1>
      <h3 className="text-pink-500  flex justify-center  text-3xl ml-4 font-extrabold font-serif mt-6"></h3>
      <ImageSlider images={images1} disha={1} gati={2} />
    </div>
  )
}

export default ImageSection
