import { useContext } from "react";
import { MenusContext } from "./MenusContext";
import { createPortal } from "react-dom";

function List({ id, children }) {
  const { openId, position } = useContext(MenusContext);
  if (openId !== id) return null;

  const { top, left } = position;

  return createPortal(
    <ul
      className="fixed flex flex-col gap-1 rounded-md bg-gray-50 text-center text-lg font-medium shadow-xl/25 dark:bg-gray-800"
      style={{
        top: top + 20,
        left: left - 135,
      }}
    >
      {children}
    </ul>,
    document.body,
  );
}

export { List };
