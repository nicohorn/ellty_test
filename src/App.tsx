import React, { useState } from "react";
import Selector from "./components/Selector";

function App() {
  //To make it dynamic, I create pages as how one would receive them from the server. I'm using useState so that I can change the checked property.
  const [pages, setPages] = useState([
    { id: 1, title: "Page 1", checked: true },
    { id: 2, title: "Page 2", checked: false },
    { id: 3, title: "Page 3", checked: false },
    { id: 4, title: "Page 4", checked: false },
  ]);

  //The selector receives the 4 pages and it has a special selector, the "all pages", which has a special behavior: when selected, all the pages get selected.
  return (
    <main className="flex h-screen w-screen items-center justify-center shadow px-5">
      <div className="xl:w-[25%] md:w-[40%] w-full">
        <Selector setChecked={setPages} pages={pages} />
      </div>
    </main>
  );
}

export default App;
