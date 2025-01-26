import config from "@/services/config";
import { fetchPaginatedData } from "@/services/fetch";

export default async function StarShips() {
  //await new Promise((resolve) => setTimeout(resolve, 15000)); //loading test

  const apiUrl = config.apiUrl;
  const url = `${apiUrl}/planets/`;
  const data = await fetchPaginatedData(url);
  data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex flex-wrap gap-5">
      {data.map((item, index) => {
        return (
          <div key={index} className="text-white">
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
