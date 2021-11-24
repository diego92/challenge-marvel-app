import md5 from "md5";
import { API_KEY, PRIVATE_KEY } from "../utils/globals";

export const credentials = () => {
  const apikey = API_KEY;
  const privatekey = PRIVATE_KEY;
  const ts = new Date().getTime();
  const stringToHash = ts + privatekey + apikey;
  const hash = md5(stringToHash);

  const params = {
    ts,
    hash,
  };

  return params;
};
