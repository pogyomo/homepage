import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "works",
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

export default function Works() {
  return (
    <>
      <h2 className="text-2xl text-center">Neovim Plugins</h2>
      <div className="grid grid-cols-3">
        <a href="https://github.com/pogyomo/submode.nvim" className={boxStyle}>
          submode.nvim
        </a>
        <a
          href="https://github.com/pogyomo/winresize.nvim"
          className={boxStyle}
        >
          winresize.nvim
        </a>
        <a href="https://github.com/pogyomo/cppguard.nvim" className={boxStyle}>
          cppguard.nvim
        </a>
      </div>
      <h2 className="text-2xl text-center">Programming Languages</h2>
      <div className="grid grid-cols-3">
        <a href="https://github.com/pogyomo/mini" className={boxStyle}>
          mini
        </a>
        <a href="https://github.com/pogyomo/mlisp" className={boxStyle}>
          mlisp
        </a>
        <a href="https://github.com/pogyomo/rnasm" className={boxStyle}>
          rnasm
        </a>
      </div>
    </>
  );
}
