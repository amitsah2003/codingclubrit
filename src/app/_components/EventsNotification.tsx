import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BellIcon, EyeIcon, PersonStandingIcon } from "lucide-react"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import ScrollEvent from "./ScrollEvent"
import ScrollNotification from "./ScrollNotification"

export function EventsNotification() {
  return (
    <div className="grid md:grid-cols-2 gap-10 py-10 md:px-28 sm:columns-1">
      <div>
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] font-serif">
          <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px]  dark:bg-gray-800">
            <div>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex justify-center">EVENTS</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-1 ">
                  <ScrollEvent />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>
      <div>
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
          <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px]  dark:bg-gray-800 font-serif">
            <div>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex justify-center">
                    NOTIFICATION
                  </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-1">
                  <ScrollNotification />
                  {/* <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <BellIcon className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Everything
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Email digest, mentions & all activity.
                      </p>
                    </div>
                  </div>
                  <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                    <PersonStandingIcon className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Available
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Only mentions and comments.
                      </p>
                    </div>
                  </div>
                  <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <EyeIcon className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Ignoring
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Turn off all notifications.
                      </p>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>
    </div>
  )
}
