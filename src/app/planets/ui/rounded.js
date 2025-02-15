export default function RoundedBlock({ children, className, ...props }) {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-2 text-sm text-neutral-400">{props?.title}</p>
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-800/70 p-3">
        {children}
      </span>
    </div>
  );
}
