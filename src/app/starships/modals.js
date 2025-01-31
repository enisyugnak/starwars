import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-slate-950/80"
      onClick={onClose}
    >
      {/** Small screen height problem */}
      <div className="h-auto w-2/3 rounded-lg bg-slate-700/60 p-2">
        <div className="relative h-auto w-full rounded-l-lg bg-slate-900/90 shadow-lg">
          <button
            className="absolute right-4 top-3 text-neutral-600"
            onClick={onClose}
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
