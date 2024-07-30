"use client"
import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import Image from "next/image"
type Image = {
  id: number
  name: string
}
type ImageSliderProps = {
  images: Image[]
  disha: 1 | 0
  gati: 0 | 1 | 2 | 3 | 4 | 5
}
const ImageSlider = ({ images, disha, gati }: ImageSliderProps) => {
  const containerRef = useRef<HTMLInputElement>(null)
  let [direction, setDirection] = React.useState<number>(disha)
  let [speed, setSpeed] = React.useState<number>(gati)

  //   setInterval(() => {
  //     speed === 0 ? setSpeed(gati) : setSpeed(0)
  //   }, 2000)

  useEffect(() => {
    const interval = setInterval(() => {
      const current = containerRef.current
      if (current) {
        if (direction === 1) {
          current.scrollLeft += speed
        }
        if (direction === 0) {
          current.scrollLeft -= speed
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
  }, [direction, speed])

  return (
    <div>
      <div>
        <div
          ref={containerRef}
          className="py-10 px-4 flex gap-6 lg:gap-12 overflow-x-scroll scrollbar-hide"
        >
          {images.map((item, i) => (
            <motion.div
              onHoverStart={() => setSpeed(1)}
              onHoverEnd={() => setSpeed(gati)}
              key={item.id}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
              }}
              className="p-2 min-w-[15rem]  min-h-[10rem] px-4  rounded-full border border-sky-300 hover:border-3"
            >
              <Card className="bg-transparent border-none">
                <div>
                  <Image src={item.name} width={2000} height={1000} alt="img" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
