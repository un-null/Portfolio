import { ReactNode } from "react";

import { Tab } from "@/components/layout/tab";

export default async function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Tab />
      {children}
    </div>
  );
}
