"use client";

import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { FiMessageCircle } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmarkFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import Comment from "./Comment";
import ItemPost from "./ItemPost";
import ItemHeader from "./ItemHeader";
import Emotions from "./Emotions";

export interface IModalPostProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalPost(props: IModalPostProps) {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [cmt, setCmt] = useState("");
  return (
    <div className="fixed z-20 top-0 left-0 bottom-0 right-0 bg-modal flex items-center justify-center">
      <button
        className="absolute top-3 right-3"
        onClick={() => {
          props.setModal(false);
          document.body.style.overflow = "auto";
        }}
      >
        <IoCloseSharp className="text-[180%] text-white" />
      </button>
      <div className="bg-white h-[calc(100vh-40px)] w-[75vw] my-auto flex rounded-md max-md:hidden min-h-[239px]">
        <div className="h-full w-1/2 relative rounded-l-md bg-black">
          <Image
            src="https://i.pinimg.com/564x/73/35/6d/73356dc4d5c34c930e3e6697fa77bbf5.jpg"
            objectFit="scale-down"
            fill
            alt=""
            // className="rouded-md"
          />
        </div>
        <div className="h-full w-1/2 text-sm">
          {/* <div> */}
          <ItemHeader
            src="https://i.pinimg.com/564x/35/5e/2b/355e2b6c4ebd0386c496ad2cb697814b.jpg"
            author="lion.house"
          />
          {/* </div> */}
          <div className="overflow-auto no-scrollbar h-[calc(100%-240px)]">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          <div className="sticky bottom-0 bg-white">
            <div className="p-3 border-y">
              <Emotions save={false} like={false} numberOfLike={"1,234"} />
              <p className="font-extralight my-1 text-sx">1 day agos</p>
            </div>
            <div className="p-3 flex">
              <input
                type="text"
                placeholder="Add a comment..."
                className="p-2 w-[90%] outline-0"
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
      </div>
      <div className="hidden max-md:block w-[45vw] bg-white my-auto rounded-lg text-sm">
        <ItemHeader
          src="https://i.pinimg.com/564x/35/5e/2b/355e2b6c4ebd0386c496ad2cb697814b.jpg"
          author="lion.house"
        />
        <div className="h-[50vh] w-full relative bg-black">
          <Image
            src="https://i.pinimg.com/564x/73/35/6d/73356dc4d5c34c930e3e6697fa77bbf5.jpg"
            fill
            objectFit="cover"
            alt=""
            // className="rounded-sm"
          />
        </div>
        <div className="m-2">
          <Emotions save={false} like={false} numberOfLike={"1,234"} />
          <p className="font-light my-1 text-sx">1 day agos</p>
        </div>
      </div>
    </div>
  );
}
