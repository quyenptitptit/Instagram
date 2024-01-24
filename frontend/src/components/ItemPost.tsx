"use client";

import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { FiMessageCircle } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmarkFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import ItemHeader from "./ItemHeader";
import Emotions from "./Emotions";

export interface IItemPostProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemPost(props: IItemPostProps) {
  const [save, setSave] = useState(false);
  const [like, setLike] = useState(false);
  const [cmt, setCmt] = useState("");
  return (
    <div className="w-[470px] text-sm mx-auto border-b pt-2 pb-4">
      <ItemHeader
        src="https://i.pinimg.com/564x/35/5e/2b/355e2b6c4ebd0386c496ad2cb697814b.jpg"
        author="lion.house"
        style="p-0 py-3"
      />
      <div>
        <Image
          src="https://i.pinimg.com/564x/73/35/6d/73356dc4d5c34c930e3e6697fa77bbf5.jpg"
          width={470}
          height={470}
          alt=""
          className="rounded-sm"
        />
      </div>
      <div>
        <Emotions save={false} like={false} numberOfLike={"1,234"} />
        <p className="font-semibold my-1">
          lion.house{" "}
          <span className="font-normal text-sm">
            Twinkling like snow in the moonlight. These mix and match holiday
            nails are ready for festivities.
          </span>{" "}
        </p>
        <button
          className="text-gray-500 my-1"
          onClick={() => {
            props.setModal(true);
            document.body.style.overflow = "hidden";
          }}
        >
          View all comments
        </button>
        <br />
        <div className="w-[470px">
          <input
            className="placeholder:text-gray-500 my-1 w-[420px] outline-0"
            placeholder="Add a comment..."
            value={cmt}
            onChange={(e) => setCmt(e.target.value)}
          />
          {cmt && (
            <button className="text-sky-500 font-semibold hover:text-sky-800 w-[40px] px-1">
              Post
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
