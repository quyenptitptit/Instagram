import * as React from "react";
import { IconType } from "react-icons";

export interface IINavbarProps {
  icon: IconType;
  name: string;
  selected?: boolean;
  notReponsive?: boolean;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ItemNavbar(props: IINavbarProps) {
  return (
    <button className="flex items-center p-3 my-1 hover:bg-gray-100 rounded-md w-full" onClick={props.onclick}>
      {props?.notReponsive ? (
        <>
          <span className="text-[120%]">{<props.icon />}</span>
          <span className="ml-3 text-sm capitalize">{props.name}</span>
        </>
      ) : (
        <>
          <span className="text-[160%]">{<props.icon />}</span>
          <span
            className={
              props.selected
                ? "font-bold ml-3 capitalize max-xl:hidden"
                : "ml-3 capitalize max-xl:hidden"
            }
          >
            {props.name}
          </span>
        </>
      )}
    </button>
  );
}
