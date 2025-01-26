export default function DaisyCollapse() {
  return (
    <div className="collapse collapse-arrow border-base-300 bg-base-200 border">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Click me to show/hide content
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
}
