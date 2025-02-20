import SelfButton from "@/ui/button/button";

export default function PlaygroundLayout({ children }) {
  return (
    <div className="w-full">
      <div className="flex gap-3">
        <SelfButton endpoint="/playground/hooks">Hooks</SelfButton>
        <SelfButton endpoint="/playground/images">Images</SelfButton>
        <SelfButton endpoint="/playground/contact">Contact</SelfButton>
      </div>
      <div>{children}</div>
    </div>
  );
}
