import React from "react";
import ItemSelect from "./ItemSelect";

export default function Selector({
  pages,
  setChecked,
}: {
  pages: { id: number; title: string; checked: boolean }[];
  setChecked: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        checked: boolean;
      }[]
    >
  >;
}) {
  //These are all the conditions to handle the different states in which the selectors might be.
  function selectAll() {
    return (c: boolean) => {
      //If there's not any item with the checked property and the special selector (all pages) is not yet checked, check them all.
      if (
        !pages.find((item) => {
          return item.checked === true;
        }) &&
        c !== true
      ) {
        return setChecked(
          pages.map((p) => {
            return { ...p, checked: true };
          })
        );
        //If the special selector (all pages) is checked and there is at least one item witch a true value, uncheck them all.
      } else if (
        c === true &&
        pages.find((item) => {
          return item.checked === true;
        })
      ) {
        return setChecked(
          pages.map((p) => {
            return { ...p, checked: false };
          })
        );
      }
      //If the codes reaches here it's because there's some items checked and the special selector is unchecked, in this case, we check them all so every item gets checked.
      setChecked(
        pages.map((p) => {
          return { ...p, checked: true };
        })
      );
    };
  }

  //Only check the current selector
  function selectOne(page: { id: number; title: string; checked: boolean }) {
    return () => {
      setChecked(
        pages.map((p) => {
          console.log(pages);
          if (page.id === p.id) return { ...p, checked: !p.checked };
          else return { ...p };
        })
      );
    };
  }

  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 px-6 rounded-md text-black  w-full montserrat-font-400">
      <div className="border-b border-gray py-4 montserrat-font-600">
        <ItemSelect
          specialSelector={selectAll}
          title="All pages"
          checked={false}
        />
      </div>
      <div className="border-b border-gray flex gap-2 flex-col py-6">
        {pages.map((p) => {
          return <ItemSelect setChecked={selectOne(p)} {...p} key={p.id} />;
        })}
      </div>
      <button
        type="button"
        className="text-center w-full mt-6 mb-3 py-2 bg-yellow-400 rounded-md hover:bg-yellow-300 montserrat-font-500 transition"
      >
        Done
      </button>
      <p className="text-right text-xs text-black/60">Made by Nico Horn</p>
    </div>
  );
}
