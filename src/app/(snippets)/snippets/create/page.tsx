import CreateSnippetForm from "@/components/forms/snippets/create-snippet";
import BackButton from "@/components/ui/back-button";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Snippets | Create A Snippet",
  description: "Create a Code Snippet",
};

function Page() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="my-5">
        <BackButton />
      </div>
      <div>
        <h2 className="font-semibold">Create A Snippet</h2>
        <p className="text-[#a3a3a3] text-md">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="my-8">
        <CreateSnippetForm />
      </div>
    </div>
  );
}

export default Page;
