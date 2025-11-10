import { createPortal } from "react-dom";

import { Overlay } from "./Overlay";
import { X } from "lucide-react";

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <div className="relative rounded-md bg-gray-100 p-4 dark:bg-gray-900">
        <X
          onClick={onClose}
          className="absolute top-2 right-2 ml-auto cursor-pointer"
          size={35}
        />
        {children}
      </div>
    </Overlay>,
    document.body,
  );
}

export { Modal };
