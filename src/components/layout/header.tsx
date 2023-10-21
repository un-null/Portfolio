import Link from "next/link";

export default async function Header() {
  return (
    <header className="mb-5 flex items-center md:mb-10">
      <Link
        href="/"
        className="text-gray-normal mr-auto flex-1 text-lg font-bold"
      >
        null
      </Link>
      <nav className="text-gray-dim flex items-center justify-end gap-1 text-xs md:gap-3">
        <Link href="/contact" className="hover:text-graya-normal">
          Contact
        </Link>
        <a
          href="https://twitter.com/nu_____ll"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-graya-normal"
        >
          Follow me
        </a>
      </nav>
    </header>
  );
}
