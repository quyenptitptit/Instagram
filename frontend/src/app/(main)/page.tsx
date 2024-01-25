"use client";

import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import ig from "../../../public/imgs/Instagram_logo.svg.png";
import { GrFavorite } from "react-icons/gr";
import ItemPost from "@/components/ItemPost";
import ModalPost from "@/components/ModalPost";
import ItemUser from "@/components/ItemUser";
import Link from "next/link";

export interface IAppProps {}

export default function Home(props: IAppProps) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      {modal && <ModalPost setModal={setModal} />}
      <div className="sticky top-0 z-10 bg-white justify-between items-center p-3 hidden max-md:flex border-b">
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
      </div>
      <div className="flex justify-center">
        <div className="max-w-[630px] max-[1160px]:w-full">
          <ItemPost setModal={setModal} />
          <ItemPost setModal={setModal} />
        </div>
        <div className="w-80 max-[1160px]:hidden text-sm ml-16">
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
            <button className="capitalize text-xs font-medium">See all</button>
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
        </div>
      </div>
    </div>
  );
}
