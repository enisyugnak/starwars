import Link from "next/link";
import config from "@/services/config";
function NavSection() {
  // remove the playground menu item. (to be deleted);
  const menu = config.menu.slice(0, -1);
  return (
    <section className="relative grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {menu.map((item, index) => {
        return (
          <Item key={index} Icon={item.icon} link={item.link}>
            {item.title}
          </Item>
        );
      })}
    </section>
  );
}
export function Item({ children, ...props }) {
  const { Icon, link } = props;
  return (
    <Link className="w-full cursor-pointer" href={link}>
      <div className="cursor-pointer rounded-md border border-slate-700/50 bg-gray-800/50 px-4 py-5 text-base text-neutral-400 transition duration-300 hover:scale-105 hover:bg-lime-500/10 hover:text-white">
        <div className="flex flex-col items-center gap-1">
          <Icon className="size-9" />
          <div className="">{children}</div>
        </div>
      </div>
    </Link>
  );
}
export default NavSection;
