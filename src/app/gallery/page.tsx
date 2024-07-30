import Image from "next/image"
import React from "react"
import GallerySection from "./_components/GallerySection"
import Header from "../_components/Header"
import Footer from "../_components/Footer"

type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <div>
      <Header />
      <GallerySection />
      <Footer />
    </div>
  )
}

export default GalleryPage
