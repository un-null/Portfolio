import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

import { SelectColor } from "@/types/notion";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllWorks = async () => {
  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_WORKS,
    sorts: [
      {
        timestamp: "created_time",
        direction: "ascending",
      },
    ],
  });

  return {
    result: data.results,
  };
};

export const getAllBlogs = async () => {
  const req = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_BLOG,
    sorts: [
      {
        timestamp: "created_time",
        direction: "ascending",
      },
    ],
  });

  const data = req.results.map((d) => {
    if (d.object === "page" && "properties" in d) {
      const id = d.id;
      const created_at = d.created_time;

      const title =
        d.properties["Name"].type === "title"
          ? d.properties["Name"].title.map((title) => title.plain_text)
          : [];
      const summary =
        d.properties["Summary"].type === "rich_text"
          ? d.properties["Summary"].rich_text.map((d) => d.plain_text)
          : [];
      const tags =
        d.properties["Tags"].type === "multi_select"
          ? d.properties["Tags"].multi_select.map((tag) => tag)
          : [];

      return { id, created_at, title, summary, tags };
    }
  });

  return {
    data: data ? data : [],
  };
};

export const tagColor = (color: SelectColor) => {
  switch (color) {
    case (color = "blue"):
      return "bg-notion-blue/50";
    case (color = "default"):
      return "bg-notion-gray/40";
  }
};
