import { HomeIcon, PenIcon, StarIcon } from "lucide-react"
import React from "react"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "B.Tech (CSE)",
    location: "Raipur, C.G.",
    description:
      "After My Graduation. I immediately found a job as a  full stack developer.",
    icon: React.createElement(HomeIcon),
    date: "20-04-2023",
  },
  {
    title: "Spiritech Solutions",
    location: "Raipur, C.G.",
    description: "I worked as a full-stack developer  till now.",
    icon: React.createElement(StarIcon),
    date: "2023 - 2024",
  },
  {
    title: "Free-Lancing",
    location: "Raipur, C.G.",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(PenIcon),
    date: "2024 - present",
  },
] as const

export const projectsData = [
  {
    title: "Institute Management System(IMS)",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. Institute  manage their student and all college records.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Laravel"],
    imageUrl: "/images/image/1.jpg",
  },
  {
    title: "Asset Management System(AMS)",
    description: "This Software Help the Organization to manage their assets ",
    tags: ["Laravel", "Livewire", "Tailwind"],
    imageUrl: "/images/image/2.jpg",
  },
  {
    title: "Ziagno Dev",
    description:
      "This project help doctors and patients to  appointment shedule and cure their deseases",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer", "Django"],
    imageUrl: "/images/image/2.jpg",
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "PHP",
  "Redux",
  "MySQL",
  "C++",
  "JAVA",
  "Python",
  "Framer Motion",
  "Laravel",
  "Livewire",
] as const
