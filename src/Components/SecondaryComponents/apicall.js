import { RAWG_API_KEY } from "../../Utils/Constants";
import { updategames } from "../../ReduxComponents/gameSlice";

const apicall = async (dispatch) => {
  console.log("api call");
  const data = await fetch(
    `https://api.rawg.io/api/games?token&key=${RAWG_API_KEY}`
  );
  const json = await data.json();
  dispatch(updategames(json.results));
};

export default apicall;
