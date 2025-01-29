import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { LiaRobotSolid } from "react-icons/lia";
import { TbGenderHermaphrodite } from "react-icons/tb";

export function getGender(gender) {
  const iconClass = "w-10 h-10 fill-slate-800/70";
  if (gender == "n/a") return <LiaRobotSolid className={iconClass} />;
  if (gender == "male") return <IoMaleSharp className={iconClass} />;
  if (gender == "hermaphrodite")
    return <TbGenderHermaphrodite className={iconClass} />;

  if (gender == "female") return <IoFemaleSharp className={iconClass} />;
}
