import Link from "next/link";
import TodoButton from "@/components/TodoButton";
import type { Metadata } from "next";
import boxStyle from "@/lib/boxStyle";

export const metadata: Metadata = {
  title: "toppage",
};

export default function Home() {
  return (
    <div className="grid grid-cols-5">
      <Link href="./links" className={boxStyle}>
        links
      </Link>
      <Link href="./works" className={boxStyle}>
        works
      </Link>
      <TodoButton className={boxStyle}>todo</TodoButton>
      <TodoButton className={boxStyle}>todo</TodoButton>
      <TodoButton className={boxStyle}>todo</TodoButton>
    </div>
  );
}
