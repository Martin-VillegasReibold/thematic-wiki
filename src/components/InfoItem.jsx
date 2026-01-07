import React from "react";

//Lista ítems de información general(etiqueta con ancho fijo + valor flexible)
const InfoItem = ({ icon, label, value }) => (
  <li className="flex items-start border-l-4 border-border pl-2 min-h-0 text-base">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="mr-2 mt-1 shrink-0"
      aria-hidden="true"
    >
      {icon || (
        <path
          d="M3 3 L15 3 L9 15 Z"
          fill="var(--color-clay)"
          stroke="var(--color-border)"
          strokeWidth="1.5"
        />
      )}
    </svg>
    <div className="flex-1 flex flex-row items-start gap-2">
      <span className="font-semibold text-border shrink-0 w-28 md:w-48 text-sm md:text-base">
        {label}:
      </span>
      <div className="text-ink flex-1 wrap-break-words">{value}</div>
    </div>
  </li>
);

export default InfoItem;
