import React, { useState } from "react";
import moment from "moment-jalaali";
import { digitsEnToFa } from "@persian-tools/persian-tools";
function ChooseYear() {
  const currentJYear = moment().jYear();
  const allYears = Array.from({ length: 50 }, (_, i) => currentJYear - i);
  const yearsPerPage = 10;

  const [yearPage, setYearPage] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(moment());

  const startIndex = yearPage * yearsPerPage;
  const visibleYears = allYears.slice(startIndex, startIndex + yearsPerPage);

  return (
    <div className="relative w-fit">
      {/* Dropdown Button */}
      <div
        className="w-[100px] cursor-pointer rounded border border-gray-300 bg-[#E1EDF0] px-3 py-2 text-right text-xs"
        onClick={() => setIsYearDropdownOpen((prev) => !prev)}
      >
        {selectedYear ? digitsEnToFa(selectedYear) : "سال (شمسی)"}
      </div>

      {/* Dropdown Content */}
      {isYearDropdownOpen && (
        <div className="absolute right-0 top-12 z-10 w-[150px] rounded border bg-white p-2 shadow">
          {/* Pagination Controls */}
          <div className="mb-2 flex items-center justify-between">
            <button
              onClick={() => setYearPage((p) => Math.max(p - 1, 0))}
              disabled={yearPage === 0}
              className="text-gray-600 disabled:opacity-30"
            >
              ▶
            </button>
            <span className="text-sm font-bold text-gray-700">سال‌ها</span>
            <button
              onClick={() =>
                setYearPage((p) =>
                  (p + 1) * yearsPerPage < allYears.length ? p + 1 : p,
                )
              }
              disabled={(yearPage + 1) * yearsPerPage >= allYears.length}
              className="text-gray-600 disabled:opacity-30"
            >
              {" "}
              ◀
            </button>
          </div>

          {/* Year Options */}
          <div className="max-h-[200px] overflow-y-auto">
            {visibleYears.map((year) => (
              <div
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  setCurrentDate(moment(currentDate).jYear(year));
                  setIsYearDropdownOpen(false);
                }}
                className="cursor-pointer rounded px-2 py-1 text-sm hover:bg-[#E1EDF0]"
              >
                {digitsEnToFa(year)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChooseYear;
