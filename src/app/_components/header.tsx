import Link from "next/link";

export default async function Header() {
  return (
    <header className="mb-5 flex items-center md:mb-10">
      <Link
        href="/"
        className="text-mauvedark-12 mr-auto flex-1 text-lg font-bold"
      >
        null
      </Link>
      <nav className="text-mauvedark-11 flex items-center justify-end gap-1 text-xs md:gap-3">
        <Link href="/contact" className="hover:text-mauvedark-12">
          Contact
        </Link>
        <a
          href="https://twitter.com/nu_____ll"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mauvedark-12"
        >
          Follow me
        </a>
      </nav>
    </header>
  );
}
