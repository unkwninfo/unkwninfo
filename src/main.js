/**
 * @author unkwninfo
 * @todo layout
 */

import Router from "./router";
import Background from "./background";
import Nav from "./nav";
import Paper from "./paper";

import "./main.css";

// layout
const body = document.body;
const top = document.createElement("div");
const bottom = document.createElement("div");
top.classList.add("top");
bottom.classList.add("bottom");
body.append(top, bottom);

const router = new Router();
router.init();
router.add("", () => {
  router.navigate("home");
});
router.add("home", () => {
  bottom.innerHTML = `<p class="heading">Less to More</p><p class="heading">home</p>`;
});
router.add("archive", () => {
  bottom.innerHTML = `<p class="heading">Less to More</p><p class="heading">archive</p>`;
});
router.add("about", () => {
  bottom.innerHTML = "";
  const paper = new Paper();
  bottom.append(paper.root);
  paper.init();
});

const bg = new Background();
// body.append(bg.root);
// bg.init();

const nav = new Nav([
  { name: "home", url: "#home" },
  { name: "archive", url: "#archive" },
  { name: "about", url: "#about" },
]);
top.append(nav.root);
nav.init();
