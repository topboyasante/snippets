import { codeToHtml } from "@/utils/shiki";
import Avatar from "boring-avatars";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

type SnippetProps = {
  code: string;
  language: string;
};

async function Snippet({ ...props }: SnippetProps) {
  const html = await codeToHtml({ code: props.code, language: props.language });

  return (
    <Link href={`/snippets/1`}>
      <div className="border p-5 rounded-xl">
        <div className="my-5 flex gap-5">
          <Avatar
            size={40}
            name="Nana K."
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <div>
            <h3>Nana K.</h3>
            <p className="text-sm text-neutral-600">@topboyasante • 2h ago</p>
            <br />
            <Badge variant="default">golang</Badge>
          </div>
        </div>
        <div>
          <p>Simple Code to display content in golang:</p>
        </div>
        <div className="my-5" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Link>
  );
}

export default Snippet;
