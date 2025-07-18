import { render, state } from "blots";
import element from "./dashboard.html?raw";
import { sessionMiddleware } from "@core/middlewares/session.middleware";
import { menu } from "@components/menu/menu";

const data = state(
  {
    refs: {},
    title: "Dashboard",
  },
  dashboard
);

export async function dashboard(params, query) {
  const session = await sessionMiddleware();
  if (!session) return;
  render("app", element, data);
  menu();
}
