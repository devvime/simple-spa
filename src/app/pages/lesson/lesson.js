import { render, include } from "../../helpers/render";

import lessonElement from "./lesson.html?raw";
import "./lesson.scss";

import headerElement from "../../components/header/header.html?raw";
import footerElement from "../../components/footer/footer.html?raw";

export function lesson(ctx, next) {
  render("#app", lessonElement);
  include("header-element", headerElement);
  include("footer-element", footerElement);
}
