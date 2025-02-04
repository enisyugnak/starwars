import PreloaderSpinner from "../preloader-spinner";

export default function ImagePreloader({ children, className = "" }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`${className} relative`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700/60">
          <PreloaderSpinner />
        </div>
      )}
      {children}
    </div>
  );
}
