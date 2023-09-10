/**
 * @author unkwninfo
 * @todo hash history
 */

export default class Router {
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
