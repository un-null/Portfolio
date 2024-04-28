import Link from "next/link";

import { ArrowLeft } from "@/components/icons/left-arrow";
import { BlockToJSX } from "@/components/notion/block-to-jsx";
import { getPageById } from "@/utils/notion";

export default async function BlogId({ params }: { params: { id: string } }) {
  const blocks = await getPageById(params.id);

  return (
    <div>
      <Link
        href={"/blog"}
        className="text-gray-dim mt-4 flex items-center gap-2 text-sm hover:text-graya-normal"
      >
        <span>
          <ArrowLeft />
        </span>
        戻る
      </Link>
      <ul className="mx-auto mt-8 text-sm">
        {blocks.map((block) => (
          <BlockToJSX key={block.id} block={block} />
        ))}
      </ul>
    </div>
  );
}
