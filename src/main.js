function render(data) {
  let html = document.createElement(data.tagName);
  html.innerText = data.content.replace(/\s+/g, "");
  return html;
}

const test = {
  tagName: "style",
  content: `
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
  }`,
};
console.log(test.content.replace(/\s+/g, ""));

const body = document.body;
body.append(
  render({
    tagName: "p",
    content: "unkwninfo",
  }),
  render(test)
);
