"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { Component } from "../components/LineChart";
import { PieCharts } from "../components/PieCharts";
import { LineCharts } from "../components/LineCharts2";
import UserList from "../components/UserList";
import { useStore } from "@/store/useStore";

interface IFirstMenu {
  imageIcon: string;
  imageIcon2: string;
  nameOfItem: string;
  id: string;
}

export default function DashBoard() {
  const [menuWidth, setMenuWidth] = useState<boolean>(true);
  const { setUsers, users } = useStore();
  const widthsubstract = (v: boolean) => {
    setMenuWidth(v);
  };

  const [menuName, setMenuName] = useState<string>("Explore");
  const [menuId, setMenuId] = useState<string>("Explore");
  const [hoverId, setHoverId] = useState<string | null>(null);

  const [selectedOption, setSelectedOption] = useState<string>("Dash Board");

  const firstMenu: IFirstMenu[] = [
    {
      imageIcon: "/images/dashBoardImage/logo/Explore.png",
      imageIcon2: "/images/dashBoardImage/greyVersion/Explore.png",
      nameOfItem: "Dash Board",
      id: "1",
    },
    {
      imageIcon: "/images/dashBoardImage/logo/boutique.png",
      imageIcon2: "/images/dashBoardImage/greyVersion/boutique.png",
      nameOfItem: "User List",
      id: "2",
    },
    {
      imageIcon: "/images/dashBoardImage/logo/Pen.png",
      imageIcon2: "/images/dashBoardImage/greyVersion/Pen.png",
      nameOfItem: "Blocked User",
      id: "3",
    },
  ];

  const resources: IFirstMenu[] = [
    {
      imageIcon: "/images/dashBoardImage/logo/Collage.png",
      imageIcon2: "/images/dashBoardImage/greyVersion/Collage.png",
      nameOfItem: "Blog",
      id: "6",
    },
    {
      imageIcon: "/images/dashBoardImage/logo/Mailbox.png",
      imageIcon2: "/images/dashBoardImage/greyVersion/Mailbox.png",
      nameOfItem: "plan",
      id: "7",
    },
    {
      imageIcon: "/images/dashBoardImage/logo/Pen.png",
      imageIcon2: "/images/dashBoardImage/greyVersion/Pen.png",
      nameOfItem: "Stack",
      id: "8",
    },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/user/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        window.location.href = "/";
      } else {
        console.log("Logout failed");
      }
    } catch (error) {
      console.log("An error occurred during logout:", error);
    }
  };
 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/userList`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex noise text-white ">
      <div
        style={{
          width: menuWidth ? "280px" : "80px",
        }}
        className=""
      >
        <div
          className={`h-[100vh] fixed start-0 top-0 bg-zinc-900 border-r-2 border-zinc-600 z-50 ${
            menuWidth ? "bounce-width" : "width-expand"
          } shadow`}
          style={{
            width: menuWidth ? "280px" : "80px",
          }}
        >
          <div className="flex flex-col h-screen justify-between py-4 relative">
            <button
              className="expand rounded-full overflow-hidden  absolute end-[-10px] bg-zinc-700 "
              onClick={() => {
                setMenuWidth(!menuWidth);
                widthsubstract(!menuWidth);
              }}
              onMouseEnter={() => setHoverId("toggle")}
              onMouseLeave={() => setHoverId(null)}
            >
              {menuWidth ? (
                <Image
                  className="rounded-full"
                  src={
                    hoverId === "toggle"
                      ? "/images/dashBoardImage/arrowAndSearch/CircleChevron Left.png"
                      : "/images/dashBoardImage/arrowAndSearchGrey/CircleChevron Left.png"
                  }
                  alt="arrow"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  className="rounded-full"
                  src={
                    hoverId === "toggle"
                      ? "/images/dashBoardImage/arrowAndSearch/CircleChevron Right.png"
                      : "/images/dashBoardImage/arrowAndSearchGrey/CircleChevron Right.png"
                  }
                  alt="arrow"
                  width={20}
                  height={20}
                />
              )}
            </button>
            <div className="menu">
              <ul className="flex flex-col items-center justify-center ">
                <li
                  className={`flex items-center  px-3  mt-1 ${
                    menuWidth ? "mb-7" : "mb-3"
                  } gap-3`}
                  style={{
                    width: menuWidth ? "255px" : "60px",
                  }}
                >
                  <Image
                    src="/images/dashBoardImage/avatar.png"
                    alt="ProfileImage"
                    width={menuWidth ? 50 : 40}
                    height={menuWidth ? 50 : 40}
                    className={`rounded-full ${menuWidth ? "m-0" : "m-auto"}`}
                  />
                  {menuWidth && (
                    <div className="profileName">
                      <p className="font-bold m-0 p-0"> Admin Profile </p>
                      <p className="text-zinc-700 m-0 p-0 font-semibold">
                        Manage Product
                      </p>
                    </div>
                  )}
                </li>
                {firstMenu.map((menuItem: IFirstMenu) => (
                  <li
                    key={menuItem.id}
                    className={`flex justify-center relative  text-[14px] ${
                      menuName === menuItem.nameOfItem
                        ? "border border-zinc-700 rounded bg-zinc-800"
                        : "border-0"
                    }  `}
                    onMouseEnter={() => setMenuId(menuItem.id)}
                    onMouseLeave={() => setMenuId("")}
                    onClick={() => {
                      setMenuName(menuItem.nameOfItem);
                    }}
                  >
                    <div
                      style={{
                        width: menuWidth ? "255px" : "60px",
                      }}
                      className={`flex rounded px-4 py-2  justify-between items-center  ${
                        menuWidth ? "bounce-widthFm" : "width-expandFm"
                      }`}
                    >
                      <div className="flex items-center gap-3 m-0 p-0">
                        <Image
                          src={
                            menuId === menuItem.id ||
                            menuName === menuItem.nameOfItem
                              ? menuItem.imageIcon
                              : menuItem.imageIcon2
                          }
                          alt="ProfileImage"
                          width={18}
                          height={17}
                          className={`rounded-pill `}
                        />
                        {menuWidth ? (
                          <button
                            className={`m-0 p-0  ${
                              menuId === menuItem.id ||
                              menuName === menuItem.nameOfItem
                                ? "text-white"
                                : "menuColor"
                            }`}
                            onClick={() =>
                              setSelectedOption(menuItem.nameOfItem)
                            }
                          >
                            {menuItem.nameOfItem}
                          </button>
                        ) : (
                          <>
                            {menuId === menuItem.id &&
                              menuName !== menuItem.nameOfItem && (
                                <button
                                  className={`m-0 p-0 border bg-zinc-800 textAnimation overflow-hidden border-zinc-700 px-4  absolute top-1 rounded-full start-[50px] ${
                                    menuId === menuItem.id ||
                                    menuName === menuItem.nameOfItem
                                      ? "text-white"
                                      : "menuColor"
                                  }`}
                                  onClick={() =>
                                    setSelectedOption(menuItem.nameOfItem)
                                  }
                                >
                                  {menuItem.nameOfItem}
                                </button>
                              )}
                          </>
                        )}
                      </div>
                      {menuWidth && (
                        <div className="border border-zinc-500 rounded px-1 text-sm ">
                          <p
                            className={`m-0 p-0 ${
                              menuId === menuItem.id ||
                              menuName === menuItem.nameOfItem
                                ? "text-white"
                                : "menuColor"
                            }`}
                          >
                            {menuItem.id}
                          </p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col items-center">
                {menuWidth && (
                  <div className={`flex justify-center relative mt-7 mb-4 `}>
                    <div
                      style={{
                        width: menuWidth ? "255px" : "60px",
                      }}
                      className={`flex rounded px-4 py-2  justify-between items-center  ${
                        menuWidth ? "bounce-widthFm" : "width-expandFm"
                      }`}
                    >
                      <div className="flex items-center gap-3 m-0 p-0">
                        <span className="text-[13px] text-zinc-400">
                          RESOURCES
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {resources.map((menuItem: IFirstMenu) => (
                  <div
                    key={menuItem.id}
                    className={`flex justify-center relative  ${
                      menuName === menuItem.nameOfItem
                        ? "border border-zinc-500 rounded bg-zinc-800"
                        : "border-0"
                    }  `}
                    onMouseEnter={() => setMenuId(menuItem.id)}
                    onMouseLeave={() => setMenuId("")}
                    onClick={() => setMenuName(menuItem.nameOfItem)}
                  >
                    <div
                      style={{
                        width: menuWidth ? "255px" : "60px",
                      }}
                      className={`flex rounded px-4 py-2  justify-between items-center  ${
                        menuWidth ? "bounce-widthFm" : "width-expandFm"
                      }`}
                    >
                      <div className="flex items-center gap-3 m-0 p-0">
                        <Image
                          src={
                            menuId === menuItem.id ||
                            menuName === menuItem.nameOfItem
                              ? menuItem.imageIcon
                              : menuItem.imageIcon2
                          }
                          alt="ProfileImage"
                          width={25}
                          height={25}
                          className="rounded-pill w-[20px]"
                        />
                        {menuWidth ? (
                          <p
                            className={`m-0 p-0  text-[14px] ${
                              menuId === menuItem.id ||
                              menuName === menuItem.nameOfItem
                                ? "text-white"
                                : "menuColor"
                            }`}
                          >
                            {menuItem.nameOfItem}
                          </p>
                        ) : (
                          <>
                            {menuId === menuItem.id &&
                              menuName !== menuItem.nameOfItem && (
                                <p
                                  className={`m-0 p-0 border bg-zinc-800 textAnimation overflow-hidden border-zinc-700 px-4  absolute top-1 rounded-full start-[50px] ${
                                    menuId === menuItem.id ||
                                    menuName === menuItem.nameOfItem
                                      ? "text-white"
                                      : "menuColor"
                                  }`}
                                >
                                  {menuItem.nameOfItem}
                                </p>
                              )}
                          </>
                        )}
                      </div>
                      {menuWidth && (
                        <div className="border border-zinc-500 rounded px-1 text-sm ">
                          <p
                            className={`m-0 p-0 ${
                              menuId === menuItem.id ||
                              menuName === menuItem.nameOfItem
                                ? "text-white"
                                : "menuColor"
                            }`}
                          >
                            {menuItem.id}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="search flex justify-center relative">
              <div className="   menuColor">
                {menuWidth ? (
                  <div>
                    <button className="flex w-[255px] justify-between  py-2 px-4  rounded   " onClick={handleLogout}>
                      <div className="flex items-center gap-2">
                        <Image
                          src={
                            "/images/dashBoardImage/arrowAndSearchGrey/Search.png"
                          }
                          alt="search"
                          width={17}
                          height={17}
                        />{" "}
                        <span>Logout</span>  
                      </div>
                      
                    </button>

                    <button className="flex w-[255px] justify-between  py-2 px-4 bg-zinc-800 border border-zinc-600 rounded   ">
                      <div className="flex items-center gap-2">
                        <Image
                          src={
                            "/images/dashBoardImage/arrowAndSearchGrey/Search.png"
                          }
                          alt="search"
                          width={17}
                          height={17}
                        />{" "}
                        <span>Search...</span>
                      </div>
                      <div className=" rounded px-1 text-sm border border-zinc-500 ">
                        <p className="m-0 p-0">S</p>
                      </div>
                    </button>
                  </div>
                ) : (
                  <button className="flex  justify-between  py-2 px-4 bg-zinc-800 border border-zinc-600 rounded   ">
                    <div className="flex items-center gap-2">
                      <Image
                        src={
                          "/images/dashBoardImage/arrowAndSearchGrey/Search.png"
                        }
                        alt="search"
                        width={20}
                        height={20}
                      />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="w-2/3 mx-auto mt-16 --tw-bg-opacity: 1 ">
          {selectedOption === "Dash Board" && (
            <>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <Component />
                </div>
                <div className="w-1/2">
                  <PieCharts />
                </div>
              </div>

              <div>
                <LineCharts />
              </div>
            </>
          )}
          {selectedOption === "User List" && (
            <>
              <UserList users={users} />
            </>
          )}
        </div>
      </>
    </div>
  );
}
