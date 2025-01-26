import Image from "next/image";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { LiaRobotSolid } from "react-icons/lia";
import { TbGenderHermaphrodite } from "react-icons/tb";

export default function ResidentsRow({ people }) {
  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-white">Residents</h2>
      <div className="flex flex-col">
        {people &&
          people.map((item, index) => {
            const itemId = item.url.split("/").filter(Boolean).pop();
            const imageSrc = `/people/${itemId}.jpg`;
            return <PersonRow key={index} item={item} image={imageSrc} />;
          })}
      </div>
    </div>
  );
}

export function PersonRow({ item, image }) {
  const iconClass = "w-10 h-10 fill-slate-800/70";

  function getGender(gender) {
    if (gender == "n/a") return <LiaRobotSolid className={iconClass} />;
    if (gender == "male") return <IoMaleSharp className={iconClass} />;
    if (gender == "hermaphrodite")
      return <TbGenderHermaphrodite className={iconClass} />;

    if (gender == "female") return <IoFemaleSharp className={iconClass} />;
  }
  return (
    <div className="flex items-center gap-5 border-t border-slate-800/70 py-3 last:border-b">
      <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-slate-800/70">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt=""
            width={60}
            height={60}
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="break-words text-lg font-extrabold text-white">
          {item.name}
        </div>
        <p className="text-sm text-neutral-400">{`Birth Year: ${item.birth_year}`}</p>
      </div>
      <div className="ml-auto">{getGender(item.gender)}</div>
    </div>
  );
}
