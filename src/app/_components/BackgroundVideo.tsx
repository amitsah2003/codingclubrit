"use client"
import { useRef, useEffect } from "react"

interface BackgroundVideoProps {
  src: string
  poster?: string
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
    }
  }, [])

  return (
    <div className="absolute  inset-0 overflow-hidden h-[320px] lg:h-[430px]">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="w-full  object-cover h-[320px] lg:h-[430px]"
      />
    </div>
  )
}

export default BackgroundVideo
