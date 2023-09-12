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

export default function Paper() {
  const root = document.createElement("div");
  root.classList.add("paper");
  root.setContent = (path) => {
    fetch(path)
      .then((response) => response.text())
      .then((text) => {
        new Viewer({
          target: root,
          props: {
            value: text,
            plugins: [breaks(), frontmatter(), gemoji(), gfm(), highlight(), math(), mermaid()],
          },
        });
      })
      .catch((err) => console.log("Request Failed", err));
  };
  return root;
}
