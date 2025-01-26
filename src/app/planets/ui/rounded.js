export default function RoundedBlock({ children, ...props }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm  text-neutral-400 mb-2">{props.title}</p>
      <span className="w-16 h-16 border-4 border-slate-800/70 rounded-full p-3 flex items-center justify-center">
        {children}
      </span>
    </div>
  );
}
