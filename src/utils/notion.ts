import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

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
