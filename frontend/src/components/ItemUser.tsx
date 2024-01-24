import * as React from "react";
import Image from "next/image";

export interface IItemUserProps {
  src: string;
  name: string;
  suggested?: boolean;
}

export default function ItemUser(props: IItemUserProps) {
  return (
    <div className="flex justify-between py-3">
      <div className="flex items-center">
        <Image
          src={props?.src}
          height={40}
          width={40}
          alt=""
          className="rounded-full"
        />
        <div className="flex-col">
          <p className="ml-2 font-medium">{props?.name}</p>
          {props?.suggested && (
            <p className="ml-2 text-gray-500 text-xs">Suggested for you</p>
          )}
        </div>
      </div>
      {props?.suggested ? (
        <button className="text-xs font-semibold text-sky-500 hover:text-sky-700">
          Follow
        </button>
      ) : (
        <button className="text-xs font-semibold text-sky-500 hover:text-sky-700">
          Switch
        </button>
      )}
    </div>
  );
}
