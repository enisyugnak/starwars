import ArrowButton from "./nav-button";

//** Arrow Navigation */
export default function ArrowNavigation({ prevSlide, nextSlide }) {
  return (
    <div className="absolute top-1/2 flex w-full -translate-y-1/2 cursor-pointer justify-between p-3 px-5 align-middle">
      <ArrowButton side={"left"} onClick={prevSlide} />
      <ArrowButton side={"right"} onClick={nextSlide} />
    </div>
  );
}
