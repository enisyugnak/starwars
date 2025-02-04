import config from "@/services/config";
import PlayGroundView from "./view";
import { fetchPaginatedData } from "@/services/fetch";

const PlayGround = async () => {
  //const url = `${config.apiUrl}/species/`;
  //const data = await fetchPaginatedData(url);

  return <PlayGroundView />;
};

export default PlayGround;
