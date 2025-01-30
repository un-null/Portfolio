import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

import ActionIcon from "@/components/icons/action-icon";
import StackIcon from "@/components/icons/stack-icon";
import { getAllWorks } from "@/utils/notion";

export default async function Home() {
  const { result } = await getAllWorks();

  return (
    <div>
      <div className="mt-5 w-full  sm:max-w-screen-sm">
        <Table className="mt-5 cursor-default">
          <TableHead className="border-[#3A3A3A] border-b">
            <TableRow className="text-xs">
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
            {result.map((item) => (
              <TableRow key={item?.id} className="border-[#3A3A3A] text-sm">
                <TableCell className="w-0 p-0 pr-4">
                  {item?.date}
                </TableCell>
                <TableCell className="p-0 pr-4 text-[#EEEEEE]">
                  {item?.public_url ? (
                    <a
                      href={item.public_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item?.title}
                    </a>
                  ) : (
                    <p>{item?.title}</p>
                  )}
                </TableCell>
                <TableCell className="w-0 p-0">
                  <ul className="flex space-x-2 text-[#EEEEEE]">
                    {item?.langs.map((lang) => (
                      <li key={lang.name}>
                        <span>
                          <StackIcon type={lang.name} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="w-0">
                  <ActionIcon href={item?.github_url ? item.github_url : ""} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
