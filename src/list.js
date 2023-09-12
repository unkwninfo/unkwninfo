/**
 * @author unkwninfo
 * @todo css
 */

import "./list.css";

/**
 * @param {Object[]} items
 */
export default function List() {
  const root = document.createElement("div");
  root.classList.add("list");
  root.setItems = (items) => {
    root.innerHTML = `<ul>${items.reduce(cb, "")}</ul>`;
  };
  return root;
}

function cb(previousValue, currentValue, currentIndex, array) {
  // console.log(previousValue);
  // console.log(currentValue);
  return `${previousValue}<li>${currentValue}</li>`;
}
