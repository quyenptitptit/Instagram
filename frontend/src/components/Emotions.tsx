"use client";

import * as React from "react";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { FiMessageCircle } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmarkFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

export interface IEmotionsProps {
    save: boolean,
    like: boolean,
    numberOfLike: string
}

export default function Emotions(props: IEmotionsProps) {
  const [save, setSave] = useState(props.save);
  const [like, setLike] = useState(props.like);
  return (
    <div>
      <div className="flex my-1 items-center justify-between">
        <div className="flex">
          <button className="h-[32px] w-[38px]" onClick={() => setLike(!like)}>
            {like ? (
              <FcLike className="text-[210%] animate-[like_0.3s_linear_1] mr-3 p-[3px]" />
            ) : (
              <GrFavorite className="text-[190%] mr-3 hover:text-gray-600 p-[3px]" />
            )}
          </button>
          <button className="h-[32px] w-[32px]">
            <FiMessageCircle className="text-[160%] mr-3 hover:text-gray-600" />
          </button>
          <button className="h-[32px] w-[32px]">
            <FiSend className="text-[160%] hover:text-gray-600" />
          </button>
        </div>
        <button onClick={() => setSave(!save)}>
          {save ? (
            <RiBookmarkFill className="text-[160%]" />
          ) : (
            <RiBookmarkLine className="text-[160%] hover:text-gray-600" />
          )}
        </button>
      </div>
      <p className="font-semibold my-1">{props.numberOfLike} likes</p>
    </div>
  );
}
