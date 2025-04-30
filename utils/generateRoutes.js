const fs = require("fs");
const path = require("path");

// 递归读取目录
function readDir(dir) {
  const result = new Map();

  function processDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // 如果是目录，递归读取
        processDir(filePath);
        // 检查是否有 index.md
        const indexPath = path.join(filePath, "index.md");
        if (fs.existsSync(indexPath)) {
          const relativePath = path.relative("src/pages/markdown", indexPath);
          const routePath =
            "/" + path.dirname(relativePath).replace(/\\/g, "/");
          const label = path.basename(path.dirname(relativePath));
          result.set(routePath, {
            label,
            routePath,
            mdPath: `./pages/markdown/${relativePath.replace(/\\/g, "/")}`,
            keyWords: [],
          });
        }
      } else if (file.endsWith(".md") && file !== "index.md") {
        // 如果是非索引的 markdown 文件，添加到结果中
        const relativePath = path.relative("src/pages/markdown", filePath);
        const routePath =
          "/" + relativePath.replace(/\\/g, "/").replace(/\.md$/, "");
        const label = path.basename(file, ".md");

        result.set(routePath, {
          label,
          routePath,
          mdPath: `./pages/markdown/${relativePath.replace(/\\/g, "/")}`,
          keyWords: [],
        });
      }
    });
  }

  processDir(dir);
  return Array.from(result.values());
}

// 构建路由树
function buildRouteTree(routes) {
  const tree = [];
  const routeMap = new Map();

  // 首先创建所有路由的映射
  routes.forEach((route) => {
    routeMap.set(route.routePath, { ...route });
  });

  // 然后构建树结构
  routes.forEach((route) => {
    const parts = route.routePath.split("/").filter(Boolean);
    if (parts.length === 1) {
      // 顶级路由
      tree.push(routeMap.get(route.routePath));
    } else {
      // 子路由
      const parentPath = "/" + parts.slice(0, -1).join("/");
      const parent = routeMap.get(parentPath);
      if (parent && route.routePath !== parentPath) {
        if (!parent.keyWords) {
          parent.keyWords = [];
        }
        parent.keyWords.push(routeMap.get(route.routePath));
      }
    }
  });

  return tree;
}

// 生成组件名称
function generateComponentName(route) {
  const parts = route.routePath.split("/").filter(Boolean);
  const prefix = parts.length > 1 ? parts[0].toUpperCase() + "_" : "";
  const name = parts[parts.length - 1].toUpperCase().replace(/[^A-Z0-9]/g, "_");
  return prefix + name;
}

// 生成路由配置
function generateRoutes() {
  const markdownDir = path.join(__dirname, "../src/pages/markdown");
  const routes = readDir(markdownDir);
  const routeTree = buildRouteTree(routes);

  // 按路径长度排序，确保父路由在子路由之前
  routes.sort((a, b) => {
    const aParts = a.routePath.split("/").filter(Boolean);
    const bParts = b.routePath.split("/").filter(Boolean);
    return aParts.length - bParts.length;
  });

  // 生成 Routes.tsx
  const routesContent = `import React, { lazy, Suspense, useEffect, useState } from "react";
import { SelfTorture } from "./pages/SelfTorture";
import { BottomNav } from "./pages/shared/BottomNav";
import { Route, Switch } from "react-router-dom";
import BasePage from "./pages/shared/BasePage";
import { marked } from 'marked';

// Create a wrapper component for markdown content
const MarkdownWrapper = ({ content }: { content: string }) => {
  try {
    const htmlContent = marked(content);
    return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  } catch (error) {
    console.error('Error rendering markdown:', error);
    return <div>Error loading content</div>;
  }
};

// Helper function to create lazy-loaded markdown components
const createMarkdownComponent = (path: string) => {
  return lazy(() => 
    import(\`@/pages/markdown/\${path}\`)
      .then(module => ({ 
        default: () => <MarkdownWrapper content={module.default} /> 
      }))
      .catch(error => {
        console.error('Error loading markdown file ' + path + ':', error);
        return { 
          default: () => <div>Error loading content</div> 
        };
      })
  );
};

${routes
  .map((route) => {
    const componentName = generateComponentName(route);
    const relativePath = route.mdPath.replace("./pages/markdown/", "");
    return `const ${componentName} = createMarkdownComponent('${relativePath}');`;
  })
  .join("\n")}

const SuspenseJudge: (turn: any) => any = ({ turn }) => {
  useEffect(() => {
    turn(true);
    return () => {
      turn(false);
    };
  }, [turn]);
  return <div>loading</div>;
};

export const Routes = () => {
  const [pending, setPending] = useState(false);

  return (
    <BottomNav>
      <Switch>
        <Route path="/selfTorture" component={SelfTorture} />
        <Route
          path="/*"
          render={() => (
            <BasePage pending={pending}>
              <Suspense fallback={<SuspenseJudge turn={setPending} />}>
                <Switch>
${routes
  .map((route) => {
    const componentName = generateComponentName(route);
    return `                  <Route exact path="${route.routePath}" component={${componentName}} />`;
  })
  .join("\n")}
                </Switch>
              </Suspense>
            </BasePage>
          )}
        />
      </Switch>
    </BottomNav>
  );
};`;

  // 生成 store 配置
  const storeContent = `import { createSlice } from '@reduxjs/toolkit';
import { singleCata } from './index';
const initialState: singleCata[] =  ${JSON.stringify(routeTree, null, 2)}
;

export const routeSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {}
});

export default routeSlice.reducer;`;

  // 写入文件
  fs.writeFileSync(path.join(__dirname, "../src/Routes.tsx"), routesContent);
  fs.writeFileSync(
    path.join(__dirname, "../src/store/routeSlice.ts"),
    storeContent
  );

  console.log("Routes and store configuration generated successfully!");
}

// 执行生成
generateRoutes();
