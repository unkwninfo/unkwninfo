/**
 * @author unkwninfo
 * @todo markdown css config
 */

import "./paper.css";
import MarkdownIt from "markdown-it";

export default class Paper {
  constructor() {
    this.root = document.createElement("div");
    this.md = new MarkdownIt();
  }
  init() {
    this.root.classList.add("paper");
    this.root.classList.add("retro");
    fetch("/test.md")
      .then((response) => response.text())
      .then((text) => {
        this.root.innerHTML = this.md.render(text);
      })
      .catch((err) => console.log("Request Failed", err));
  }
}
