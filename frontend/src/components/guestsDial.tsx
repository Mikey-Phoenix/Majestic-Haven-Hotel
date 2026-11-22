"use client"

import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { UserRound, Plus, Minus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function DropdownMenuBasic() {
    const dropdownRef = useRef<HTMLButtonElement>(null);

    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
  return (
    <DropdownMenu >
      <DropdownMenuTrigger render={
        <div className="w-full">
            <div className="flex items-center gap-3 md:text-xl w-full py-2 px-4 rounded-lg md:rounded-full cursor-pointer hover:bg-[#7a9a77]/40">
                <UserRound className="mr-2 h-4 w-4" />
                <p>{rooms} room, {adults} adult, {children} children</p>
            </div>
            <Button ref={dropdownRef} variant="outline" className="hidden">Open</Button>
        </div>
    } />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem closeOnClick={false}>
            <p>Rooms</p>
            <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" className="h-6 w-6 p-0" onClick={() => setRooms(rooms + 1)}>
                    <Plus className="h-4 w-4" />
                </Button>
                <p>{rooms}</p>
                <Button variant="outline" className="h-6 w-6 p-0" onClick={() => setRooms(Math.max(1, rooms - 1))}>
                    <Minus className="h-4 w-4" />
                </Button>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem closeOnClick={false}>
            <p>Adults</p>
            <span className="text-gray-500">18+</span>
            <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" className="h-6 w-6 p-0" onClick={() => setAdults(adults + 1)}>
                    <Plus className="h-4 w-4" />
                </Button>
                <p>{adults}</p>
                <Button variant="outline" className="h-6 w-6 p-0" onClick={() => setAdults(Math.max(1, adults - 1))}>
                    <Minus className="h-4 w-4" />
                </Button>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem closeOnClick={false}>
            <p>Children</p>
            <span className="text-gray-500">4-17</span>
            <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" className="h-6 w-6 p-0" onClick={() => setChildren(children + 1)}>
                    <Plus className="h-4 w-4" />
                </Button>
                <p>{children}</p>
                <Button variant="outline" className="h-6 w-6 p-0" onClick={() => setChildren(Math.max(0, children - 1))}>
                    <Minus className="h-4 w-4" />
                </Button>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
