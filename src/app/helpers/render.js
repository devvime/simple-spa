import mustache from "mustache";

export function render(target, file, data = {}, DOMRefresh = true) {
  if (DOMRefresh) {
    document.querySelector("#app").innerHTML = "";
  }

  const rendered = mustache.render(file, data);

  document.querySelector(target).innerHTML = rendered;
}

export function include(target, file, data = {}) {
  render(target, file, data, false);
}
