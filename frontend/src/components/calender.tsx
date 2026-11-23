"use client"

import * as React from "react"
import { useRef } from "react"
import { addDays, format, startOfToday } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { Field, FieldLabel } from "./ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"

export default function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: startOfToday(),
    to: addDays(startOfToday(), 20),
  })

  const popoverRef = useRef<HTMLButtonElement>(null)

  return (
    <Field className={`mx-auto min-w-[60%]`}>
      {date &&(
        <FieldLabel htmlFor="date-picker-range" className="md:text-xl text-lg py-2 px-4 rounded-lg md:rounded-full cursor-pointer hover:bg-[#7a9a77]/40" >
          <CalendarIcon />
          {format((date?.from  || ""), "LLL dd, y")} - {format((date?.to  || ""), "LLL dd, y") || ""}
        </FieldLabel>
      )}
      <Popover>
        <PopoverTrigger ref={popoverRef} render={<Button variant="outline" id="date-picker-range" className="justify-start px-2.5 font-normal hidden"><CalendarIcon data-icon="inline-start" />{date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}</Button>} />
        <PopoverContent className="w-auto p-0 translate-10 md:translate-40" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
