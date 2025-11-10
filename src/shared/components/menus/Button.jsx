import { useContext } from "react";
import { MenusContext } from "./MenusContext";

function Button({ children, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    close();
    onClick();
  }

  return (
    <li
      onClick={handleClick}
      className="flex cursor-pointer items-center gap-2 px-10 py-1 dark:hover:bg-gray-900"
    >
      {children}
    </li>
  );
}

export { Button };
