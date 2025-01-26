export default function MovieSlider({ list }) {
  return (
    <div className="p-24 flex flex-wrap items-center justify-center">
      <div className="grid grid-cols-6 gap-2">
        {list &&
          list.map((item) => {
            return (
              <div className="flex flex-col gap-1">
                <div className="p-3 rounded bg-slate-800">
                  <img
                    src={`../movies/${item.image}`}
                    alt=""
                    className="object-fill rounded"
                    loading="lazy"
                  />
                  <div class="relative text-white px-6 pb-6 mt-6">
                    <div class="flex justify-between">
                      <span class="block font-semibold text-xl">
                        {item.title}
                      </span>
                    </div>
                    <span class="block opacity-75 -mb-1">
                      {item.release_date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
