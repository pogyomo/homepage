import Link from "next/link";
import TodoButton from "@/components/TodoButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "toppage",
};

const boxStyle: string = `
rounded-md
m-2
p-2
border-2
border-black
bg-sky-300
hover:bg-sky-500
transition-colors
ease-out
duration-200
inline-block
cursor-pointer
text-center
`;

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className={boxStyle}>
          <Link href="./links" className="block text-black no-underline">
            links
          </Link>
        </div>
        <div className={boxStyle}>
          <Link href="./works" className="block text-black no-underline">
            works
          </Link>
        </div>
        <TodoButton className={boxStyle}>todo</TodoButton>
        <TodoButton className={boxStyle}>todo</TodoButton>
        <TodoButton className={boxStyle}>todo</TodoButton>
      </div>
    </>
  );
}
