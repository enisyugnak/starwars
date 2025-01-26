export default function InfoRow({ children, ...props }) {
  return (
    <div className={props.styleName}>
      <span className="text-sm text-neutral-400">{props.title}</span>
      <p className="text-xs font-extrabold text-sky-500 uppercase">
        {children}
      </p>
    </div>
  );
}
