"use client"

import { LucideGraduationCap } from "lucide-react"
import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

// import { useSectionInView } from "@/lib/hooks"

export const experiencesData = [
  {
    title: "B.Tech (CSE)",
    location: "Raipur, C.G.",
    description:
      "After My Graduation. I immediately found a job as a  full stack developer.",
    icon: React.createElement(LucideGraduationCap),
    date: "20-04-2023",
  },
  {
    title: "Spiritech Solutions",
    location: "Raipur, C.G.",
    description: "I worked as a full-stack developer  till now.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Free-Lancing",
    location: "Raipur, C.G.",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const

export default function Event() {
  // const { ref } = useSectionInView("Event")
  // const { theme } = useTheme()

  let theme = "dark"
  return (
    <section id="experience">
      <h1>My experience</h1>
      <VerticalTimeline lineColor="red">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
