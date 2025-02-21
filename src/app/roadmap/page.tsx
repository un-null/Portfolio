import Link from "next/link";

import { Card } from "@tremor/react";

export default function Roadmap() {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <section>
        <Card className="grid gap-4 rounded-sm border text-[#EEEEEE] ring-[#EDEDED]">
          <h1 className="text-lg font-bold text-[#EEEEEE]">About</h1>
          <p className="text-sm font-thin leading-6">
            Here is my 2025 roadmap. You can review my tasks in review, in
            progress and completed.
            <br />
            It made based on 曼荼羅 (Mandala) chart inspired by 密教 (Esoteric
            Buddhism)
          </p>
          <Link
            href={
              "https://trail-smell-0f7.notion.site/1832ae27629380b7b7ebed00752f0a8b?pvs=4"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 cursor-pointer text-sm text-[#FFFFFFAF] hover:text-[#EEEEEE]"
          >
            {"> See 曼荼羅 chart"}
          </Link>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <h1 className="text-lg font-bold text-[#EEEEEE]">Roadmap</h1>
        <div className="-mx-4 overflow-x-auto px-4 pb-2">
          <div className="flex gap-4">
            {/* In Review Column */}
            <div className="flex min-w-[200px] flex-col">
              <h2 className="mb-4">In Review</h2>
              <div className="flex flex-col gap-4">
                <Card className="rounded bg-gray-400">
                  <p>#Label</p>
                  <p>title</p>
                </Card>
                <Card className="rounded bg-gray-400">
                  <p>#Label</p>
                  <p>title</p>
                </Card>
                <Card className="rounded bg-gray-400">
                  <p>#Label</p>
                  <p>title</p>
                </Card>
                <Card className="rounded bg-gray-400">
                  <p>#Label</p>
                  <p>title</p>
                </Card>
                <Card className="rounded bg-gray-400">
                  <p>#Label</p>
                  <p>title</p>
                </Card>
                {/* Add more cards as needed */}
              </div>
            </div>

            {/* In Progress Column */}
            <div className="flex min-w-[200px] flex-col">
              <h2 className="mb-4">In progress</h2>
              <div className="flex flex-col gap-4">
                <Card className="rounded bg-gray-400">
                  <p>#Label</p>
                  <p>title</p>
                </Card>
              </div>
            </div>

            {/* Completed Column */}
            <div className="flex min-w-[200px] flex-col">
              <h2 className="mb-4">Completed</h2>
              <div className="flex flex-col gap-4">
                <Card className="rounded bg-gray-400">
                  <p>#Label</p>
                  <p>title</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
