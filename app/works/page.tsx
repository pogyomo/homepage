import Link from "next/link";

export default function Works() {
  return (
    <>
      <h1>Works</h1>
      <h2>Neovim Plugins</h2>
      <ul>
        <li>
          <a href="https://github.com/pogyomo/submode.nvim">submode.nvim</a>
        </li>
        <li>
          <a href="https://github.com/pogyomo/winresize.nvim">winresize.nvim</a>
        </li>
        <li>
          <a href="https://github.com/pogyomo/cppguard.nvim">cppguard.nvim</a>
        </li>
      </ul>
      <h2>Programming Languages</h2>
      <ul>
        <li>
          <a href="https://github.com/pogyomo/mini">mini</a>
        </li>
        <li>
          <a href="https://github.com/pogyomo/mlisp">mlisp</a>
        </li>
        <li>
          <a href="https://github.com/pogyomo/rnasm">rnasm</a>
        </li>
      </ul>
      <Link href="../">back</Link>
    </>
  );
}
