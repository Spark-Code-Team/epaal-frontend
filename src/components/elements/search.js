"use client"

import { useState } from "react";
import SearchIcon from "../../../public/icons/SearchIcon";


function Search() {

  const [focus, setFocus] = useState(false)

  return (
    <div 
      className={`
          w-full
          bg-slate-50
          flex
          items-center
          gap-3
          rounded-lg
          p-2
        `}
    >
      <SearchIcon
          width="24px"
          height="24px"
          color="black"
      />
      <input
        className="
          p-4
          h-full
          w-full
          border-none
          outline-none
          focus:ring-0
          bg-inherit
        "
        type="text"
        placeholder="جستجو..."
      />
    </div>
  );
}

export default Search;
