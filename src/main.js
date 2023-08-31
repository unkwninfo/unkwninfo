/**
 * @author unkwninfo
 * @todo router render
 */

import Nav from "./nav.js";

const style = document.createElement("style");
style.innerHTML = `
html,
body {
  height: 100%;
  font-size: 12px;
}
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, Helvetica, Arial,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei UI, Microsoft YaHei, Source Han Sans CN, sans-serif;
  background-image: url(https://s1.ax1x.com/2020/04/27/JffXWR.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #2333;
}
p {
  margin: 0;
  font-size: 10rem;
  line-height: 100vh;
  text-align: center;
  color: #00bcdbcd;
}`;

const nav = new Nav([
  { name: "home", url: "#home" },
  { name: "archive", url: "#archive" },
  { name: "about", url: "#about" },
]);
// console.table(nav.items);
// console.dirxml(nav.html());

document.body.append(style, nav.html());
