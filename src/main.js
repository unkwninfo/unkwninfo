/**
 * @author unkwninfo
 * @todo router render
 */

import "./main.css";
import Nav from "./nav";
import Background from "./background";

const nav = new Nav([
  { name: "home", url: "#home" },
  { name: "archive", url: "#archive" },
  { name: "about", url: "#about" },
]);

const bg = new Background();

document.body.append(nav.root, bg.root);
window.addEventListener("load", () => {
  nav.init();
  bg.init();
});
window.addEventListener("resize", () => {
  bg.init();
});
