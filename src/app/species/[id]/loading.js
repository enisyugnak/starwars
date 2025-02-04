import PreloaderSpinner from "@/ui/preloader-spinner";
export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <PreloaderSpinner />
    </div>
  );
}
