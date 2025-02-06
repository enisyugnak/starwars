import useLocalStorage from "@/hooks/local-storage";
import Button from "./button";

export default function LocalStorageExample() {
  const [page, setPage, resetPage] = useLocalStorage("page", null);

  function itemClicked(act) {
    switch (act) {
      case "set":
        setPage("playground");
        break;
      case "read":
        console.log("view: read", page);
        break;
      case "remove":
        resetPage();
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Button onClick={() => itemClicked("set")}>Set Variable</Button>
      {/* <button className={btnClass} onClick={() => itemClicked("read")}>
        Read Variable
      </button> */}
      <div className="border border-slate-800 p-3 text-center">
        {page ? page : "no variable"}
      </div>
      <Button onClick={() => itemClicked("remove")}>Remove Variable</Button>
    </div>
  );
}
