"use client"
import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const YourBrandSection = () => {
  const containerRef = useRef<HTMLInputElement>(null)
  let [direction, setDirection] = React.useState<number>(1)

  useEffect(() => {
    const interval = setInterval(() => {
      const current = containerRef.current
      if (current) {
        if (direction === 1) {
          current.scrollLeft += 1
        }
        if (direction === 0) {
          current.scrollLeft -= 1
        }

        let scrollLeft = Math.round(current.scrollLeft)
        let scrollWidth = current.scrollWidth - current.clientWidth

        if (scrollWidth === scrollLeft) {
          setDirection(0)
        }
        if (0 === scrollLeft) {
          setDirection(1)
        }
      }
    }, 20) // Adjust scroll interval here

    return () => clearInterval(interval)
  }, [direction])

  return (
    <div className=" mt-2">
      <div className="lg:px-12 py-4">
        <h1 className={cn("font-semibold text-2xl  lg:text-3xl px-4 ")}>
          EVENT OF SCRIPTING CODERS
        </h1>
        <div
          ref={containerRef}
          className="py-10 px-4 flex gap-6 lg:gap-12 overflow-x-scroll scrollbar-hide "
        >
          {["/5.png", "/5.png", "/5.png", "/5.png", "/5.png", "/5.png"].map(
            (item, i) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                }}
                className="p-2 w-[24rem] h-full px-4  rounded-lg bg-stone-800"
              >
                <Card className="bg-transparent border-none mt-3">
                  <div>
                    <Image
                      src={item}
                      width={400}
                      height={100}
                      alt="img"
                      className="w-full h-full mt-3"
                    />
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default YourBrandSection
