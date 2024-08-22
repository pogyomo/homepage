import Link from "next/link";

export default function Links() {
  return (
    <>
      <h1>Links</h1>
      <ul>
        <li>
          <a href="https://github.com/pogyomo">GitHub</a>
        </li>
        <li>
          <a href="https://x.com/pogyomo">Twitter(現X)</a>
        </li>
      </ul>
      <Link href="../">back</Link>
    </>
  );
}
