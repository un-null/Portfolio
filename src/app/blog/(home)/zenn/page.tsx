import { Card } from "@tremor/react";

import { getZennBlogs } from "@/utils/zenn";

export default async function Zenn() {
  const { data } = await getZennBlogs();

  return (
    <ul className="mx-auto grid h-fit grid-cols-1 gap-4 font-thin md:grid-cols-2">
      {data.map((d) => (
        <a
          key={d?.id}
          href={`https://zenn.dev/${d.path}`}
          target="_blank"
          rel="noopener"
        >
          <Card className="text-gray-dim flex h-48 max-w-md flex-col gap-2 rounded-sm ring-graydark-11 hover:text-graya-normal">
            <p className="text-center text-5xl">{d.emoji}</p>
            <p className="text-graya-normal text-lg font-bold">{d.title}</p>
            <span className="flex-1"></span>
            <p className="text-xs">{d?.published_at.substring(0, 7)}</p>
          </Card>
        </a>
      ))}
    </ul>
  );
}
