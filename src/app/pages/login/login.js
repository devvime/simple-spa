import { render, state } from "blots";
import element from "./login.html?raw";

const data = state(
  {
    refs: {},
    title: "Login",
    isLogin: false,
    email: "",
    password: "",
    handleLogin() {
      data.isLogin = true;
    },
  },
  login
);

export function login(params, query) {
  render("app", element, data);
}
