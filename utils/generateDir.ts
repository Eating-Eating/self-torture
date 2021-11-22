import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import markdown from 'markdown-it';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// path.sep- > 提供特定于平台的路径片段分隔符
// path.join -> path.join() 方法使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。

/* 
    遍历目录，
    遇到文件夹就调用自身，
    遇到读取文件内容，返回keywords作为字符串并加入当前obj的keywords中
    index为该文件夹主页，标签为文件夹名，其中keywords应包含所有平级文件名，以及平级文件夹名
*/
type SinglePage = {
  label: string;
  routePath: string;
  mdPath: string;
  keyWords: Array<SinglePage | string>;
};
type Travel = (
  dir: string,
  callback: (
    obj: SinglePage,
    file: string,
    nowLabel: string,
    nowRoutePath: string
  ) => void,
  pushPath?: string
) => SinglePage;
const travel: Travel = (dir, callback, pushPath) => {
  let nowPath:string;
  if (pushPath) {
    nowPath = pushPath;
  } else {
    nowPath = dir.split("markdown")[1];
  }
  // 根据目录生成state结构
  let tempArr = nowPath.split(path.sep);
  let nowRoutePath = nowPath.split(path.sep).join("/");
  let nowLabel = tempArr[tempArr.length - 1];
  const obj: SinglePage = {
    label: "",
    routePath: nowRoutePath,
    mdPath: "",
    keyWords: [],
  };
  fs.readdirSync(dir).forEach((file) => {
    var pathname = path.join(dir, file);
    if (fs.statSync(pathname).isDirectory()) {
      obj.keyWords.push(travel(pathname, callback, nowPath + path.sep + file));
    } else {
      markdown.use()
      callback(obj, file, nowLabel, nowRoutePath);
    }
  });
  return obj;
};
const output = travel(
  path.resolve(__dirname, "../src/pages/markdown"),
  function (obj, file, nowLabel, nowRoutePath) {
    if (file.includes(".md")) {
      if (file.includes("index.md")) {
        obj.label = nowLabel;
        obj.mdPath = "./pages/markdown" + nowRoutePath + "/" + file;
      } else {
        obj.keyWords.push({
          label: file.split(".md")[0],
          routePath: nowRoutePath + "/" + file.split(".md")[0],
          mdPath: "./pages/markdown" + nowRoutePath + "/" + file,
          keyWords: [],
        });
      }
    }
  }
);
console.dir(output, { depth: null });
