export default function Movie({ image }) {
  return (
    <div className="flex flex-col gap-1">
      <img
        src={image}
        alt=""
        className=""
        loading="lazy"
      />
    </div>
  );
}
