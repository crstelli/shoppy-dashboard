import { Option } from "./Option";
import { useSort } from "./useSort";

function Sort({ children }) {
  const { getSort, setSort } = useSort();

  return (
    <div className="flex items-stretch">
      <select
        className="rounded-sm border border-gray-300 bg-gray-50 px-3 py-2 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
        onChange={(e) => setSort(e.target.value)}
        value={getSort()}
      >
        {children}
      </select>
    </div>
  );
}

Sort.Option = Option;

export { Sort };
