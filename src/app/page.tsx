import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

export default function Home() {
  const data = [
    {
      date: "2023",
      title: "Project A",
      stack: "1, 2, 3, 4, 5",
      repo: "A",
    },
    {
      date: "2023",
      title: "Project B",
      stack: "1, 2, 3,",
      repo: "B",
    },
    {
      date: "2023",
      title: "Project C",
      stack: "1, 2",
      repo: "C",
    },
    {
      date: "2023",
      title: "Project D",
      stack: "1, 2, 3, 4",
      repo: "D",
    },
    {
      date: "2023",
      title: "Project E",
      stack: "1, 2",
      repo: "E",
    },
    {
      date: "2023",
      title: "Project F",
      stack: "1, 2, 3, 4",
      repo: "F",
    },
    {
      date: "2023",
      title: "Project G",
      stack: "1, 2, 3, 4, 5",
      repo: "G",
    },
  ];

  return (
    <div>
      <h1 className="text-graya-normal mt-5 text-lg">Tabs</h1>

      <div className="mt-5 w-full max-w-screen-sm">
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
              <TableHeaderCell className="p-0 pb-2 font-thin">
                github
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.title} className="border-gray-dim text-sm">
                <TableCell className="text-gray-dim w-0 p-0 pr-4">
                  {item.date}
                </TableCell>
                <TableCell className="p-0">{item.title}</TableCell>
                <TableCell className="w-0 p-0 pr-4">{item.stack}</TableCell>
                <TableCell className="text-gray-dim w-0">{item.repo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
