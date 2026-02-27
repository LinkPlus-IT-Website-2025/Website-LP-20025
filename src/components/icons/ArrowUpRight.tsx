import React from "react";

/** Size: number = px, string = e.g. "1em" | "1.2em", undefined = 1em (match text). */
export type ArrowUpRightSize = number | string | undefined;

/** Inline arrow ↗ - no background, no border, inherits text color. Use next to button/link text. */
export const ArrowUpRight: React.FC<{
  className?: string;
  /** Match text (1em), or pass e.g. 16 (px), "1.2em", "0.9em" to override. */
  size?: ArrowUpRightSize;
}> = ({ className, size }) => {
  const sizeValue =
    size === undefined
      ? "1em"
      : typeof size === "number"
        ? `${size}px`
        : size;
  return (
    <svg
      data-arrow="up-right"
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      style={{
        display: "inline",
        verticalAlign: "middle",
        marginLeft: "2px",
        fontSize: "inherit",
        background: "transparent",
        border: "none",
        outline: "none",
      }}
    >
      <path d="M7 17L17 7M17 7h-6M17 7v6" />
    </svg>
  );
};
