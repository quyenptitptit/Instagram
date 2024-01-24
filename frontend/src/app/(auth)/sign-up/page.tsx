import * as React from "react";
import Image from "next/image";
import gg from "../../../../public/imgs/gg.png";
import ig from "../../../../public/imgs/Instagram_logo.svg.png";
import Link from "next/link";

export interface ISignUpProps {}

export default function SignUp(props: ISignUpProps) {
  return (
    <div className="flex flex-col">
      <div className="shadow border flex flex-col px-8 py-4">
        <div className="flex justify-center p-4">
          <Image src={ig} alt="" height={50} width={175} />
        </div>
        <div className="w-72 text-center text-gray-600 font-medium mb-3">
          Sign up to see photos and videos from your friends.
        </div>
        <button className="flex shadow border rounded-lg py-1 items-center justify-center my-1">
          <Image src={gg} height={16} width={16} alt="" className="mr-2" />
          Log in with Google
        </button>
        <div className="flex items-center my-2 uppercase after:content-[''] after:border after:border-inherit after:grow before:content-[''] before:border before:border-inherit before:grow">
          <p className="mx-3 text-slate-600">OR</p>
        </div>
        <input
          type="text"
          placeholder="Mobile number or email"
          className="h-10 w-72 text-xs placeholder:text-black border p-2 bg-stone-50 my-1 outline-zinc-300"
        />
        <input
          type="text"
          placeholder="Fullname"
          className="h-10 w-72 text-xs placeholder:text-black border p-2 bg-stone-50 my-1 outline-zinc-300"
        />
        <input
          type="text"
          placeholder="Username"
          className="h-10 w-72 text-xs placeholder:text-black border p-2 bg-stone-50 my-1 outline-zinc-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-10 w-72 text-xs placeholder:text-black border p-2 bg-stone-50 my-1 outline-zinc-300"
        />
        <div className="w-72 text-center my-2 text-xs p-2">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <Link
            className="text-cyan-800 font-medium"
            href="https://www.facebook.com/help/instagram/261704639352628"
          >
            Learn more
          </Link>
        </div>
        <button className="bg-sky-500 text-white rounded-lg py-1 my-3">
          Sign up
        </button>
      </div>
      <div className="shadow border flex items-center justify-center text-sm mt-2 p-3">
        Have an account? <Link href="sign-in" className="text-sky-600 font-medium cursor-pointer ml-1">Log in</Link>
      </div>
    </div>
  );
}
