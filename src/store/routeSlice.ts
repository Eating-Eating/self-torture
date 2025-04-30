import { createSlice } from '@reduxjs/toolkit';
import { singleCata } from './index';
const initialState: singleCata[] =  [
  {
    "label": "Algorithm",
    "routePath": "/Algorithm",
    "mdPath": "./pages/markdown/Algorithm/index.md",
    "keyWords": [
      {
        "label": "sorting",
        "routePath": "/Algorithm/sorting",
        "mdPath": "./pages/markdown/Algorithm/sorting.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "css",
    "routePath": "/css",
    "mdPath": "./pages/markdown/css/index.md",
    "keyWords": [
      {
        "label": "flex",
        "routePath": "/css/flex",
        "mdPath": "./pages/markdown/css/flex.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "engineering",
    "routePath": "/engineering",
    "mdPath": "./pages/markdown/engineering/index.md",
    "keyWords": []
  },
  {
    "label": "interview",
    "routePath": "/interview",
    "mdPath": "./pages/markdown/interview/index.md",
    "keyWords": []
  },
  {
    "label": "javascript",
    "routePath": "/javascript",
    "mdPath": "./pages/markdown/javascript/index.md",
    "keyWords": [
      {
        "label": "closure",
        "routePath": "/javascript/closure",
        "mdPath": "./pages/markdown/javascript/closure.md",
        "keyWords": []
      },
      {
        "label": "debounce",
        "routePath": "/javascript/debounce",
        "mdPath": "./pages/markdown/javascript/debounce.md",
        "keyWords": []
      },
      {
        "label": "deepClone",
        "routePath": "/javascript/deepClone",
        "mdPath": "./pages/markdown/javascript/deepClone.md",
        "keyWords": []
      },
      {
        "label": "es6",
        "routePath": "/javascript/es6",
        "mdPath": "./pages/markdown/javascript/es6.md",
        "keyWords": []
      },
      {
        "label": "promise",
        "routePath": "/javascript/promise",
        "mdPath": "./pages/markdown/javascript/promise.md",
        "keyWords": []
      },
      {
        "label": "prototype",
        "routePath": "/javascript/prototype",
        "mdPath": "./pages/markdown/javascript/prototype.md",
        "keyWords": []
      },
      {
        "label": "this",
        "routePath": "/javascript/this",
        "mdPath": "./pages/markdown/javascript/this.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "lesson",
    "routePath": "/lesson",
    "mdPath": "./pages/markdown/lesson/index.md",
    "keyWords": []
  },
  {
    "label": "LLMs",
    "routePath": "/LLMs",
    "mdPath": "./pages/markdown/LLMs/index.md",
    "keyWords": [
      {
        "label": "langchain",
        "routePath": "/LLMs/langchain",
        "mdPath": "./pages/markdown/LLMs/langchain.md",
        "keyWords": []
      },
      {
        "label": "pico-llm",
        "routePath": "/LLMs/pico-llm",
        "mdPath": "./pages/markdown/LLMs/pico-llm.md",
        "keyWords": []
      },
      {
        "label": "thinking",
        "routePath": "/LLMs/thinking",
        "mdPath": "./pages/markdown/LLMs/thinking.md",
        "keyWords": []
      },
      {
        "label": "transformer",
        "routePath": "/LLMs/transformer",
        "mdPath": "./pages/markdown/LLMs/transformer.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "projects",
    "routePath": "/projects",
    "mdPath": "./pages/markdown/projects/index.md",
    "keyWords": [
      {
        "label": "linktime",
        "routePath": "/projects/linktime",
        "mdPath": "./pages/markdown/projects/linktime.md",
        "keyWords": []
      },
      {
        "label": "okr",
        "routePath": "/projects/okr",
        "mdPath": "./pages/markdown/projects/okr.md",
        "keyWords": []
      },
      {
        "label": "saas",
        "routePath": "/projects/saas",
        "mdPath": "./pages/markdown/projects/saas.md",
        "keyWords": []
      },
      {
        "label": "torture",
        "routePath": "/projects/torture",
        "mdPath": "./pages/markdown/projects/torture.md",
        "keyWords": []
      },
      {
        "label": "ui-framework",
        "routePath": "/projects/ui-framework",
        "mdPath": "./pages/markdown/projects/ui-framework.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "react",
    "routePath": "/react",
    "mdPath": "./pages/markdown/react/index.md",
    "keyWords": [
      {
        "label": "diff",
        "routePath": "/react/diff",
        "mdPath": "./pages/markdown/react/diff.md",
        "keyWords": []
      },
      {
        "label": "fiber",
        "routePath": "/react/fiber",
        "mdPath": "./pages/markdown/react/fiber.md",
        "keyWords": []
      },
      {
        "label": "hooks",
        "routePath": "/react/hooks",
        "mdPath": "./pages/markdown/react/hooks/index.md",
        "keyWords": [
          {
            "label": "useEffect",
            "routePath": "/react/hooks/useEffect",
            "mdPath": "./pages/markdown/react/hooks/useEffect.md",
            "keyWords": []
          },
          {
            "label": "useState",
            "routePath": "/react/hooks/useState",
            "mdPath": "./pages/markdown/react/hooks/useState.md",
            "keyWords": []
          }
        ]
      },
      {
        "label": "performance",
        "routePath": "/react/performance",
        "mdPath": "./pages/markdown/react/performance.md",
        "keyWords": []
      },
      {
        "label": "redux",
        "routePath": "/react/redux",
        "mdPath": "./pages/markdown/react/redux.md",
        "keyWords": []
      },
      {
        "label": "state-manage",
        "routePath": "/react/state-manage",
        "mdPath": "./pages/markdown/react/state-manage.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "serverless",
    "routePath": "/serverless",
    "mdPath": "./pages/markdown/serverless/index.md",
    "keyWords": []
  },
  {
    "label": "thinking",
    "routePath": "/thinking",
    "mdPath": "./pages/markdown/thinking/index.md",
    "keyWords": [
      {
        "label": "refector",
        "routePath": "/thinking/refector",
        "mdPath": "./pages/markdown/thinking/refector.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "tips",
    "routePath": "/tips",
    "mdPath": "./pages/markdown/tips/index.md",
    "keyWords": []
  },
  {
    "label": "typescript",
    "routePath": "/typescript",
    "mdPath": "./pages/markdown/typescript/index.md",
    "keyWords": []
  },
  {
    "label": "vue",
    "routePath": "/vue",
    "mdPath": "./pages/markdown/vue/index.md",
    "keyWords": [
      {
        "label": "diff",
        "routePath": "/vue/diff",
        "mdPath": "./pages/markdown/vue/diff.md",
        "keyWords": []
      },
      {
        "label": "directives",
        "routePath": "/vue/directives",
        "mdPath": "./pages/markdown/vue/directives.md",
        "keyWords": []
      },
      {
        "label": "key",
        "routePath": "/vue/key",
        "mdPath": "./pages/markdown/vue/key.md",
        "keyWords": []
      },
      {
        "label": "nextTick",
        "routePath": "/vue/nextTick",
        "mdPath": "./pages/markdown/vue/nextTick.md",
        "keyWords": []
      },
      {
        "label": "vuex",
        "routePath": "/vue/vuex",
        "mdPath": "./pages/markdown/vue/vuex.md",
        "keyWords": []
      },
      {
        "label": "watch",
        "routePath": "/vue/watch",
        "mdPath": "./pages/markdown/vue/watch.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "webBrowser",
    "routePath": "/webBrowser",
    "mdPath": "./pages/markdown/webBrowser/index.md",
    "keyWords": [
      {
        "label": "cache",
        "routePath": "/webBrowser/cache",
        "mdPath": "./pages/markdown/webBrowser/cache.md",
        "keyWords": []
      },
      {
        "label": "cookie",
        "routePath": "/webBrowser/cookie",
        "mdPath": "./pages/markdown/webBrowser/cookie.md",
        "keyWords": []
      },
      {
        "label": "crossPage",
        "routePath": "/webBrowser/crossPage",
        "mdPath": "./pages/markdown/webBrowser/crossPage/index.md",
        "keyWords": [
          {
            "label": "Broadcast Channe",
            "routePath": "/webBrowser/crossPage/Broadcast Channe",
            "mdPath": "./pages/markdown/webBrowser/crossPage/Broadcast Channe.md",
            "keyWords": []
          },
          {
            "label": "IndexedDB",
            "routePath": "/webBrowser/crossPage/IndexedDB",
            "mdPath": "./pages/markdown/webBrowser/crossPage/IndexedDB.md",
            "keyWords": []
          },
          {
            "label": "LocalStorage",
            "routePath": "/webBrowser/crossPage/LocalStorage",
            "mdPath": "./pages/markdown/webBrowser/crossPage/LocalStorage.md",
            "keyWords": []
          },
          {
            "label": "Service Worker",
            "routePath": "/webBrowser/crossPage/Service Worker",
            "mdPath": "./pages/markdown/webBrowser/crossPage/Service Worker.md",
            "keyWords": []
          },
          {
            "label": "Shared Worker",
            "routePath": "/webBrowser/crossPage/Shared Worker",
            "mdPath": "./pages/markdown/webBrowser/crossPage/Shared Worker.md",
            "keyWords": []
          },
          {
            "label": "window open opener",
            "routePath": "/webBrowser/crossPage/window open opener",
            "mdPath": "./pages/markdown/webBrowser/crossPage/window open opener.md",
            "keyWords": []
          }
        ]
      },
      {
        "label": "garbageCycle",
        "routePath": "/webBrowser/garbageCycle",
        "mdPath": "./pages/markdown/webBrowser/garbageCycle/index.md",
        "keyWords": [
          {
            "label": "memoryLeak",
            "routePath": "/webBrowser/garbageCycle/memoryLeak",
            "mdPath": "./pages/markdown/webBrowser/garbageCycle/memoryLeak.md",
            "keyWords": []
          }
        ]
      },
      {
        "label": "performance",
        "routePath": "/webBrowser/performance",
        "mdPath": "./pages/markdown/webBrowser/performance.md",
        "keyWords": []
      },
      {
        "label": "pwa",
        "routePath": "/webBrowser/pwa",
        "mdPath": "./pages/markdown/webBrowser/pwa.md",
        "keyWords": []
      },
      {
        "label": "safety",
        "routePath": "/webBrowser/safety",
        "mdPath": "./pages/markdown/webBrowser/safety/index.md",
        "keyWords": [
          {
            "label": "csrf",
            "routePath": "/webBrowser/safety/csrf",
            "mdPath": "./pages/markdown/webBrowser/safety/csrf.md",
            "keyWords": []
          },
          {
            "label": "xss",
            "routePath": "/webBrowser/safety/xss",
            "mdPath": "./pages/markdown/webBrowser/safety/xss.md",
            "keyWords": []
          }
        ]
      },
      {
        "label": "sso",
        "routePath": "/webBrowser/sso",
        "mdPath": "./pages/markdown/webBrowser/sso.md",
        "keyWords": []
      },
      {
        "label": "ssr-hydrate",
        "routePath": "/webBrowser/ssr-hydrate",
        "mdPath": "./pages/markdown/webBrowser/ssr-hydrate.md",
        "keyWords": []
      },
      {
        "label": "tcp-tls",
        "routePath": "/webBrowser/tcp-tls",
        "mdPath": "./pages/markdown/webBrowser/tcp-tls.md",
        "keyWords": []
      }
    ]
  },
  {
    "label": "webpack",
    "routePath": "/webpack",
    "mdPath": "./pages/markdown/webpack/index.md",
    "keyWords": [
      {
        "label": "micro-front",
        "routePath": "/webpack/micro-front",
        "mdPath": "./pages/markdown/webpack/micro-front.md",
        "keyWords": []
      },
      {
        "label": "perfomance",
        "routePath": "/webpack/perfomance",
        "mdPath": "./pages/markdown/webpack/perfomance.md",
        "keyWords": []
      },
      {
        "label": "progress",
        "routePath": "/webpack/progress",
        "mdPath": "./pages/markdown/webpack/progress.md",
        "keyWords": []
      }
    ]
  }
]
;

export const routeSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {}
});

export default routeSlice.reducer;