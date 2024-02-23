import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const features = [
  {
    emoji: "🚀",
    heading: "Streamline Your Workflow",
    content: `Spend less time searching, more time coding. Our intuitive platform is designed to simplify your development workflow, allowing you to focus on what matters most - writing great code.`,
  },
  {
    emoji: "🔍",
    heading: "Find with Ease",
    content: `Effortlessly locate the snippets you need. Our powerful search functionality ensures that you can quickly pinpoint the exact piece of code, whether by language, tags, or keywords.`,
  },
  {
    emoji: "🌐",
    heading: "Access Anywhere, Anytime",
    content: `Your code, your way, on your terms. With cloud synchronization, access your snippets from anywhere, at any time. Never be without your coding arsenal, whether you're at your desk or on the go.`,
  },
];

function Home() {
  return (
    <div className="w-screen h-full lg:h-screen pt-[10vh]">
      <div className="max-w-screen-xl mx-auto h-full p-5 flex flex-col justify-center items-center">
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
        {/*  */}
        <div className="w-full my-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item, index) => {
              return (
                <Card className="shadow-none" key={index}>
                  <CardHeader>
                    <CardTitle>{item.emoji}</CardTitle>
                    <br />
                    <CardTitle>{item.heading}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-500">{item.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
