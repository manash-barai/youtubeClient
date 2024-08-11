"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface IFirstMenu {
  imageIcon: string;
  imageIcon2: string;
  nameOfItem: string;
  id: string;
}

interface DashBoard {
  widthsubstract: (v: boolean) => void;
}

export default function DashBoard({ widthsubstract }: DashBoard) {
  const [menuWidth, setMenuWidth] = useState<boolean>(true);
  const [menuName, setMenuName] = useState<string>("Explore");
  const [menuId, setMenuId] = useState<string>("Explore");
  const [hoverId, setHoverId] = useState<string | null>(null);

  const firstMenu: IFirstMenu[] = [
    {
      imageIcon: "/images/logo/Explore.png",
      imageIcon2: "/images/greyVersion/Explore.png",
      nameOfItem: "Explore",
      id: "1",
    },
    {
      imageIcon: "/images/logo/boutique.png",
      imageIcon2: "/images/greyVersion/boutique.png",
      nameOfItem: "Boutique",
      id: "2",
    },
    {
      imageIcon: "/images/logo/Pen.png",
      imageIcon2: "/images/greyVersion/Pen.png",
      nameOfItem: "Projects",
      id: "3",
    },
    {
      imageIcon: "/images/logo/Group 2.png",
      imageIcon2: "/images/greyVersion/Group 6.png",
      nameOfItem: "Services",
      id: "4",
    },
    {
      imageIcon: "/images/logo/head.png",
      imageIcon2: "/images/greyVersion/head.png",
      nameOfItem: "About",
      id: "5",
    },
  ];

  const resources: IFirstMenu[] = [
    {
      imageIcon: "/images/logo/Collage.png",
      imageIcon2: "/images/greyVersion/Collage.png",
      nameOfItem: "Feed",
      id: "6",
    },
    {
      imageIcon: "/images/logo/Mailbox.png",
      imageIcon2: "/images/greyVersion/Mailbox.png",
      nameOfItem: "Thoughts",
      id: "7",
    },
    {
      imageIcon: "/images/logo/Pen.png",
      imageIcon2: "/images/greyVersion/Pen.png",
      nameOfItem: "Stack",
      id: "8",
    },
  ];

  return (
    <div
      className={`h-[100vh] fixed start-0 top-0 bg-zinc-900 border-r-2 border-zinc-600 ${
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
                  ? "/images/arrowAndSearch/CircleChevron Left.png"
                  : "/images/arrowAndSearchGrey/CircleChevron Left.png"
              }
              alt="arrow"
              width={24}
              height={24}
            />
          ) : (
            <Image
              className="rounded-full"
              src={
                hoverId === "toggle"
                  ? "/images/arrowAndSearch/CircleChevron Right.png"
                  : "/images/arrowAndSearchGrey/CircleChevron Right.png"
              }
              alt="arrow"
              width={20}
              height={20}
            />
          )}
        </button>
        <div className="menu">
          <ul className="flex flex-col items-center">
            <li
              className={`flex items-center mt-1 ${menuWidth?"mb-7":"mb-3"} gap-3`}
              style={{
                width: menuWidth ? "255px" : "60px",
              }}
            >
              <Image
                src="/images/avatar.png"
                alt="ProfileImage"
                width={menuWidth ? 50 : 40}
                height={menuWidth ? 50 : 40}
                className={`rounded-full ${menuWidth ? "m-0" : "m-auto"}`}
              />
              {menuWidth && (
                <div className="profileName">
                  <p className="font-bold m-0 p-0">Lorem EPsum</p>
                  <p className="text-zinc-700 m-0 p-0 font-semibold">
                    Product Designer
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
                onClick={() => setMenuName(menuItem.nameOfItem)}
              >
                <Link
                  href={"/"}
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
                      <p
                        className={`m-0 p-0  ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.nameOfItem}
                      </p>
                    ):(
                      <>{(menuId===menuItem.id && menuName !== menuItem.nameOfItem) && <p
                        className={`m-0 p-0 border bg-zinc-800 textAnimation overflow-hidden border-zinc-700 px-4  absolute top-1 rounded-full start-[50px] ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.nameOfItem}
                      </p>}</>
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
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col items-center">
            {menuWidth && (
              <li className={`flex justify-center relative mt-7 mb-4 `}>
                <button
                  style={{
                    width: menuWidth ? "255px" : "60px",
                  }}
                  className={`flex rounded px-4 py-2  justify-between items-center  ${
                    menuWidth ? "bounce-widthFm" : "width-expandFm"
                  }`}
                >
                  <div className="flex items-center gap-3 m-0 p-0">
                    <span className="text-[13px] text-zinc-400">RESOURCES</span>
                  </div>
                </button>
              </li>
            )}

            {resources.map((menuItem: IFirstMenu) => (
              <li
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
                <Link
                  href={"/"}
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
                    ):(
                      <>{(menuId===menuItem.id && menuName !== menuItem.nameOfItem) && <p
                        className={`m-0 p-0 border bg-zinc-800 textAnimation overflow-hidden border-zinc-700 px-4  absolute top-1 rounded-full start-[50px] ${
                          menuId === menuItem.id ||
                          menuName === menuItem.nameOfItem
                            ? "text-white"
                            : "menuColor"
                        }`}
                      >
                        {menuItem.nameOfItem}
                      </p>}</>
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="search flex justify-center relative">
          <div className="   menuColor">
            {menuWidth ? (
              <button className="flex w-[255px] justify-between  py-2 px-4 bg-zinc-800 border border-zinc-600 rounded   ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/arrowAndSearchGrey/Search.png"}
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
            ) : (
              <button className="flex  justify-between  py-2 px-4 bg-zinc-800 border border-zinc-600 rounded   ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/arrowAndSearchGrey/Search.png"}
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
  );
}
