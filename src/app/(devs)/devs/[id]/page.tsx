import { Separator } from "@/components/ui/separator";
import Avatar from "boring-avatars";
import React from "react";

function Page() {
  return (
    <div>
      <div className="my-5 flex gap-5">
        <Avatar
          size={40}
          name="Nana Kwasi Asante"
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <div>
          <h3>Nana Kwasi Asante</h3>
          <p className="text-sm text-neutral-600">
            @topboyasante • 50 snippets{" "}
          </p>
        </div>
      </div>
      <Separator/>
    </div>
  );
}

export default Page;
