import mustache from "mustache";
import { createElement } from "@core/template";
import { click, change, model, condition, handleClass } from "@core/directives";
import { refs } from "./directives";

export function render(target, file, data = {}, DOMRefresh = true) {
  if (DOMRefresh) {
    document.querySelector("#app").innerHTML = "";
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
}

export function include(target, file, data = {}) {
  render(target, file, data, false);
}
