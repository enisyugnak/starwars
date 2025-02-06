export default function Button({ children, onClick }) {
  return (
    <button
      className="rounded-md border border-slate-800 p-3 text-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
