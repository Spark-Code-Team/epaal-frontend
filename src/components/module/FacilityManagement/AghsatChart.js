"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AghsatChart ({ percentage, amount }) {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#4A6FA5", "#EAEFF4"],
        hoverBackgroundColor: ["#3B5F8A", "#DCE3E9"],
      },
    ],
  };

  const options = {
    cutout: "70%", // مقدار داخلی برای زیبایی بیشتر
    plugins: {
      legend: { display: false }, // حذف لیبل‌ها
      tooltip: { enabled: false }, // غیرفعال کردن راهنمای شناور
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold text-gray-700">
            {percentage}%
          </span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">مبلغ اعتبار</p>
      <p className="text-lg font-bold text-gray-800">
        {Number(amount).toLocaleString()} تومان
      </p>
    </div>
  );
};
