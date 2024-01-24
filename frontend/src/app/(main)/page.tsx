"use client";

import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import ig from "../../../public/imgs/Instagram_logo.svg.png";
import ig2 from "../../../public/imgs/Logo-Instagram.png";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { CgAddR } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { FaThreads } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import ItemNavbar from "@/components/ItemNavbar";
import ItemPost from "@/components/ItemPost";
import ModalPost from "@/components/ModalPost";
import ItemUser from "@/components/ItemUser";

export interface IAppProps {}

export default function Home(props: IAppProps) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      {modal && <ModalPost setModal={setModal} />}
      <div className="flex w-full">
        <div className="w-56 max-xl:w-16 max-md:hidden border-r flex flex-col h-[100vh] fixed justify-between">
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
        </div>
        <div className="ml-56 max-xl:ml-16 w-full">
          <div className="flex w-full justify-center">
            <div className="max-w-[630px] max-[1160px]:w-full">
              <ItemPost setModal={setModal} />
              <ItemPost setModal={setModal} />
            </div>
            <div className="w-80 max-[1160px]:hidden text-sm ml-16">
              {/* <div className="w-80"> */}
                <div className="my-3">
                  <ItemUser
                    src="https://i.pinimg.com/564x/2a/b2/64/2ab26454f987aaa46d4ffea1272d8d65.jpg"
                    name="qmei.201"
                  />
                </div>
                <div className="flex justify-between">
                  <p className="capitalize font-medium text-gray-500">
                    Suggested for you
                  </p>
                  <button className="capitalize text-xs font-medium">
                    See all
                  </button>
                </div>
                <ItemUser
                  src="https://i.pinimg.com/564x/2a/b2/64/2ab26454f987aaa46d4ffea1272d8d65.jpg"
                  name="qmei.201"
                  suggested={true}
                />
                <ItemUser
                  src="https://i.pinimg.com/564x/2a/b2/64/2ab26454f987aaa46d4ffea1272d8d65.jpg"
                  name="qmei.201"
                  suggested={true}
                />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
