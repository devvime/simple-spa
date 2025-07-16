import { render, state } from "blots";
import element from "./register.html?raw";

const data = state(
  {
    refs: {},
    title: "Register",
  },
  register
);

export function register(params, query) {
  render("app", element, data);
}
