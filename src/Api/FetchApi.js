import ApiKey from "../ApiKey";
import ApiDataCreator from "./ApiCreator";
const { REACT_APP_YT_API_KEY, REACT_APP_VIMEO_CLIENT_ID } = ApiKey();
const { VimeoCreator, YoutubeCreator } = ApiDataCreator();

const fetchUrlId = (url) => {
  if (url === "") return;

  try {
    const urlObject = new URL(url);
    let urlOrigin = urlObject.origin;
    let urlPath = urlObject.pathname;

    if (urlOrigin.search("youtu.be") > -1) return urlPath.substr(1);
    if (urlPath.search("embed") > -1) return urlPath.substr(7);

    if (urlObject.searchParams.get("v") === null) {
      return url.split("/").slice(-1)[0].split("?")[0];
    }
    return urlObject.searchParams.get("v");
  } catch (err) {
    throw err;
  }
};

const fetchVimeoApi = async (id) => {
  const checkId = /^\d+$/.test(id);
  if (checkId === false) return;
  const token = REACT_APP_VIMEO_CLIENT_ID;
  const movies = `https://api.vimeo.com/videos/${id}`;
  const urlObject = new URL(movies);
  urlObject.searchParams.set("part", "snippet,statistics,player");
  urlObject.searchParams.set("key", token);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const resp = await fetch(urlObject.href, config).then((res) => res.json());

  const likes = await fetch(
    `https://api.vimeo.com/videos/${id}/likes?fields=total`,
    config
  ).then((res) => res.json());

  if (!resp.error) {
    return VimeoCreator(resp, likes, id);
  }
};

const fetchYoutubeApi = async (ID) => {
  const checkID = /^\d+$/.test(ID);
  if (checkID === true) return;
  const movies = "https://youtube.googleapis.com/youtube/v3/videos";
  const token = REACT_APP_YT_API_KEY;

  const urlObject = new URL(movies);
  urlObject.searchParams.set("part", "snippet,statistics,player");
  urlObject.searchParams.set("id", ID);
  urlObject.searchParams.set("key", token);

  const resp = await fetch(urlObject.href).then((res) => res.json());

  return YoutubeCreator(resp);
};

const FetchApi = async (url) => {
  const id = fetchUrlId(url);

  const result = [];
  const Promises = [fetchVimeoApi(id), fetchYoutubeApi(id)];

  for (let i in Promises) {
    const value = await Promises[i];
    if (value) result.push(value);
  }

  return result;
};

export default FetchApi;
