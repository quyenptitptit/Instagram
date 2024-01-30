"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import ig2 from "../../../public/imgs/Logo-Instagram.png";
import ItemNavbar from "@/components/ItemNavbar";
import { CgAddR } from "react-icons/cg";
import { IconType } from "react-icons";
import { FaThreads } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { TbChartHistogram } from "react-icons/tb";
import { RiBookmarkLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useSession(); 
  const [isShow, setIsShow] = useState(false);
  return (
    <html lang="en">
      <body className="no-scrollbar">
        <header className="z-10 bg-white w-56 max-xl:w-16 max-md:hidden border-r flex flex-col h-[100vh] fixed justify-between">
          <div className="w-full p-2">
            <button className="h-14 w-full flex items-center max-xl:justify-center max-xl:px-0 px-4 my-4">
              <Image
                src={ig2}
                alt="anh"
                width={100}
                height={20}
                className="max-xl:hidden"
              />
              <GrInstagram className="hidden max-xl:block text-[160%]" />
            </button>
            <ItemNavbar
              selected={true}
              icon={GoHomeFill as IconType}
              name="Home"
            />
            <ItemNavbar
              selected={false}
              icon={IoSearch as IconType}
              name="Search"
            />
            <ItemNavbar
              selected={false}
              icon={MdOutlineExplore as IconType}
              name="Explore"
            />
            <ItemNavbar
              selected={false}
              icon={RiMessengerLine as IconType}
              name="Messages"
            />
            <ItemNavbar
              selected={false}
              icon={GrFavorite as IconType}
              name="Notifictions"
            />
            <ItemNavbar
              selected={false}
              icon={CgAddR as IconType}
              name="Create"
            />
            <button
              className="flex items-center p-3 my-1 hover:bg-gray-100 rounded-md w-full"
              onClick={() => {}}
            >
              <div className="relative h-6 w-6 rounded-full">
                <Image src={data?.user?.image} fill objectFit="cover" alt="" className="rounded-full"/>
              </div>
              <span className="ml-3 capitalize max-xl:hidden">profile</span>
            </button>
          </div>
          <div className="p-2">
            {/* <ItemNavbar
              selected={false}
              icon={FaThreads as IconType}
              name="threads"
            /> */}
            <ItemNavbar
              selected={false}
              icon={AiOutlineMenu as IconType}
              name="More"
              onclick={() => setIsShow(!isShow)}
            />
          </div>
          {isShow && (
            <div className="absolute z-20 bg-white shadow-2xl w-64 p-2 bottom-5 left-14 rounded-xl py-1">
              <ItemNavbar
                notReponsive={true}
                icon={IoSettingsOutline as IconType}
                name="settings"
              />
              <ItemNavbar
                notReponsive={true}
                icon={TbChartHistogram as IconType}
                name="your activity"
              />
              <ItemNavbar
                notReponsive={true}
                icon={RiBookmarkLine as IconType}
                name="saved"
              />
              <div className="border-t pt-1">
                <ItemNavbar
                  notReponsive={true}
                  icon={FiLogOut as IconType}
                  name="log out"
                  onclick={() => signOut()}
                />
              </div>
            </div>
          )}
        </header>
        <div className="ml-56 max-xl:ml-16 max-md:ml-0 z-0">{children}</div>
        <footer className="border-t z-10 sticky bottom-0 hidden max-md:flex bg-white justify-around py-3">
          <button>
            <GoHome className="text-[160%]" />
          </button>
          <button>
            <MdOutlineExplore className="text-[160%]" />
          </button>
          <button>
            <CgAddR className="text-[160%]" />
          </button>
          <button>
            <RiMessengerLine className="text-[160%]" />
          </button>
          <button>
            <RiMessengerLine className="text-[160%]" />
          </button>
        </footer>
      </body>
    </html>
  );
}
