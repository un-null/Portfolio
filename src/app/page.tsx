import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

import ActionIcon from "@/components/icons/action-icon";
import LangIcon from "@/components/icons/lang-icon";
import { getAllWorks } from "@/utils/notion";

export default async function Home() {
  const { result } = await getAllWorks();

  return (
    <div>
      <div className="mt-5 w-full  sm:max-w-screen-sm">
        <Table className="mt-5">
          <TableHead className="border-gray-dim border-b">
            <TableRow className="text-graya-dim text-xs">
              <TableHeaderCell className="p-0 pb-2 font-thin">
                date
              </TableHeaderCell>
              <TableHeaderCell className="p-0 pb-2 font-thin">
                title
              </TableHeaderCell>
              <TableHeaderCell className="p-0 pb-2 font-thin">
                stack
              </TableHeaderCell>
              <TableHeaderCell className="p-0 pb-2 text-center font-thin">
                github
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((item: any) => (
              <TableRow key={item.id} className="border-gray-dim text-sm">
                <TableCell className="text-gray-dim w-0 p-0 pr-4">
                  {item.properties["Date"]["date"]?.["start"].substr(0, 4)}
                </TableCell>
                <TableCell className="p-0 pr-4">
                  {item.public_url ? (
                    <a
                      href={item.public_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.properties["Name"]["title"].map(
                        (c: any) => c.plain_text,
                      )}
                    </a>
                  ) : (
                    <p>
                      {item.properties["Name"]["title"].map(
                        (c: any) => c.plain_text,
                      )}
                    </p>
                  )}
                </TableCell>
                <TableCell className="w-0 p-0">
                  <ul className="flex space-x-2">
                    {item.properties["Languages"]["multi_select"].map(
                      (lang: any) => (
                        <li key={lang.name}>
                          <span>
                            <LangIcon type={lang.name} />
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </TableCell>
                <TableCell className="text-gray-dim w-0">
                  <ActionIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
