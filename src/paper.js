/**
 * @author unkwninfo
 * @todo markdown Editor Viewer
 */

import { Viewer } from "bytemd";
import breaks from "@bytemd/plugin-breaks";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import math from "@bytemd/plugin-math";
import mermaid from "@bytemd/plugin-mermaid";

import "./paper.css";
// import "highlight.js/styles/default.css";
// import "katex/dist/katex.css";

export default class Paper {
  constructor() {
    this.root = document.createElement("div");
  }
  init() {
    this.root.classList.add("paper");
    fetch("/test.md")
      .then((response) => response.text())
      .then((text) => {
        new Viewer({
          target: this.root,
          props: {
            value: text,
            plugins: [breaks(), frontmatter(), gemoji(), gfm(), highlight(), math(), mermaid()],
          },
        });
      })
      .catch((err) => console.log("Request Failed", err));
  }
}
