import TictacToeBackend from "@/components/TicTacToe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "tic-tac-toe",
};

export default function TicTacToe() {
  return (
    <>
      <h1 className="text-2xl text-center mb-4">tic-tac-toe</h1>
      <TictacToeBackend />
    </>
  );
}
