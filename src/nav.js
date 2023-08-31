/**
 * @author unkwninfo
 * @todo css
 */

export default class Nav {
  /**
   * @param {Object[]} items
   * @param {string} items[].name
   * @param {string} items[].url
   */
  constructor(items) {
    this.items = items;
  }
  html() {
    let root = document.createElement("div");
    let temp = `<ul>${this.items.reduce(cb, "")}</ul>`;
    root.innerHTML = temp;
    return root;
  }
}

function cb(previousValue, currentValue, currentIndex, array) {
  // console.log(previousValue);
  // console.log(currentValue);
  return `${previousValue}<li><a href="${currentValue.url}">${currentValue.name}</a></li>`;
}
