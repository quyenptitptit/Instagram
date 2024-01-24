import React from "react";
import Image from "next/image";
import ig from "../../../public/imgs/Instagram_logo.svg.png";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="no-scrollbar">
        <header className="sticky top-0 z-10 bg-white justify-between items-center p-3 hidden max-md:flex border-b">
          <Link href="">
            <Image src={ig} height={30} width={100} alt="" />
          </Link>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="placeholder:capitalize placeholder:font-light bg-gray-200 py-1 px-4 mr-4 rounded-md outline-0"
            />
            <button>
              <GrFavorite className="text-[140%] hover:text-[150%] transition w-10" />
            </button>
          </div>
        </header>
        {children}
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
