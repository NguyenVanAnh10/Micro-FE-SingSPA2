"use client";

import * as React from "react";

import { Calendar } from "@euroland/shadcn-ui-styleguide";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  );
}
