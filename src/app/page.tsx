import Link from "next/link";
import boxStyle from "@/lib/boxStyle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "toppage",
};

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-center mb-4">TopPage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <Link href="/profile" className={boxStyle}>
          profile
        </Link>
        <Link href="/links" className={boxStyle}>
          links
        </Link>
        <Link href="/works" className={boxStyle}>
          works
        </Link>
        <Link href="/games" className={boxStyle}>
          games
        </Link>
        <Link href="/dots" className={boxStyle}>
          dots
        </Link>
      </div>
    </>
  );
}
