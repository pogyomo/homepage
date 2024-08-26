import Link from "next/link";
import TodoButton from "@/components/TodoButton";
import boxStyle from "@/lib/boxStyle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "games",
};

export default function Games() {
  return (
    <>
      <h1 className="text-2xl text-center mb-4">Games</h1>
      <div className="grid grid-cols-5">
        <Link href="/games/tic-tac-toe" className={boxStyle}>
          tic-tac-toe
        </Link>
        <TodoButton className={boxStyle}>todo</TodoButton>
        <TodoButton className={boxStyle}>todo</TodoButton>
        <TodoButton className={boxStyle}>todo</TodoButton>
        <TodoButton className={boxStyle}>todo</TodoButton>
      </div>
    </>
  );
}
