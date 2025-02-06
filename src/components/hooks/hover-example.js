import useHover from "@/hooks/hover";

const HoverExample = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="p-5"
      style={{
        backgroundColor: isHovered ? "lightblue" : "white",
      }}
    >
      {isHovered ? "Hovering!" : "Not Hovering"}
    </div>
  );
};

export default HoverExample;
