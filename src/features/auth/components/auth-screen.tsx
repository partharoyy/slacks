"use client";

import React, { useState } from "react";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";
import { SignInFlow } from "../types";
import { Button } from "@/components/ui/button";

export default function AuthScreen() {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className='h-full flex items-center justify-center bg-[#5c3b58]'>
      <div className='md: h-auto md: w-[420px]'>
        {state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
      </div>
    </div>
  );
}
