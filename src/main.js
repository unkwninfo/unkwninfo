/**
 * @author unkwninfo
 * @todo router render
 */

import "./main.css";
import Nav from "./nav";
import Background from "./background";
import Paper from "./paper";

const nav = new Nav([
  { name: "home", url: "#home" },
  { name: "archive", url: "#archive" },
  { name: "about", url: "#about" },
]);

const bg = new Background();
const paper = new Paper();

document.body.append(nav.root, bg.root, paper.root);
window.addEventListener("load", () => {
  nav.init();
  bg.init();
  paper.init();
});
window.addEventListener("resize", () => {
  bg.init();
});
