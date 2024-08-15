import React from "react"
import Header from "./_components/Header"
import Footer from "./_components/Footer"
import Notification from "./_components/Notification"
import OurTeam from "./_components/OurTeam"
import { EventsNotification } from "./_components/EventsNotification"
import Register from "./_components/Register"
import Header2 from "./_components/Header2"
import Student from "./_components/Student"
import TimelineComponent from "./_components/TimelineComponent"

type Props = {}
const HomePage = (props: Props) => {
  // const images = ["/3.jpg", "/1.jpeg", "/bbbbb.jpg"]
  return (
    <div>
      <Header />
      <Header2 />

      <div>
        <EventsNotification />
      </div>

      <div>
        <Student />
      </div>
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

export default HomePage
