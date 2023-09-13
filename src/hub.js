/**
 * @author unkwninfo
 */

/**
 * @param {Function} Component - () => HTMLElement
 * @param {HTMLElement} container - HTMLElement
 * @todo Document | Node | Element | ShadowRoot | DocumentFragment
 */
export function render(Component, container = null) {
  if (!container) {
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.append(container);
  }
  container.innerHTML = "";
  const root = Component();
  container.append(root);
  return root;
}

/**
 * @todo hash history
 */
export class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = "";
  }
  add(path, callback) {
    this.routes[path] = callback;
  }
  refresh() {
    this.currentRoute = location.hash.replace(/^#*/, "");
    this.routes.hasOwnProperty(this.currentRoute)
      ? this.routes[this.currentRoute]()
      : console.log("不存在", this.currentRoute);
  }
  init() {
    window.addEventListener("load", this.refresh.bind(this), false);
    window.addEventListener("hashchange", this.refresh.bind(this), false);
  }
  navigate(path) {
    path = path ? path : "";
    location.href = location.href.replace(/#(.*)$/, "") + "#" + path;
  }
}
