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
      className="flex cursor-pointer items-center gap-3 px-10 py-2 dark:hover:bg-gray-900"
    >
      {children}
    </li>
  );
}

export { Button };
