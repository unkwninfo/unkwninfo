/**
 * @author unkwninfo
 * @todo css
 */

import "./nav.css";

/**
 * @param {Object[]} items
 * @param {string} items[].name
 * @param {string} items[].url
 */
export default function Nav() {
  const root = document.createElement("div");
  root.classList.add("nav");
  root.setItems = (items) => {
    root.innerHTML = `<ul>${items.reduce(cb, "")}</ul>`;
    return root;
  };
  return root;
}

function cb(previousValue, currentValue, currentIndex, array) {
  // console.log(previousValue);
  // console.log(currentValue);
  return `${previousValue}<li><a href="${currentValue.url}">${currentValue.name}</a></li>`;
}
