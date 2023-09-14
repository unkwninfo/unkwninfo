/**
 * @author unkwninfo
 * @todo layout
 */

import { render, Router } from "./hub";
// import Background from "./background";
import Nav from "./nav";
import List from "./list";
import Card from "./card";
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
  rss2Cards("/rss.xml");
});
router.add("about", () => {
  render(Paper, main).setContent("/md/about.md");
});

function rss2Cards(path) {
  const cards = [];
  fetch(path)
    .then((response) => response.text())
    .then((text) => {
      const rss = new DOMParser().parseFromString(text, "text/xml");
      for (const item of rss.querySelectorAll("item")) {
        const content = `<p class="card-title"><a href="${item.querySelector("link").textContent}">${
          item.querySelector("title").textContent
        }</a></p>
        <p>${item.querySelector("creator").textContent}</p>
        <p>${item.querySelector("pubDate").textContent}</p>
        <p>${item.querySelector("guid").textContent}</p><hr>
        <div>${item.querySelector("description").textContent}</div>`;
        console.log(content);
        cards.push(Card().setContent(content));
      }
      render(List, main).setItems(cards);
    })
    .catch((err) => console.log("Request Failed", err));
}
