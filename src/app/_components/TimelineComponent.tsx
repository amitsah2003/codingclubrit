"use client"

import { FactoryIcon, School } from "lucide-react"
import React, { useEffect, useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "./Style.css"

const TimelineComponent = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div style={isClient ? { padding: "20px", minHeight: "100vh" } : {}}>
      <h1 style={{ textAlign: "center" }}>My Timeline</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FactoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
          <p>Worked on developing scalable web applications and services.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2010"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">Bachelors Degree</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University Name
          </h4>
          <p>Studied Computer Science and participated in various projects.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default TimelineComponent
