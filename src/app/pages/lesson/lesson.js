import { render, include } from "@app/helpers/render";

import lessonElement from "./lesson.html?raw";
import headerElement from "@app/components/header/header.html?raw";
import footerElement from "@app/components/footer/footer.html?raw";
import "./lesson.scss";

export function lesson(ctx, next) {
  render("#app", lessonElement);
  include("header-element", headerElement);
  include("footer-element", footerElement);
}
