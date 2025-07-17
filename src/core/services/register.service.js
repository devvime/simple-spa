import { apiURL } from "../../config/api";
import { http } from "blots";

export async function registerService(data) {
  http.url = apiURL;
  return await http.post("/user/register", data);
}
