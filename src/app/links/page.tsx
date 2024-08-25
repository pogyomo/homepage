import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "links",
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

export default function Links() {
  return (
    <>
      <div className="grid grid-cols-1">
        <a href="https://github.com/pogyomo" className={boxStyle}>
          GitHub
        </a>
        <a href="https://x.com/pogyomo" className={boxStyle}>
          Twitter(現X)
        </a>
      </div>
    </>
  );
}
