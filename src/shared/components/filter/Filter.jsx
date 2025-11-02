import { FilterContext } from "./FilterContext";
import { Option } from "./Option";

function Filter({ name, children, defaultValue = "all" }) {
  return (
    <div className="flex gap-2 overflow-hidden rounded-sm border border-gray-300 bg-gray-50 p-1">
      <FilterContext.Provider value={{ name, defaultValue }}>
        {children}
      </FilterContext.Provider>
    </div>
  );
}

Filter.Option = Option;

export { Filter };
