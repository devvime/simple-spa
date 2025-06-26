import { render, include } from "../../helpers/render";

import introElement from "./intro.html?raw";
import "./intro.scss";

import headerElement from "../../components/header/header.html?raw";
import footerElement from "../../components/footer/footer.html?raw";

const data = {
  title: "Hello from Intro",
  lessons: [
    {
      title: "Lesson 01",
    },
    {
      title: "Lesson 02",
    },
    {
      title: "Lesson 03",
    },
  ],
};

export function intro(ctx, next) {
  render("#app", introElement, data);
  include("header-element", headerElement);
  include("footer-element", footerElement);
}
