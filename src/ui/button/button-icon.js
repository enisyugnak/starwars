import { FaReact } from "react-icons/fa6";
import {
  RiNextjsLine,
  RiSupabaseLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiFirebase, SiGoogleappsscript, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";

export default function IconButton({ icon, link = "", tooltip = "" }) {
  const Icons = {
    react: FaReact,
    next: RiNextjsLine,
    tailwind: RiTailwindCssFill,
    firebase: SiFirebase,
    supabase: RiSupabaseLine,
    js: IoLogoJavascript,
    ts: BiLogoTypescript,
    gas: SiGoogleappsscript,
    pos: SiPostgresql,
  };
  const IconTag = Icons[icon];
  return (
    // <div className="text-neutral-400">
    //   <IconTag className="size-10" />
    // </div>

    <div className="group relative inline-block">
      <IconTag className="duration-600 size-10 cursor-pointer transition group-hover:text-sky-400" />
      {tooltip && (
        <div className="absolute bottom-full left-1/2 mb-4 inline-block -translate-x-10 -translate-y-1/2 transform whitespace-nowrap rounded-md border border-slate-700/50 bg-slate-900 px-4 py-2 text-sm text-neutral-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {tooltip}
        </div>
      )}
    </div>
  );
}
