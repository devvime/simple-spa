import { include, render, state } from "blots";
import element from "./menu.html?raw";

import storage from "@core/helpers/storage";
import { navigate } from "@core/helpers/navigate";

const data = state(
  {
    refs: {},
    title: "Menu",
    logout() {
      storage.remove("user");
      navigate("/");
    },
  },
  menu
);

export function menu() {
  include("main-menu", element, data);
}
