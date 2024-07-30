import Image from "next/image"
import React from "react"

import Header from "../_components/Header"
import Footer from "../_components/Footer"
import ImageSection from "./_components/ImageSection"

type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <div>
      <Header />
      <ImageSection />
      <Footer />
    </div>
  )
}

export default GalleryPage
