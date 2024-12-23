"use client"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { LucideBell } from "lucide-react"

const ScrollEvent = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: ["0%", "-100%"],
      transition: {
        duration: 5, // Adjust duration as needed
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    })
  }, [controls])
  const items = [
    {
      title: "Soft Skills Traning Program",
    },
    {
      title: "Linkedin Sessions For Nursing and Pharmacy",
    },
    {
      title: "E-sport",
    },
    {
      title: "Unboxing Events",
    },
    {
      title: "vote for leader member",
    },
  ]

  return (
    <div className="overflow-hidden h-44">
      <motion.ul className="overflow-hidden" animate={controls}>
        {items.map((item, index) => (
          <li key={index}>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <LucideBell className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{item.title}</p>
                <p className="text-sm text-muted-foreground">
                  {/* {item.description} */}
                </p>
              </div>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}

export default ScrollEvent
