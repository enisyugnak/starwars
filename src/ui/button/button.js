import Link from "next/link";

export default function SelfButton({ children, ...props }) {
  const { onClick, endpoint } = props;
  const dynamicStyle = props.className || "";
  const style = `${dynamicStyle} block py-2 px-4 mb-4 text-neutral-400 bg-gray-800/50 border rounded-md border-slate-700/50 cursor-pointer text-base max-w-fit transition hover:bg-lime-500/10 hover:scale-105 hover:text-white duration-300`;

  const Tag = onClick ? "button" : Link;

  return (
    <Tag
      {...props}
      className={style}
      onClick={onClick ? () => onClick(endpoint) : undefined}
      href={!onClick ? endpoint : undefined}
    >
      {children}
    </Tag>
  );
}
