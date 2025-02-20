export default function ColorSpecies(props) {
  const { colors } = props;
  const colorStyles = {
    asian: "bg-red-200",
    hispanic: "bg-[#BFA685]",
    asian: "bg-orange-100",
    amber: "bg-[#F6BA01]",
    black: "bg-black",
    blue: "bg-blue-500",
    blonde: "bg-[#F7E5AF]",
    blond: "bg-[#F7E5AF]",
    brown: "bg-yellow-900",
    caucasian: "bg-[#C7A48C]",
    dark: "bg-yellow-950",
    gray: "bg-zinc-500",
    golden: "bg-yellow-500",
    green: "bg-green-500",
    grey: "bg-neutral-300",
    hazel: "bg-[#C7A974]",
    hispanic: "bg-stone-500",
    indigo: "bg-purple-950",
    magenta: "bg-pink-500",
    orange: "bg-orange-500",
    pale: "bg-orange-100",
    "pale pink": "bg-pink-100",
    peach: "bg-red-300",
    pink: "bg-pink-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    silver: "bg-neutral-300",
    tan: "bg-[#CCAE87]",
    white: "bg-white",
    yellow: "bg-yellow-500",
    "n/a":
      "bg-[repeating-linear-gradient(135deg,theme(colors.slate.600)_0px,theme(colors.slate.600)_10px,theme(colors.slate.900)_10px,theme(colors.slate.900)_20px)]",
  };

  const colorsArray = colors.split(", ").map((item, index) => {
    return (
      <div key={index} className="grid grid-cols-7 items-center py-1">
        <div className="col-span-2">{item}</div>
        <div
          className={`${colorStyles[item]} cols-span-5 mt-1 h-3 w-32 border border-slate-600/50`}
        ></div>
      </div>
    );
  });

  return <div className="flex flex-col">{colorsArray}</div>;
}

export const ColorView = ({ colorStyles }) => {
  return (
    <div className="flex w-full flex-col">
      {Object.entries(colorStyles).map(([key, color], index) => (
        <div key={index} className="flex flex-col">
          <div className="">{key}</div>
          <div className={`w-full border-2 border-slate-800 ${color}`}></div>
        </div>
      ))}
    </div>
  );
};
