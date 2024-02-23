import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={`/`}>
      <h4 className="csroll-m-20 text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/50">
        snippets.
      </h4>
    </Link>
  );
}

export default Logo;