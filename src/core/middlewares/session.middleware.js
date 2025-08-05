import { sessionService } from "../services/session.service";

export async function sessionMiddleware() {
  let result = false;
  await sessionService()
    .then((res) => {
      if (res.success) {
        result = true;
      } else {
        result = false;
      }
    })
    .catch((err) => {
      result = false;
    });
  if (!result) {
    location.href = "/";
  }
  return result;
}
