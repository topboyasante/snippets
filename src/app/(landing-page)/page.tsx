import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div className="w-screen h-screen pt-[10vh]">
      <div className="max-w-screen-xl mx-auto h-full p-5 ">
        <div className="w-full">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Stash, Search, and Share.
          </h1>
          <p className="w-full md:max-w-[55%] text-neutral-500 mt-3">
            No more digging through old projects or scouring through
            documentation. Save your valuable code snippets with just a click.
          </p>
          <div className="my-5">
            <Link href={`/sign-up`}>
              <Button className="rounded-full">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
