import { useContext } from "react";
import { FilterContext } from "./FilterContext";

import { useFilter } from "./useFilter";

function Option({ children }) {
  const { name, defaultValue } = useContext(FilterContext);

  const { getFilter, setFilter } = useFilter(name, defaultValue);
  const filterName = children.toLowerCase().trim().replace(" ", "");

  const active = getFilter() === filterName;

  return (
    <button
      disabled={active}
      onClick={() => setFilter(filterName)}
      className={`cursor-pointer rounded-sm px-3 py-1 hover:bg-emerald-500 hover:text-gray-50 disabled:cursor-not-allowed ${active && "bg-emerald-500 text-gray-50"}`}
    >
      {children}
    </button>
  );
}

export { Option };
