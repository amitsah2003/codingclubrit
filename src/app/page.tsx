import React from "react"
import Header from "./_components/Header"
import Navbar from "./_components/Navbar"
import Footer from "./_components/Footer"
import ImageSlider from "./_components/ImageSlider"
import Notification from "./_components/Notification"
import OurTeam from "./_components/OurTeam"

import BackgroundVideo from "./_components/BackgroundVideo"
import { EventsNotification } from "./_components/EventsNotification"
import Register from "./_components/Register"

import Header2 from "./_components/Header2"
import Student from "./_components/Student"
import Text from "./_components/Text"

// import Partner from "./_components/Partner"

type Props = {}

const page = (props: Props) => {
  // const images = ["/3.jpg", "/1.jpeg", "/bbbbb.jpg"]
  return (
    <div>
      <Header />
      <Header2 />
      {/* <div className="relative w-full h-[320px] lg:h-[500px]">
        <BackgroundVideo
          src="/codevideo.mp4"
          poster="https://via.placeholder.com/800x400.png?text=Video+Poster"
        />
      </div> */}
      <div>
        <Notification />
      </div>
      {/* <div>
        <ImageSlider />
      </div> */}

      <div>
        <EventsNotification />
      </div>

      <div>
        <Student />
      </div>

      {/* <div>
        <Events />
      </div> */}
      <div>
        <OurTeam />
      </div>

      <div>
        <Register />
      </div>
      <Footer />
    </div>
  )
}

export default page
