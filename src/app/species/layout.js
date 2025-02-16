import config from "@/services/config";
import { fetchPaginatedData } from "@/services/fetch";
import List from "./list";
import SectionHeader from "@/ui/section-header";

export default async function Layout({ children }) {
  const apiUrl = config.apiUrl;
  const data = await fetchPaginatedData(`${apiUrl}/species`);

  return (
    <div className="grid-cols grid w-full md:grid-cols-8 lg:grid-cols-8">
      {/** Left List of Species*/}
      <div className="flex flex-col md:col-span-3 lg:col-span-2">
        <SectionHeader>Species</SectionHeader>
        <div
          id="species-list-container"
          className="h-[190px] min-h-[80px] w-full overflow-y-auto md:h-[calc(100vh-250px)] md:pr-3"
        >
          <List data={data} />
        </div>
      </div>

      {/** Right */}
      <div className="w-full md:col-span-5 lg:col-span-6">
        <div className="pl-4">{children}</div>
      </div>
    </div>
  );

  //   return (
  //     <div className="flex h-[calc(100vh-160px)]">
  //       <div className="bg-100 w-1/3 min-w-16 overflow-y-auto pr-3">
  //         <div className="">
  //           <List data={data} />
  //         </div>
  //       </div>

  //       <div className="flex-1 border border-violet-800 p-4">
  //         <div className="relative h-full w-full p-4">{children}</div>
  //       </div>
  //     </div>
  //   );
}
