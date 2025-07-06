import mustache from "mustache";
import { createElement } from "@core/template";
import {
  click,
  change,
  model,
  condition,
  handleClass,
  refs,
} from "@core/directives";
import { RouterInstance } from "./helper";

export function render(target, file, data = {}, DOMRefresh = true) {
  if (DOMRefresh) {
    document.querySelector("app").innerHTML = "";
  }

  const rendered = mustache.render(file, data);
  const element = createElement(rendered);

  click(element, data);
  change(element, data);
  model(element, data);
  condition(element, data);
  handleClass(element, data);
  refs(element, data);

  document.querySelector(target).append(element);

  RouterInstance.get().setDataLink();
}

export function include(target, file, data = {}) {
  render(target, file, data, false);
}
