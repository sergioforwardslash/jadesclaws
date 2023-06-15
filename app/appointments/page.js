"use client";

import { STORE_CLOSING_TIME, STORE_OPENING_TIME, STORE_TIME_INTERVAL } from "@/constants/config";
import { add, format } from "date-fns";
import React, { useState } from "react";
import ReactCalendar from "react-calendar";

const Appointments = () => {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  console.log(date.dateTime);

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;
    const beginning = add(justDate, { hours: STORE_OPENING_TIME });
    const end = add(justDate, { hours: STORE_CLOSING_TIME });
    const interval = STORE_TIME_INTERVAL;

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgGray">
      <h1 className="text-3xl text-black font-semibold mb-4">
        Book an Appointment
      </h1>
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg w-full max-w-lg">
        {date.justDate ? (
          <div className="flex max-w-lg flex-wrap justify-center gap-4 p-6">
            {times?.map((time, i) => (
              <div
                key={`time-${i}`}
                className="rounded-lg bg-gray-200 p-2 w-1/2 sm:w-1/3 md:w-1/4"
              >
                <button
                  type="button"
                  onClick={() =>
                    setDate((prev) => ({ ...prev, dateTime: time }))
                  }
                >
                    {format(time, 'kk:mm')}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <ReactCalendar
            minDate={new Date()}
            view="month"
            className="REACT-CALENDAR p-2"
            onClickDay={(date) =>
              setDate((prev) => ({ ...prev, justDate: date }))
            }
          />
        )}
      </div>
    </div>
  );
};

export default Appointments;
