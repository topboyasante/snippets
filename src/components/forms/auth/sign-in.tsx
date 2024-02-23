"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
});

function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center h-full max-w-md mx-auto p-5">
        <div className="w-full">
          <div className="mb-5">
            <Logo />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Sign in to Snippets
          </h3>
          <p className="text-sm text-neutral-600 mt-2">
            Don&apos;t have an account?{" "}
            <span className="font-semibold text-primary">
              <Link href={`sign-up`}>Sign Up</Link>
            </span>
          </p>
          <br />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <br />
              <Link href={`/forgot-password`}>
                <p className="text-sm text-neutral-600 underline underline-offset-4">Forgot Password?</p>
              </Link>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <Separator />
              <p className="text-sm dark:text-neutral-600">
                By signing in, you agree to the{" "}
                <span className="underline">Terms of Service</span> and{" "}
                <span className="underline">Privacy Policy</span>.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;