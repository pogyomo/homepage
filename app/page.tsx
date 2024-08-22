import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>pogyomo's homepage</h1>
      <ul>
        <li>
          <Link href="./links">links</Link>
        </li>
        <li>
          <Link href="./works">works</Link>
        </li>
      </ul>
    </>
  );
}
