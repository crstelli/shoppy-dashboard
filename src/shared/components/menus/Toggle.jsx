import { useContext } from "react";
import { MenusContext } from "./MenusContext";

import { EllipsisVertical } from "lucide-react";

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === id ? close() : open(id);
  }

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-sm p-1 hover:dark:bg-gray-700"
    >
      <EllipsisVertical />
    </button>
  );
}

export { Toggle };
