import { apiURL } from "@config/api";
import { http } from "blots";

export async function loginService(data) {
  http.url = apiURL;
  return await http.post("/session", data);
}
