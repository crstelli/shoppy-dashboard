import { useSearchParams } from "react-router";

function useFilter(name, defaultValue) {
  const [searchParams, setSearchParams] = useSearchParams();

  function getFilter() {
    const filter = searchParams.get(name) || defaultValue;
    return filter;
  }

  function setFilter(value) {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  return { getFilter, setFilter };
}

export { useFilter };
