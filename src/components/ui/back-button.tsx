"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./button";

function BackButton() {
  const router = useRouter();
  return (
    <div className="my-5">
      <Button onClick={() => router.back()}>Go Back</Button>
    </div>
  );
}

export default BackButton;
