import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999999] flex items-center justify-center bg-slate-950/80"
      onClick={onClose}
    >
      {/** Small screen height problem */}
      <div className="m-6 flex max-h-[85vh] w-full flex-col justify-center rounded-lg bg-slate-700/60 p-3 sm:w-10/12">
        <div className="relative flex h-full w-full flex-col justify-center rounded-t-lg bg-slate-900/90 shadow-lg sm:rounded-lg">
          <button
            className="absolute right-4 top-3 z-30 text-neutral-600"
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
