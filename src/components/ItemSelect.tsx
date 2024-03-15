import React, { useState } from "react";

/** This item will display the checkbox and the title. According to which of the two functions it receives, it behaves normally (checking or unchecking itself) or checking all of the rest.*/
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
        //Two set of parenthesis because I'm making use of JavaScript closures.
        specialSelector && specialSelector()(c);
        setChecked && setChecked();
        specialSelector && setC(!c);
      }}
      className="flex justify-between w-full py-2 px-2 rounded-lg items-center cursor-pointer hover:bg-gray/10 transition group relative"
    >
      <h3>{title}</h3>
      <input
        className="w-6 h-6  rounded-md appearance-none border border-black/50 group-hover:border-black checked:group-hover:border-blue-700 transition checked:border-blue-700  peer relative before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:bg-blue-700 checked:hover:bg-blue-700 cursor-pointer"
        type="checkbox"
        defaultChecked={checked}
        checked={specialSelector ? c : checked}
      ></input>
      <span className="absolute  transition-opacity group-hover:opacity-30 opacity-0 pointer-events-none top-2/4 -right-[7px] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 peer-checked:fill-white">
        <svg
          className="h-7 w-7"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          enable-background="new 0 0 50 50"
        >
          <path
            d="M40.267,14.628L20.974,33.921l-9.293-9.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l10,10
	c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l20-20c0.391-0.391,0.391-1.023,0-1.414S40.657,14.237,40.267,14.628z
	"
          />
        </svg>
      </span>
    </div>
  );
}
