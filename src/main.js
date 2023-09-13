/**
 * @author unkwninfo
 * @todo layout
 */

import { render, Router } from "./hub";
// import Background from "./background";
import Nav from "./nav";
import List from "./list";
import Paper from "./paper";

import "./main.css";

// layout
const body = document.body;
const header = document.createElement("div");
const main = document.createElement("div");
header.classList.add("header");
main.classList.add("main");
body.append(header, main);

render(Nav, header).setItems([
  { name: "home", url: "#home" },
  { name: "archives", url: "#archives" },
  { name: "about", url: "#about" },
]);

const router = new Router();
router.init();
router.add("", () => {
  router.navigate("home");
});
router.add("home", () => {
  main.innerHTML = `<p class="heading">Less to More</p><p class="heading">home</p>`;
});
router.add("archives", () => {
  render(List, main).setItems([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
router.add("about", () => {
  render(Paper, main).setContent("/md/about.md");
});
