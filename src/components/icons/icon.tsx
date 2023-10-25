type IconProps = {
  type: "Home" | "X";
  size?: number;
};

export default function Icon({ type, size = 20 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {type === "Home" && (
        <path
          fill="currentColor"
          d="M11 13q.425 0 .713-.288T12 12q0-.425-.288-.713T11 11q-.425 0-.713.288T10 12q0 .425.288.713T11 13Zm-4 8v-2l6-1V6.875q0-.375-.225-.675t-.575-.35L7 5V3l5.5.9q1.1.2 1.8 1.025T15 6.85v12.8L7 21Zm-4 0v-2h2V5q0-.85.588-1.425T7 3h10q.85 0 1.425.575T19 5v14h2v2H3Zm4-2h10V5H7v14Z"
        />
      )}
      {type === "X" && (
        <path
          fill="currentColor"
          d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
        />
      )}
    </svg>
  );
}
