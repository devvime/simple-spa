import { render, include } from "@core/render";
import { state } from "@/core/state";

import introElement from "./intro.html?raw";
import headerElement from "@components/header/header.html?raw";
import footerElement from "@components/footer/footer.html?raw";
import "./intro.scss";

const data = state(
  {
    refs: {},
    title: "Hello from Intro",
    lessons: [
      {
        id: 1,
        title: "Lesson 01",
        categories: [],
      },
      {
        id: 2,
        title: "Lesson 02",
        categories: [],
      },
      {
        id: 3,
        title: "Lesson 03",
        categories: [
          {
            name: "aaaaa",
          },
          {
            name: "bbbbbb",
          },
        ],
      },
    ],
    displayCondition: false,
    activeClass: true,
    testClick(e) {
      console.log(e);
      data.displayCondition = !data.displayCondition;
      data.activeClass = !data.activeClass;
      console.log(data.refs.btnAddLesson);
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

export function intro(params, query) {
  render("app", introElement, data);
  include("header-element", headerElement);
  include("footer-element", footerElement);
}
