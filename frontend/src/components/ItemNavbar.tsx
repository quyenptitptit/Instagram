import * as React from "react";
import { IconType } from "react-icons";

export interface IINavbarProps {
  icon: IconType;
  name: string;
  selected: boolean
}

export default function ItemNavbar(props: IINavbarProps) {
  return (
    <div className="flex items-center p-3 mx-2 my-1 cursor-pointer hover:bg-gray-100 rounded-md">
      <span className="text-[160%]">{<props.icon />}</span>
      <span className={props.selected ? "font-bold ml-3 capitalize max-xl:hidden" : "ml-3 capitalize max-xl:hidden"}>{props.name}</span>
    </div>
  );
}
