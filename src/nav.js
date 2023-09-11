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
  // root.innerHTML = `<ul>${items.reduce(cb, "")}</ul>`;
  return new Proxy(root, {
    set: (target, property, value) => {
      console.log(`正在设置属性：${property}，新值为：${value}`);
      target[property] = value;
      return true;
    },
  });
  // return root;
}

function cb(previousValue, currentValue, currentIndex, array) {
  // console.log(previousValue);
  // console.log(currentValue);
  return `${previousValue}<li><a href="${currentValue.url}">${currentValue.name}</a></li>`;
}
