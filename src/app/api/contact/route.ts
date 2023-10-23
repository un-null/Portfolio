import { NextResponse } from "next/server";

import { Form } from "@/app/contact/page";
import { notion } from "@/utils/notion";

export async function POST(req: Request) {
  const body: Form = await req.json();
  const { name, email, message } = body;

  const date = new Date().toISOString();

  if (req.method !== "POST") {
    return NextResponse.json(
      { message: `${req.method} requests are not allowed` },
      { status: 405 },
    );
  }

  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID_FORM,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Date: {
          date: {
            start: date,
          },
        },
        Text: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
