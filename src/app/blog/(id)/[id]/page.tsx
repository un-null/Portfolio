import { BlockToJSX } from "@/components/notion/block-to-jsx";
import { getPageById } from "@/utils/notion";

export default async function BlogId({ params }: { params: { id: string } }) {
  const blocks = await getPageById(params.id);

  return (
    <div>
      <ul className="mx-auto text-sm">
        {blocks.map((block) => (
          <BlockToJSX key={block.id} block={block} />
        ))}
      </ul>
    </div>
  );
}
