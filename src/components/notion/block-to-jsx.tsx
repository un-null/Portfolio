import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { BulletedList } from "./bulleted-list";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

export const BlockToJSX = ({ block }: { block: BlockObjectResponse }) => {
  const blockType = block.type;

  switch (blockType) {
    case "paragraph":
      return <Paragraph block={block} />;
    case "heading_3":
      return <Heading block={block} />;
    case "bulleted_list_item":
      return (
        <ul className="my-4">
          <BulletedList block={block} />
        </ul>
      );

    default:
      return <></>;
  }
};
