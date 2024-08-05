import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="lg:hidden font-serif  ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={"/images/logos/6.png"}
            className="ml-1 mr-3 h-10 w-10 "
            alt="Logo"
            height={1000}
            width={1000}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-cyan-900">
          <DropdownMenuItem>
            <Image
              src={"/images/logos/9.png"}
              className="ml-1 mr-3 h-5 w-5  "
              alt="Logo"
              height={100}
              width={100}
            />
            <Link href={"/#"}>Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image
              src={"/images/logos/11.png"}
              className="ml-1 h-5  mr-3 w-5 "
              alt="Logo"
              height={100}
              width={100}
            />
            <Link href={"/about-us"}>About us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image
              src={"/images/logos/8.png"}
              className="ml-1 h-5 w-5  mr-3"
              alt="Logo"
              height={100}
              width={100}
            />
            <Link href={"/#"}>Events</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image
              src={"/images/logos/12.png"}
              className="ml-1 h-5 w-5  mr-3"
              alt="Logo"
              height={100}
              width={100}
            />
            <Link href={"/gallery"}>Gallery</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image
              src={"/images/logos/21.png"}
              className="ml-1 h-5 w-5  mr-3"
              alt="Logo"
              height={100}
              width={100}
            />
            <Link href={"/contact-us"}>Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image
              src={"/images/logos/22.png"}
              className="ml-1 h-5 w-5  mr-3"
              alt="Logo"
              height={100}
              width={100}
            />
            <Link href={"/pdf/1.pdf"}>Download Rulebook</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Navbar
