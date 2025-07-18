import { apiURL } from "@config/api";
import { http } from "blots";
import Storage from "@core/helpers/storage";

export async function sessionService() {
  const user = Storage.get("user");
  http.url = apiURL;
  return await http.get("/session/verify", {
    Authorization: `Bearer ${user.token}`,
  });
}
