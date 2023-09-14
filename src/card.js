/**
 * @author unkwninfo
 */

import "./card.css";

export default function Card() {
  const root = document.createElement("div");
  root.classList.add("card");
  root.setContent = (content) => {
    root.innerHTML = content;
    return root;
  };
  return root;
}
