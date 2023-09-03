/**
 * @author unkwninfo
 * @todo css
 */

import "./nav.css";

export default class Nav {
  /**
   * @param {Object[]} items
   * @param {string} items[].name
   * @param {string} items[].url
   */
  constructor(items) {
    this.root = document.createElement("div");
    this.items = items;
  }
  init() {
    this.root.classList.add("nav");
    let temp = `<ul>${this.items.reduce(cb, "")}</ul>`;
    this.root.innerHTML = temp;
  }
}

function cb(previousValue, currentValue, currentIndex, array) {
  // console.log(previousValue);
  // console.log(currentValue);
  return `${previousValue}<li><a href="${currentValue.url}">${currentValue.name}</a></li>`;
}
