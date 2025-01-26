import config from "@/services/config";
import PeopleList from "./list";

export default async function Layout({ children }) {
  const apiUrl = config.apiUrl;
  const response = await fetch(`${apiUrl}/people`);
  const data = await response.json();

  return (
    <div className="flex h-screen">
      <div className="bg-100 w-1/3 overflow-y-auto p-4">
        <div className="space-y-2 border border-violet-800">
          <PeopleList data={data} />
        </div>
      </div>

      <div className="bg-50 flex-1 border border-violet-800 p-4">
        <div className="h-full p-4">{children}</div>
      </div>
    </div>
  );
}
