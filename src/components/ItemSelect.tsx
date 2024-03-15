import React, { useState } from "react";

export default function ItemSelect({
  title,
  checked,
  setChecked,
  specialSelector,
}: {
  title: string;
  checked: boolean;
  setChecked?: Function;
  specialSelector?: Function;
}) {
  const [c, setC] = useState(false);
  return (
    <div
      onClick={() => {
        specialSelector && specialSelector()(c);
        setChecked && setChecked();
        specialSelector && setC(!c);
      }}
      className="flex justify-between w-full py-2 px-2 rounded-lg items-center cursor-pointer hover:bg-gray/20 transition group relative"
    >
      <h3>{title}</h3>
      <input
        className="w-5 h-5  rounded-md appearance-none border border-black/50 group-hover:border-black transition checked:border-black  peer relative before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity "
        type="checkbox"
        defaultChecked={checked}
        checked={specialSelector ? c : checked}
      ></input>
      <span className="absolute text-black transition-opacity group-hover:opacity-30 opacity-0 pointer-events-none top-2/4 right-1 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
  );
}
