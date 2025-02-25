"use client"

import { useState } from "react"
import { useSelector } from "react-redux"



export default function ProfileDashboardPage() {

    const profile = useSelector(store => store.profile)

    return (
        <div className="flex flex-col items-center gap-5 md:h-full md:w-full md:items-stretch md:gap-10 md:p-10 mb-10">
        <div
          id="personal-information"
          className="font-bold md:mb-10 md:flex md:flex-row md:items-center md:justify-start"
        >
          <p>اطلاعات شخصی</p>
        </div>
        <div
          id="first-row"
          className="md:flex md:flex-row md:items-center md:justify-evenly"
        >
          <div id="name-input-box" className="md:flex md:w-5/12 md:flex-col">
            <div id="name-input-lable">
              <p>نام: *</p>
            </div>
            <div id="name-input">
              <input
                value={profile.first_name}
                type="text"
                disabled
                className="rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen md:w-full"
              />
            </div>
          </div>
          <div id="name-input-box" className="md:flex md:w-5/12 md:flex-col">
            <div id="name-input-lable">
              <p>نام خانوادگی: *</p>
            </div>
            <div id="name-input">
              <input
                value={profile.last_name}
                type="text"
                disabled
                className="rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen md:w-full"
              />
            </div>
          </div>
          <div id="surname-input-box"></div>
        </div>
        <div
          id="second-row"
          className="md: md:flex md:flex-row md:items-center md:justify-evenly"
        >
          <div id="name-input-box" className="md:flex md:w-5/12 md:flex-col">
            <div id="name-input-lable">
              <p>شماره تماس: *</p>
            </div>
            <div id="name-input">
              <input
                value={profile.phone_number}
                type="text"
                disabled
                className="rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen md:w-full"
              />
            </div>
          </div>
          <div id="name-input-box" className="md:flex md:w-5/12 md:flex-col">
            <div id="name-input-lable">
              <p>پست الکترونیکی(اختیاری):</p>
            </div>
            <div id="name-input">
              <input
                type="text"
                disabled
                className="rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen md:w-full"
              />
            </div>
          </div>
          <div id="surname-input-box"></div>
        </div>{" "}
        <div
          id="third-row"
          className="md: md:flex md:flex-row md:items-center md:justify-evenly"
        >
          <div id="name-input-box" className="md:flex md:w-5/12 md:flex-col">
            <div id="name-input-lable">
              <p>کدملی: *</p>
            </div>
            <div id="name-input">
              <input
                value={profile.national_code}
                type="text"
                disabled
                className="rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen md:w-full"
              />
            </div>
          </div>
          <div id="name-input-box" className="md:flex md:w-5/12 md:flex-col">
            <div id="name-input-lable">
              <p>تاریخ تولد:</p>
            </div>
            <div id="name-input">
              <input
                value={profile.shamsi_birthday_date}
                type="text"
                disabled
                className="rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen md:w-full"
              />
            </div>
          </div>
          <div id="surname-input-box"></div>
        </div>{" "}
        <div
          id="forth-row"
          className="items-center md:flex md:flex-row md:items-center md:justify-evenly"
        >
          <div id="name-input-box" className="md:flex md:w-5/12 md:flex-col">
            <div id="name-input-lable">
              <p>کدپستی: </p>
            </div>
            <div id="name-input">
              <input
                value={profile.postal_code}
                type="text"
                disabled
                className="rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen md:w-full"
              />
            </div>
          </div>
          <div id="name-input-box" className="md:flex md:w-5/12 md:flex-col">
            <div id="name-input-lable">
              <p>آدرس پستی: </p>
            </div>

            {/* text area block in desktop */}
            <div id="name-input" className="hidden md:block">
              <textarea
                value={profile.address}
                cols="40"
                rows="1"
                disabled
                className="rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen md:w-full"
              />
            </div>
            {/* text area block in desktop */}

            {/* input block in mobile */}
            <div id="name-input" className="block md:hidden">
              <input
              disabled className="w-full h-11 rounded-lg border-2 border-gray-300 focus:border-evaamGreen focus:ring-evaamGreen" />
            </div>
            {/* input block in mobile */}
          </div>
          <div id="surname-input-box"></div>
        </div>
      </div>
    )
}