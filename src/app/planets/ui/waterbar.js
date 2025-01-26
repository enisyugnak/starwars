export default function WaterBar({ percent }) {
  const noWater = isNaN(percent);
  const water = noWater ? "(n/a)" : `${percent}%`;
  const waterPercent = noWater ? 0 : `${percent}%`;
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-neutral-400">Surface Water: {water}</h2>
      <div className={`w-full h-4 rounded bg-slate-800/70`}>
        <div
          className="h-full rounded bg-sky-500"
          style={{ width: `${waterPercent}` }}
        ></div>
      </div>
    </div>
  );
}
