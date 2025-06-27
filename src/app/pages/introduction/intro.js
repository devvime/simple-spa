import { render, include } from "@core/render";
import { state } from "@/core/state";

import introElement from "./intro.html?raw";
import headerElement from "@components/header/header.html?raw";
import footerElement from "@components/footer/footer.html?raw";
import "./intro.scss";

const data = state(
  {
    title: "Hello from Intro",
    lessons: [
      {
        id: 1,
        title: "Lesson 01",
      },
      {
        id: 2,
        title: "Lesson 02",
      },
      {
        id: 3,
        title: "Lesson 03",
      },
    ],
    displayCondition: false,
    activeClass: true,
    testClick(e) {
      console.log(e);
      data.displayCondition = !data.displayCondition;
      data.activeClass = !data.activeClass;
    },
    inputChange(e) {
      data.title = e.target.value;
    },
    addLesson() {
      data.lessons = [
        ...data.lessons,
        {
          title: "New Lesson",
        },
      ];
    },
  },
  intro
);

export function intro(ctx, next) {
  render("#app", introElement, data);
  include("header-element", headerElement);
  include("footer-element", footerElement);
}
