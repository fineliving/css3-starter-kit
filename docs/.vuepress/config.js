// const path = require("path")
// const fs = require("fs")
// const htmlFolder = path.join(__dirname, "../html/")
// const html = fs.readdirSync(htmlFolder).filter((c) => c !== "README.md")
const editorSidebar = require("./sidebars/editor")
const debugSidebar = require("./sidebars/debug")
const sliceSidebar = require("./sidebars/slice")

module.exports = {
  title: "开发软件",
  description: "前端开发软件",
  themeConfig: {
    nav: [
      {
        text: "编辑器和IDE",
        items: [
          {
            text: "知识图谱",
            link: "/editor/",
          },
          // {
          //   text: "教程/书籍",
          //   items: [{ text: "javascript高级程序设计", link: "/html-course1/" }],
          // },
        ],
      },
      {
        text: "调试工具",
        items: [
          {
            text: "知识图谱",
            link: "/debug/",
          },
        ],
      },
      {
        text: "切图",
        items: [
          {
            text: "知识图谱",
            link: "/slice/",
          },
        ],
      },
    ],
    sidebarDepth: 3,
    sidebar: {
      "/editor/": editorSidebar,
      "/debug/": debugSidebar,
      "/slice/": sliceSidebar,
    },
  },
}
