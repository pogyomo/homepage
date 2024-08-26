import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "profile",
};

export default function Profile() {
  return (
    <>
      <h1 className="text-2xl ml-4 mb-4">Profile</h1>
      <h2 className="font-bold ml-4 mb-2">Hometown</h2>
      <p className="ml-8 mb-2">Japan</p>
      <h2 className="font-bold ml-4 mb-2">Belong to</h2>
      <p className="ml-8 mb-2">University of Aizu</p>
      <h2 className="font-bold ml-4 mb-2">Hobby</h2>
      <p className="ml-8 mb-2">Game and Programming</p>
      <h2 className="font-bold ml-4 mb-2">Using programming languages</h2>
      <p className="ml-8 mb-2">C, C++, Rust, Lua</p>
    </>
  );
}
