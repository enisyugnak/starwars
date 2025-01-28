import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavDesktop({ items }) {
  const pathname = usePathname();
  const navLinkClass = "text-neutral-400 hover:text-white";
  const activeNavClass = "text-white pointer-events-none select-none";

  return (
    <div className="flex">
      <div className="flex items-start gap-3">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="group w-full"
              aria-disabled={pathname.startsWith(item.link)}
            >
              <Link
                href={item.link}
                // className="border border-b-2 border-sky-500"
                className={`text-base font-medium transition duration-300 ${
                  pathname.startsWith(item.link) ? activeNavClass : navLinkClass
                }`}
              >
                {item.title}
              </Link>
              <div className="scale-0 border-b-2 border-b-sky-500 transition duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 group-aria-disabled:translate-y-7 group-aria-disabled:scale-100 group-aria-disabled:opacity-100"></div>
            </div>
          );
        })}
      </div>
      {/* group-hover:translate-y-1 group-hover:opacity-100  */}
    </div>
  );
}
