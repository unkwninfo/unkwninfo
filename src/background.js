/**
 * @author unkwninfo
 * @todo canvas
 */

import "./background.css";

export default class Background {
  /**
   * @param {Object} config
   * @param {Number} config.radius
   * @param {Number} config.count
   */
  constructor(
    config = {
      radius: 4,
      count: 300,
    }
  ) {
    this.root = document.createElement("div");
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.root.append(this.canvas);
    this.config = config;
    this.animationId = null;
  }
  init() {
    this.root.classList.add("bg");
    this.canvas.width = this.root.offsetWidth;
    this.canvas.height = this.root.offsetHeight;
    this.points = [];
    for (let index = 0; index < this.config.count; index++) {
      this.points.push({
        x: Math.floor(Math.random() * (this.canvas.width + 1)),
        y: Math.floor(Math.random() * (this.canvas.height + 1)),
        r: this.config.radius,
      });
    }
    window.cancelAnimationFrame(this.animationId);
    window.requestAnimationFrame(this.draw.bind(this));
    window.addEventListener("resize", this.init.bind(this), false);
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.points.map((point, index, array) => {
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
      this.ctx.fillStyle = "#fff";
      this.ctx.fill();
      if (point.y < this.canvas.height) {
        // point.x += Math.random() < 0.5 ? -1 : 1;
        point.y++;
      } else {
        point.x = Math.floor(Math.random() * (this.canvas.width + 1));
        point.y = 0;
      }
    });
    this.animationId = window.requestAnimationFrame(this.draw.bind(this));
  }
}
