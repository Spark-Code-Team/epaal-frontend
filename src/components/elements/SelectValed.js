"use client"

import { Dropdown } from "flowbite-react";



export default function SelectValed() {

    return (
        <div
            className="
                w-full
                pr-8
                pt-8
                flex
                justify-between
                relative
            "
        >
            <Dropdown 
                label={
                    <div
                        className="
                            w-full
                            px-0
                            mx-0
                        "
                    >
                        <div
                            className="
                                w-[300px]
                                text-[20px]
                                font-normal
                            "
                        >

                            <p
                                className="
                                    w-1/2
                                    h-1/2
                                "
                            >
                                انتخاب دسته والد
                            </p>
                        </div>
                    </div>
                } 
                as="div"
                style={{
                    width: "100%",
                    background: "#DEDEDE",
                    border: "1px solid #A7A8A9",
                    borderRadius: "12px",
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "0px",
                    margin: "0px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    position:"relative"
                }}
                arrowIcon={true}
                placement="top"
                className="
                    bg-white
                    w-[80%]
                "
            >
                <div
                    className="
                        h-[268px]
                        overflow-y-scroll
                    "
                >
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </div>
            </Dropdown>

        </div>
    )
}