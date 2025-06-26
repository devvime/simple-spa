import mustache from "mustache";
import { createElement } from "@app/helpers/template";

export function render(target, file, data = {}, DOMRefresh = true) {
  if (DOMRefresh) {
    document.querySelector("#app").innerHTML = "";
  }

  const rendered = mustache.render(file, data);
  const element = createElement(rendered);

  click(element, data);
  change(element, data);

  document.querySelector(target).append(element);
}

export function include(target, file, data = {}) {
  render(target, file, data, false);
}

function click(element, data) {
  const elements = element.querySelectorAll("[\\@click]");
  for (let element of elements) {
    const attr = element.attributes["@click"].value.replace(")", "").split("(");
    element.addEventListener("click", (e) => {
      try {
        data[attr[0]](attr[1]);
      } catch (err) {
        console.warn(`Method: ${attr[0]} is not implemented.`);
      }
    });
  }
}

function change(element, data) {
  const elements = element.querySelectorAll("[\\@change]");
  for (let element of elements) {
    const attr = element.attributes["@change"].value
      .replace(")", "")
      .split("(");
    element.addEventListener("change", (e) => {
      try {
        data[attr[0]](e, attr[1]);
      } catch (err) {
        console.warn(`Method: ${attr[0]} is not implemented.`);
      }
    });
  }
}
