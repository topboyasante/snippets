import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

function Navbar() {
  return (
    <nav className="w-screen h-[7vh] fixed top-0 bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto h-full p-5 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-5">
          <Link href={`/sign-in`}>
            <p className="text-sm">Sign In</p>
          </Link>
          <Link href={`/sign-up`}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;