"use client";

import Image from "next/image";
import Link from "next/link";
import img from "../../../../public/imgs/login.png";
import ins from "../../../../public/imgs/Instagram_logo.svg.png";
import gg from "../../../../public/imgs/gg.png";
import { redirect, useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const route = useRouter();
  return (
    <main className="flex">
      <Image
        src={img}
        alt="anh"
        height={500}
        width={300}
        className="hidden md:block"
      />
      <div className="ml-8 ">
        <div className="shadow border flex flex-col px-8 py-4">
          <div className="flex justify-center p-4">
            <Image src={ins} alt="" height={50} width={175} />
          </div>
          <input
            type="text"
            placeholder="Phone number, username or email"
            className="h-10 w-72 text-xs placeholder:text-black border p-2 bg-stone-50 my-1 outline-zinc-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-10 w-72 text-xs placeholder:text-black border p-2 bg-stone-50 my-1 outline-zinc-300"
          />
          <button className="bg-sky-500 text-white rounded-lg py-1 my-2">
            Log in
          </button>
          <div className="flex items-center my-2 uppercase after:content-[''] after:border after:border-inherit after:grow before:content-[''] before:border before:border-inherit before:grow">
            <p className="mx-3 text-slate-600">OR</p>
          </div>
          <button
            className="flex items-center text-sm mx-auto my-2"
            // onClick={() => route.push("http://localhost:8080/google")}
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <Image src={gg} height={16} width={16} alt="" className="mr-2" />
            Log in with Google
          </button>
          {/* <GoogleOAuthProvider clientId="553387708630-sa90dvfrrh58moqbo9hu0bcnoget04kd.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login failed')
              }}
            />
          </GoogleOAuthProvider> */}
          <button className="flex items-center text-xs mx-auto my-2">
            Forgot password?
          </button>
        </div>
        <div className="shadow border flex items-center justify-center text-sm mt-2 p-3">
          Don't have an account?{" "}
          <Link
            href="sign-up"
            className="text-sky-600 font-medium cursor-pointer ml-1"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
