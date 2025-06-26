import { render, include } from "@app/helpers/render";
import { state } from "@/core/state";

import introElement from "./intro.html?raw";
import headerElement from "@app/components/header/header.html?raw";
import footerElement from "@app/components/footer/footer.html?raw";
import "./intro.scss";

const data = state(
  {
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
  },
  intro
);

export function intro(ctx, next) {
  render("#app", introElement, data);
  include("header-element", headerElement);
  include("footer-element", footerElement);
  addLesson();
}

function addLesson() {
  document.querySelector("[add-lesson").addEventListener("click", () => {
    data.lessons = [
      ...data.lessons,
      {
        title: "New Lesson",
      },
    ];
  });
}
