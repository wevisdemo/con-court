import { twMerge } from "tailwind-merge";

type Props = {
  position: "top" | "bottom" | "left" | "right";
  borderColor: string;
  arrowColor: string;
};

export default function Bracket({
  position = "top",
  arrowColor,
  borderColor,
}: Props) {
  if (["left", "right"].includes(position)) {
    return (
      <div
        style={{ borderColor: borderColor }}
        className={twMerge(
          "relative h-full w-4 rounded-md border-l",
          position === "right" && "rotate-180",
        )}
      >
        <div
          style={{ backgroundColor: arrowColor, borderColor: borderColor }}
          className="absolute inset-y-0 -left-[5px] my-auto h-2 w-2 rotate-45 border-b border-l"
        ></div>
      </div>
    );
  }

  return (
    <div
      style={{ borderColor: borderColor }}
      className={twMerge(
        "relative h-4 rounded-md border-t",
        position === "bottom" && "rotate-180",
      )}
    >
      <div
        style={{ backgroundColor: arrowColor, borderColor: borderColor }}
        className="absolute inset-x-0 -top-[5px] mx-auto h-2 w-2 rotate-[135deg] border-b border-l"
      ></div>
    </div>
  );
}
