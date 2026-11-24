import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Link } from "react-router-dom"
import type { Room } from "../data/mockData"

type Props = {
  room: Room;
}

export default function CardImage({ room }: Props) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{room.class}</Badge>
        </CardAction>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>
          {(room.description).slice(0, 100)}...
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link className="w-full" to={"/room"}>
          <Button className="w-full py-2 h-fit bg-[#6f9170] justify-end cursor-pointer">
              <p className="flex-1 pl-5">Book Room</p>
              <span className="grid h-7 lg:h-9 w-7 lg:w-9 place-items-center rounded-full text-[#6f9170] bg-white transition-transform group-hover:translate-x-0.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Button>
        
        </Link>
      </CardFooter>
    </Card>
  )
}
