import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import ActiveSectionContextProvider from "@/context/ActiveSectionContext"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-800 via-black to-cyan-900">
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  )
}
