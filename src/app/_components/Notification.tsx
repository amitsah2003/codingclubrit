import React from "react"
import Marquee from "react-fast-marquee"
type Props = {}

const Notification = (props: Props) => {
  const news = [
    "Coding competitions can foster a spirit of learning and knowledge sharing, and provide opportunities for networking, mentorship, and exposure to industry professionals.",
    " Once coding club members are familiar with a coding language, they can work on creative projects to become more familiar with its functions and systems.",
    "Scratch programming can be a fun and interactive way for children new to coding to get a taste of it.",
    "Next event is surprize for all the students",
  ]

  return (
    <div>
      <div className="bg-cyan-700 rounded-full text-white lg:px-8  px-2 h-10 mt-4 py-2 text-justify  flex gap-2 font-serif">
        <div className="text-sm  ">Notification:-</div>
        <div className="w-full direction-normal text-justify overflow-hidden">
          <Marquee>
            {news.map((val, index) => (
              <p key={val} className="mr-10">
                {val}
              </p>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Notification
