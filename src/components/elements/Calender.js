"use client";
import { useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

import dayjs from "dayjs";
import jalaliday from "jalaliday";
dayjs.extend(jalaliday);

export default function Calender() {
  const [currentDate, setCurrentDate] = useState(dayjs().calendar("jalali"));
  const [selectedDate, setSelectedDate] = useState(null);

  // محاسبه روزهای ماه شمسی
  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = currentDate.startOf("month").day();

  // روزهای هفته شمسی
  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  // تغییر ماه
  const changeMonth = (offset) => {
    setCurrentDate(currentDate.add(offset, "month"));
  };
  return (
    <>
      <div className="mx-auto max-w-md rounded-lg bg-white p-4 shadow-lg">
        {/* هدر تقویم */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => changeMonth(-1)}
            className="rounded bg-gray-200 px-3 py-1"
          >
            ◀
          </button>
          <h2 className="text-lg font-bold">
            {digitsEnToFa(currentDate.format("MMMM YYYY"))}
          </h2>
          <button
            onClick={() => changeMonth(1)}
            className="rounded bg-gray-200 px-3 py-1"
          >
            ▶
          </button>
        </div>

        {/* روزهای هفته */}
        <div className="grid grid-cols-7 text-center font-bold text-gray-600">
          {weekDays.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>

        {/* روزهای ماه */}
        <div className="grid grid-cols-7 text-center">
          {/* فاصله برای روزهای خالی اول ماه */}
          {Array(firstDayOfMonth)
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${index}`} className="py-2"></div>
            ))}

          {/* نمایش روزها */}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const isSelected =
              selectedDate && selectedDate.isSame(currentDate.date(day), "day");
            return (
              <div
                key={day}
                className={`cursor-pointer rounded py-2 ${isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                onClick={() => setSelectedDate(currentDate.date(day))}
              >
                {digitsEnToFa(day)}
              </div>
            );
          })}
        </div>

        {/* نمایش تاریخ انتخاب شده */}
        {selectedDate && (
          <p className="mt-4 text-center text-gray-700">
            تاریخ انتخابی: {digitsEnToFa(selectedDate.format("YYYY/MM/DD"))}
          </p>
        )}
      </div>
    </>
  );
}
