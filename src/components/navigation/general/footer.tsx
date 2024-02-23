import Logo from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/theme-toggle";
import React from "react";

function Footer() {
  return (
    <footer className="w-screen h-auto">
      <div className="max-w-screen-xl mx-auto h-full p-5">
        {/* Top */}
        <div className="w-full h-full flex justify-between items-center">
          <Logo />
        </div>
        <hr className="my-5 dark:border-neutral-700 border-dashed"/>
        <div className="w-full h-full flex justify-between items-center">
          <p className="text-sm">© 2024 Snippets. All rights reserved.</p>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;