import Snippet from "@/components/snippets/snippet";
import React from "react";

function Page() {
  return (
    <div>
      <div className="my-8">
        <h3 className="mb-3 text-xl font-semibold">Browse Snippets</h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-5">
          <Snippet code={`fmt.Println("Hello World")`} language="typescript" />
        </div>
      </div>
    </div>
  );
}

export default Page;
