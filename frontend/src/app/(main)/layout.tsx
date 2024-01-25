import React from "react";
import Image from "next/image";
import ig from "../../../public/imgs/Instagram_logo.svg.png";
import Link from "next/link";
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

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="no-scrollbar">
        <header className="w-56 max-xl:w-16 max-md:hidden border-r flex flex-col h-[100vh] fixed justify-between">
          <div className="w-full">
            <div className="h-14 w-full flex items-center px-4 my-4">
              <Image
                src={ig2}
                alt="anh"
                width={120}
                height={20}
                className="max-xl:hidden"
              />
              <GrInstagram className="hidden max-xl:block text-[160%]" />
            </div>
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
            <ItemNavbar
              selected={false}
              icon={CgAddR as IconType}
              name="profile"
            />
          </div>
          <div>
            <ItemNavbar
              selected={false}
              icon={FaThreads as IconType}
              name="threads"
            />
            <ItemNavbar
              selected={false}
              icon={AiOutlineMenu as IconType}
              name="More"
            />
          </div>
        </header>
        <div className="ml-56 max-xl:ml-16 max-[1160px]:ml-0">{children}</div>
        <footer className="border-t z-10 sticky bottom-0 hidden max-md:flex bg-white justify-around py-3">
          <button>
            <GoHomeFill className="text-[160%]" />
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
