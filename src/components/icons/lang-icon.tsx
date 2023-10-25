type LangIconProps = {
  type: "Next" | "Notion" | "Tailwind";
  size?: number;
};

export default function LangIcon({ type, size = 20 }: LangIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {type === "Next" && (
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"
        />
      )}
      {type === "Notion" && (
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M7 7h3l6 6M8 7v10m-1 0h2m6-10h2" />
          <path d="M16 7v10h-1l-7-7" />
        </g>
      )}
      {type === "Tailwind" && (
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.667 6C9.177 6 7.623 7.222 7 9.667c.933-1.223 2.023-1.68 3.267-1.375c.71.174 1.217.68 1.778 1.24c.916.912 2 1.968 4.288 1.968c2.49 0 4.044-1.222 4.667-3.667c-.933 1.223-2.023 1.68-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6zm-4 6.5c-2.49 0-4.044 1.222-4.667 3.667c.933-1.223 2.023-1.68 3.267-1.375c.71.174 1.217.68 1.778 1.24c.916.912 1.975 1.968 4.288 1.968c2.49 0 4.044-1.222 4.667-3.667c-.933 1.223-2.023 1.68-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24c-.916-.912-1.975-1.968-4.288-1.968z"
        />
      )}
    </svg>
  );
}
