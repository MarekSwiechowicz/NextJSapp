import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About page",
  description: "Search me first, please",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About NavBar</nav>
      <main className=" min-h-screen grid place-content-center bg-black ">
        {children}
      </main>
    </>
  );
}
