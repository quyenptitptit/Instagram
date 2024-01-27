"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { BiUserPlus } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { MdGridOn } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import ModalPost from "@/components/ModalPost";

export default function User({ params }: { params: { username: string } }) {
  const [modal, setModal] = useState(false);
  const imgs = [
    "https://i.pinimg.com/564x/f7/37/0f/f7370fb06b911cf3817da25819d5ecd0.jpg",
    "https://i.pinimg.com/564x/f7/37/0f/f7370fb06b911cf3817da25819d5ecd0.jpg",
    "https://i.pinimg.com/564x/f7/37/0f/f7370fb06b911cf3817da25819d5ecd0.jpg",
    "https://i.pinimg.com/564x/f7/37/0f/f7370fb06b911cf3817da25819d5ecd0.jpg",
    "https://i.pinimg.com/564x/f7/37/0f/f7370fb06b911cf3817da25819d5ecd0.jpg",
    "https://i.pinimg.com/564x/f7/37/0f/f7370fb06b911cf3817da25819d5ecd0.jpg",
    "https://i.pinimg.com/564x/f7/37/0f/f7370fb06b911cf3817da25819d5ecd0.jpg",
  ];
  return (
    <div>
      {modal && <ModalPost setModal={setModal} />}
      <div className="sticky top-0 z-10 bg-white justify-center items-center p-2 hidden max-md:flex border-b">
        <button className="absolute left-2">
          <Link href="">
            <IoIosArrowBack className="text-[170%]" />
          </Link>
        </button>
        <p className="font-medium">moda__jp</p>
      </div>
      <div className="flex justify-center">
        <div className="flex-col items-center justify-center max-w-[935px] p-8 max-[736px]:px-0 max-[736px]:w-full max-[736px]:items-start">
          <header className="flex mb-11 relative max-[736px]:px-4 max-[736px]:mb-3">
            <div className="h-auto w-64 flex justify-center items-center max-[736px]:w-24">
              <div className="h-44 w-44 max-[736px]:h-24 max-[736px]:w-24 relative">
                <Image
                  src="https://i.pinimg.com/564x/9c/f6/ad/9cf6ad43be33319c49ba858b44b31641.jpg"
                  fill
                  objectFit="cover"
                  alt=""
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex-col max-w-[600px]">
              <div className="flex mb-5 max-[736px]:flex-col max-[736px]:ml-4">
                <button className="mx-1 px-4 text-lg w-max max-[736px]:mb-3 max-[736px]:py-[2px]">
                  moda__jp
                </button>
                <div className="flex">
                  <button className="mx-1 px-4 py-[2px] bg-sky-500 hover:bg-sky-700 text-white rounded-md capitalize text-sm font-medium max-[736px]:py-1">
                    follow
                  </button>
                  <button className="mx-1 px-4 py-[2px] bg-gray-200 hover:bg-gray-300 font-medium rounded-md capitalize text-sm max-[736px]:py-1">
                    message
                  </button>
                  <button className="mx-1 px-2 py-[2px] bg-gray-200 hover:bg-gray-300 font-medium rounded-md text-sm max-[736px]:py-1">
                    <BiUserPlus className="text-[120%]" />
                  </button>
                  <button className="mx-1 px-2 py-[2px] max-[736px]:hidden">
                    <IoIosMore className="text-[160%]" />
                  </button>
                </div>
              </div>
              <div className="flex mb-5 max-[736px]:hidden">
                <p className="mx-1 px-4 py-[2px] text-sm">
                  <span className="font-semibold uppercase">205</span> posts
                </p>
                <button className="mx-1 px-4 py-[2px] text-sm">
                  <span className="font-semibold uppercase">76.7K</span>{" "}
                  followers
                </button>
                <button className="mx-1 px-4 py-[2px] text-sm">
                  <span className="font-semibold uppercase">0</span> following
                </button>
              </div>
              <div className="flex-col mb-2 text-sm max-[736px]:hidden">
                <p className="mx-1 px-4 font-semibold">Quyen Quyen</p>
                <p className="mx-1 px-4">
                  Cuộc đời ta thay đổi theo 2 cách: Qua những cuốn sách ta đọc
                  và qua những người ta gặp
                </p>
                <p className="mx-1 px-4">
                  Cuộc đời ta thay đổi theo 2 cách: Qua những cuốn sách ta đọc
                  và qua những người ta gặp
                </p>
              </div>
            </div>
          </header>
          <div className="flex-col hidden mb-2 text-sm max-[736px]:flex max-[736px]:px-4">
            <p className="font-semibold">Quyen Quyen</p>
            <p className="">
              Cuộc đời ta thay đổi theo 2 cách: Qua những cuốn sách ta đọc và
              qua những người ta gặp
            </p>
            <p className="">
              Cuộc đời ta thay đổi theo 2 cách: Qua những cuốn sách ta đọc và
              qua những người ta gặp
            </p>
          </div>
          <div className="hidden max-[736px]:grid grid-cols-3 py-4 border-t">
            <div className="mx-1 px-4 py-[2px] text-sm text-center">
              <p className="font-semibold uppercase">205</p>
              <p className="font-light">posts</p>
            </div>
            <button className="mx-1 px-4 py-[2px] text-sm">
              <p className="font-semibold uppercase">76.7K</p>
              <p className="font-light">followers</p>
            </button>
            <button className="mx-1 px-4 py-[2px] text-sm">
              <p className="font-semibold uppercase">0</p>
              <p className="font-light">following</p>
            </button>
          </div>
          <div className="flex justify-center border-t h-14">
            <button className="uppercase flex items-center justify-center mx-6 border-t border-black max-[736px]:w-1/2 max-[736px]:mx-0">
              <MdGridOn className="text-[80%] max-md:text-[130%]" />
              <span className="text-xs font-medium ml-1 max-md:hidden">
                posts
              </span>
            </button>
            <button className="uppercase flex items-center justify-center mx-6 max-[736px]:w-1/2 max-[736px]:mx-0">
              <BiUserPin className="text-[80%] max-md:text-[130%]" />
              <span className="text-xs font-medium ml-1 max-md:hidden">
                targed
              </span>
            </button>
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-1">
            {imgs?.map((img) => (
              <button
                className="group relative w-full pt-[100%]"
                onClick={() => setModal(true)}
              >
                <Image src={img} alt="" fill objectFit="cover" />
                <div className="absolute top-0 left-0 h-full w-full bg-modal justify-center items-center hidden group-hover:flex">
                  <div className="flex text-white items-center m-3">
                    <MdFavorite className="text-[120%]" />
                    <p className="font-medium ml-1">35</p>
                  </div>
                  <div className="flex text-white items-center m-3">
                    <FaComment className="text-[120%]" />
                    <p className="font-medium ml-1">0</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
