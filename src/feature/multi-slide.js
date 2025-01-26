export default function MultiSlide() {
  return (
    <div
      id="multi-slide"
      data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "lg": 3 } }'
      className="relative w-full"
    >
      <div className="carousel h-80">
        <div className="carousel-body  h-full">
          <div className="carousel-slide">
            <div className="bg-base-200/50 flex h-full justify-center p-6">
              <span className="self-center text-lg">First slide</span>
            </div>
          </div>

          <div className="carousel-slide">
            <div className="bg-base-200 flex h-full justify-center p-6">
              <span className="self-center text-lg">Second slide</span>
            </div>
          </div>

          <div className="carousel-slide">
            <div className="bg-base-300 flex h-full justify-center p-6">
              <span className="self-center text-lg">Third slide</span>
            </div>
          </div>

          <div className="carousel-slide">
            <div className="bg-base-200/50 flex h-full justify-center p-6">
              <span className="self-center text-lg">Fourth slide</span>
            </div>
          </div>

          <div className="carousel-slide">
            <div className="bg-base-200 flex h-full justify-center p-6">
              <span className="self-center text-lg">Fifth slide</span>
            </div>
          </div>

          <div className="carousel-slide">
            <div className="bg-base-300 flex h-full justify-center p-6">
              <span className="self-center text-lg">Sixth slide</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="carousel-prev"
      >
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        className="carousel-next"
      >
        <span className="sr-only">Next</span>
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </button>
    </div>
  );
}
