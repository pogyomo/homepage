import type { Metadata } from "next";
import boxStyle from "@/lib/boxStyle";

export const metadata: Metadata = {
  title: "links",
};

export default function Links() {
  return (
    <>
      <h1 className="text-2xl text-center mb-4">Links</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 w-64">
          <a href="https://github.com/pogyomo" className={boxStyle}>
            GitHub
          </a>
          <a href="https://x.com/pogyomo" className={boxStyle}>
            Twitter(現X)
          </a>
        </div>
      </div>
    </>
  );
}
