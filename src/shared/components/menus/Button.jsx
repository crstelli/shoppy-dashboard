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
      className="cursor-pointer px-10 py-1 dark:hover:bg-gray-900"
    >
      {children}
    </li>
  );
}

export { Button };
