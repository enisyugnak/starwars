import { fetchPaginatedData } from "@/services/fetch";
import PeopleView from "./view";
import config from "@/services/config";

const People = async () => {
  const url = `${config.apiUrl}/people`;
  const data = await fetchPaginatedData(url);

  return <PeopleView data={data} />;
};

export default People;
