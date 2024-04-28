import Link from "next/link";

import { Card } from "@tremor/react";

import { SelectColor } from "@/types/notion";
import { getAllBlogs } from "@/utils/notion";

export default async function Blog() {
  const { data } = await getAllBlogs();

  const tagColor = (color: SelectColor) => {
    switch (color) {
      case (color = "blue"):
        return "bg-notion-blue/50";
      case (color = "default"):
        return "bg-notion-gray/40";
    }
  };

  return (
    <ul className="mx-auto grid h-fit grid-cols-1 gap-4 font-thin md:grid-cols-2">
      {data.map((d) => (
        <Link href={`/blog/${d?.id}`} key={d?.id}>
          <Card className="text-gray-dim flex h-48 max-w-md flex-col gap-2 rounded-sm ring-graydark-11 hover:text-graya-normal">
            <p className="text-graya-normal text-lg font-bold">{d?.title}</p>
            <p className="line-clamp-2 text-clip text-sm font-thin md:line-clamp-3">
              {d?.summary}
            </p>
            <p className="text-xs">{d?.created_at.substring(0, 7)}</p>
            <ul className="flex flex-wrap gap-2 text-xs">
              {d?.tags.map((tag) => (
                <span
                  key={tag.id}
                  className={`${tagColor(
                    tag.color,
                  )} text-graya-normal rounded-sm px-1`}
                >
                  {tag.name}
                </span>
              ))}
            </ul>
          </Card>
        </Link>
      ))}
    </ul>
  );
}
