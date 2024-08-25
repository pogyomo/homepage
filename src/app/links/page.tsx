import type { Metadata } from "next";
import boxStyle from "@/lib/boxStyle";

export const metadata: Metadata = {
  title: "links",
};

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
