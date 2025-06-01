"use client";
import { useState } from "react";
import moment from "moment-jalaali";
import { digitsEnToFa } from "@persian-tools/persian-tools";
moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

import ChooseYear from "./ChooseYear";

export default function Calender({
  onDateChange,
  setSelectedDate,
  selectedDate,
  setShowCalender,
}) {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedYear, setSelectedYear] = useState(null);

  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  const currentMonthIndex = parseInt(currentDate.format("jM")) - 1;

  const getVisibleMonths = () => {
    let startIndex = currentMonthIndex - 2;
    let endIndex = currentMonthIndex + 2;

    if (startIndex < 0) {
      endIndex += Math.abs(startIndex);
      startIndex = 0;
    }

    if (endIndex > 11) {
      const diff = endIndex - 11;
      startIndex = Math.max(0, startIndex - diff);
      endIndex = 11;
    }

    const result = months.slice(startIndex, endIndex + 1);

    return result.map((m, i) => ({
      name: m,
      index: startIndex + i,
    }));
  };

  const visibleMonths = getVisibleMonths();

  const baseYear = selectedYear
    ? parseInt(selectedYear)
    : parseInt(currentDate.format("jYYYY"));

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = moment(currentDate).startOf("jMonth").weekday();

  const changeMonth = (offset) => {
    setCurrentDate(moment(currentDate).add(offset, "jMonth"));
  };

  const yearChangeHandler = (newYear) => {
    setSelectedYear(newYear);

    setCurrentDate(
      moment(currentDate)
        .jYear(Number(newYear))
        .jMonth(currentDate.jMonth())
        .jDate(currentDate.jDate()),
    );
  };

  const monthClickHandler = (i) => {
    const updated = moment(currentDate).jMonth(i);
    setCurrentDate(updated);
    setSelectedDate(null);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };
  const confirmHandler = () => {
    setShowCalender(false);
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-[90%] flex-col gap-4 rounded-lg bg-white p-4 shadow-lg sm:w-[460px] sm:max-w-md sm:p-7">
        <div className="flex justify-between">
          <h2 className="mr-8 mt-3 h-5 w-8 text-[16px] font-bold">تاریخ</h2>

          <ChooseYear
            selectedYear={selectedYear}
            setSelectedYear={yearChangeHandler}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        </div>
        <div className="grid grid-cols-8 md:gap-x-2">
          <div className="col-span-2 mb-4 flex flex-col items-center justify-between">
            <button
              onClick={() => changeMonth(-1)}
              className="rounded px-3 py-1 text-gray-400"
            >
              <SlArrowUp />
            </button>

            <div className="flex flex-col justify-start gap-2">
              {visibleMonths.map((month) => (
                <div key={month.name}>
                  <div
                    className={`cursor-pointer px-4 py-2 text-center transition ${
                      month.index === currentMonthIndex
                        ? "border-b border-t border-gray-200 font-bold text-black"
                        : "text-gray-200"
                    }`}
                    onClick={() => monthClickHandler(month.index)}
                  >
                    <p>{month.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => changeMonth(1)}
              className="rounded px-3 py-1 text-gray-400"
            >
              <SlArrowDown />
            </button>
          </div>

          <div className="col-span-6 flex flex-col">
            <div className="grid grid-cols-7 text-center font-bold text-gray-600">
              {weekDays.map((day) => (
                <div key={day} className="py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 text-center">
              {Array(firstDayOfMonth)
                .fill(null)
                .map((_, index) => (
                  <div key={`empty-${index}`} className="py-2"></div>
                ))}

              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                (day) => {
                  const isSelected =
                    selectedDate &&
                    selectedDate.isSame(moment(currentDate).jDate(day), "day");
                  return (
                    <div
                      key={day}
                      className={`cursor-pointer rounded py-2 ${
                        isSelected
                          ? "rounded-full bg-[#1D434C] text-white"
                          : "hover:rounded-full hover:bg-[#1D434C] hover:text-white"
                      }`}
                      onClick={() =>
                        handleDateSelection(moment(currentDate).jDate(day))
                      }
                    >
                      {digitsEnToFa(day)}
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>

        {selectedDate && (
          <p className="mt-4 text-center text-gray-700">
            تاریخ انتخابی: {digitsEnToFa(selectedDate.format("jYYYY/jMM/jDD"))}
          </p>
        )}

        <div className="flex h-10 w-full justify-between gap-1">
          <button
            className="flex w-[211px] items-center justify-center rounded-lg bg-[#1D434C] font-bold text-white"
            onClick={confirmHandler}
          >
            تایید
          </button>
          <button
            className="flex w-[200px] items-center justify-center rounded-lg border border-black bg-white font-bold text-[#404040]"
            onClick={confirmHandler}
          >
            انصراف
          </button>
        </div>
      </div>
    </>
  );
}
