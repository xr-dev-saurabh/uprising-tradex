import React from "react";

export function Backg({
    children,
  }) {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {children}

    </div>
  );
}
