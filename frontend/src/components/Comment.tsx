import * as React from "react";
import Image from "next/image";

export interface ICommentProps {}

export default function Comment(props: ICommentProps) {
  return (
    <div className="w-full">
      <div className="flex p-3">
        <div>
          <div className="h-10 w-10 relative rounded-full">
            <Image
              src="https://i.pinimg.com/564x/35/5e/2b/355e2b6c4ebd0386c496ad2cb697814b.jpg"
              fill
              objectFit="cover"
              alt=""
              className="rounded-full"
            />
          </div>
        </div>
          <p className="ml-2 font-medium">
            lion.house
            <span className="font-light ml-2 text-sm">
              “Rồi sẽ có ngày, bạn sẽ vô cớ nhớ tới một người. Người ấy đã từng
              khiến bạn kỳ vọng vào tương lai, nhưng không bao giờ xuất hiện vào
              ngày mai của bạn nữa.”
            </span>
          </p>
      </div>
    </div>
  );
}
