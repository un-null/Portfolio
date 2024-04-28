"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/blog",
    label: "notion",
  },
  {
    href: "/blog/zenn",
    label: "zenn",
  },
];

export const Tab = () => {
  const pathname = usePathname();

  return (
    <nav className="text-gray-dim mb-4 flex gap-4">
      {navItems.map((item) => (
        <Link
          href={item.href}
          className={`pb-1 ${
            item.href === pathname
              ? "border-b-graya-normal text-graya-normal border-b"
              : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
