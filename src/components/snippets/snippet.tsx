import { codeToHtml } from "@/utils/shiki";
import Avatar from "boring-avatars";
import React from "react";

type SnippetProps = {
  code: string;
  language: string;
};

async function Snippet({ ...props }: SnippetProps) {
  const html = await codeToHtml({ code: props.code, language: props.language });

  return (
    <div>
      <div className="my-5 flex gap-5">
        <Avatar
          size={40}
          name="Adolf Hitler"
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <div>
          <h3>Adolf Hitler</h3>
          <p className="text-sm text-neutral-600">@adolfhitler • 2h ago</p>
          <br />
          <div className="border rounded-full w-fit px-5 py-1 flex justify-center items-center">
            <p className="text-sm text-neutral-600">golang</p>
          </div>
        </div>
      </div>
      <div>
        <p>Simple Code to display content in golang:</p>
      </div>
      <div className="my-5" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default Snippet;
