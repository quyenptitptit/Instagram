import Image from "next/image";
import * as React from "react";

export interface IItemNewsProps {}

export default function ItemNews(props: IItemNewsProps) {
  return (
    <div>
      <button>
        <img
          src="https://haycafe.vn/wp-content/uploads/2023/06/hinh-anh-anime-nu-do-AI-ve.jpg"
          height={80}
          width={80}
          alt=""
        />
        <p>baukrysie</p>
      </button>
    </div>
  );
}
