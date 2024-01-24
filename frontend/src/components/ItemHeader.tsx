import * as React from "react";
import Image from "next/image";
import { IoIosMore } from "react-icons/io";

export interface IItemHeaderProps {
  src: string;
  author: string;
  style?: string;
}

export default function ItemHeader(props: IItemHeaderProps) {
  return (
    <div className={`flex justify-between p-3 border-b ${props.style}`}>
      <div className="flex items-center">
        <Image
          src={props.src}
          height={40}
          width={40}
          alt=""
          className="rounded-full"
        />
        <p className="ml-2 font-medium">{props.author}</p>
        <span className="border-2 rounded-full border-gray-400 mx-2"></span>
        <p className="text-gray-400">1w</p>
      </div>
      <button>
        <IoIosMore className="text-[150%]" />
      </button>
    </div>
  );
}
