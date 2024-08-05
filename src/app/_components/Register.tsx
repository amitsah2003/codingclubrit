import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

const Register = (props: Props) => {
  return (
    <div>
      <div className="py-10 px-4 md:px-10 lg:px-20  text-white h-full">
        <div className="flex flex-col items-center  border border-gray-900 rounded-lg shadow-2xl md:flex-row md:border-0 dark:border-gray-900 dark:bg-gray-900 dark:hover:bg-gray-900 h-full p-6">
          <div className="flex flex-col justify-between p-4 leading-normal text-center md:text-left">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-sky-800  font-serif">
              Join Our Family
            </h5>
            <p className="mb-3 font-normal text-white text-l dark:text-gray-400 font-serif">
              We offer workshops, coding challenges, project collaborations,
              guest speakers,
              <br /> and networking opportunities to help you grow as a coder.
              <br />
              Let code together and create amazing things!
            </p>
            <div className="flex justify-center md:justify-start items-center">
              <Link href={"https://forms.gle/66vj4iFVEy2XJZ937"}>
                <Button className="bg-transparent text-white border-2 rounded-xl hover:border-blue-900 text-xl font-serif">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-6 md:mt-0 md:ml-auto">
            <Link
              href={
                "https://www.instagram.com/scripting_coders_ritee/?igsh=MWZoaWp4NzltZXh0OQ%3D%3D"
              }
            >
              <Image
                src={"/images/logos/2.png"}
                alt="Instagram"
                height={100}
                width={100}
                className="w-14 md:w-14 lg:w-16 rounded-full"
              />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF75mkbqngqdgAAAY7Wj4IoRa-eeLWhi_yD_zGKG3tgyX30EqRB0PIXOFrxezNIw3ijc_GP6BL1u2vVZO8SeOcQZD9CwBZRjs7HyrMyOS13ZWe5MUO7WXRgMisbi9owYt8L5wo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fscripting-coders%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
              }
            >
              <Image
                src={"/images/logos/3.png"}
                alt="LinkedIn"
                height={100}
                width={100}
                className="w-14 md:w-14 lg:w-16"
              />
            </Link>
            <Link
              href={"https://whatsapp.com/channel/0029VaVAhTaEQIakWoucNd3A"}
            >
              <Image
                src={"/images/logos/1.png"}
                alt="WhatsApp"
                height={100}
                width={100}
                className="w-14 md:w-14 lg:w-16"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
