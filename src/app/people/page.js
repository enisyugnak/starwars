import { fetcUrl } from "@/services/fetch";
import PeopleView from "./view";
import config from "@/services/config";

const People = async () => {
  const apiUrl = config.apiUrl;
  const data = await fetcUrl(`${apiUrl}/people`);

  return <PeopleView data={data} />;
};

export default People;
