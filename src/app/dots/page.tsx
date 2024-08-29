import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dots",
};

export default function Dots() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/TrafficLight.png"
        alt="TrafficLight"
        width={64}
        height={64}
      />
    </div>
  );
}
