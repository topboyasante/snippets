import Snippet from "@/components/snippets/snippet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="w-full min-h-screen">
      <div className="my-8">
        <div className="flex justify-between items-center my-5">
          <div>
            <h2 className="mb-3 font-semibold">Browse Snippets</h2>
            <p className="w-full text-neutral-500">
              View all code snippets 
            </p>
          </div>
          <Link href={`/snippets/create`}>
            <Button className="rounded-full">Create Snippet</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-5">
          <Snippet code={`fmt.Println("Hello World")`} language="typescript" />
        </div>
      </div>
    </div>
  );
}

export default Page;
