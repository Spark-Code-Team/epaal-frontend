"use client"

import { Dropdown } from "flowbite-react";



export default function SelectValed() {

    return (
        <div
            className="
                w-full
                pr-8
                pt-8
                relative
                flex
                justify-between
            "
        >
            <Dropdown 
                label={
                    <div
                        className="
                            w-full
                            flex
                            justify-between
                            gap-3
                            mx-auto
                        "
                    >
                        <p>fsbvsv</p>
                        <p>visfjvion</p>
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
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "16px",
                    fontWeight: "600"
                }}
                arrowIcon={false}
                placement="top"
                className="
                    bg-white
                      w-full
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