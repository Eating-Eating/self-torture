import React, { lazy, Suspense, useEffect, useState } from "react";
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
    import(`@/pages/markdown/${path}`)
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

const ALGORITHM = createMarkdownComponent('Algorithm/index.md');
const CSS = createMarkdownComponent('css/index.md');
const ENGINEERING = createMarkdownComponent('engineering/index.md');
const INTERVIEW = createMarkdownComponent('interview/index.md');
const JAVASCRIPT = createMarkdownComponent('javascript/index.md');
const LESSON = createMarkdownComponent('lesson/index.md');
const LLMS = createMarkdownComponent('LLMs/index.md');
const PROJECTS = createMarkdownComponent('projects/index.md');
const REACT = createMarkdownComponent('react/index.md');
const SERVERLESS = createMarkdownComponent('serverless/index.md');
const THINKING = createMarkdownComponent('thinking/index.md');
const TIPS = createMarkdownComponent('tips/index.md');
const TYPESCRIPT = createMarkdownComponent('typescript/index.md');
const VUE = createMarkdownComponent('vue/index.md');
const WEBBROWSER = createMarkdownComponent('webBrowser/index.md');
const WEBPACK = createMarkdownComponent('webpack/index.md');
const ALGORITHM_SORTING = createMarkdownComponent('Algorithm/sorting.md');
const CSS_FLEX = createMarkdownComponent('css/flex.md');
const JAVASCRIPT_CLOSURE = createMarkdownComponent('javascript/closure.md');
const JAVASCRIPT_DEBOUNCE = createMarkdownComponent('javascript/debounce.md');
const JAVASCRIPT_DEEPCLONE = createMarkdownComponent('javascript/deepClone.md');
const JAVASCRIPT_ES6 = createMarkdownComponent('javascript/es6.md');
const JAVASCRIPT_PROMISE = createMarkdownComponent('javascript/promise.md');
const JAVASCRIPT_PROTOTYPE = createMarkdownComponent('javascript/prototype.md');
const JAVASCRIPT_THIS = createMarkdownComponent('javascript/this.md');
const LLMS_LANGCHAIN = createMarkdownComponent('LLMs/langchain.md');
const LLMS_PICO_LLM = createMarkdownComponent('LLMs/pico-llm.md');
const LLMS_THINKING = createMarkdownComponent('LLMs/thinking.md');
const LLMS_TRANSFORMER = createMarkdownComponent('LLMs/transformer.md');
const PROJECTS_LINKTIME = createMarkdownComponent('projects/linktime.md');
const PROJECTS_OKR = createMarkdownComponent('projects/okr.md');
const PROJECTS_SAAS = createMarkdownComponent('projects/saas.md');
const PROJECTS_TORTURE = createMarkdownComponent('projects/torture.md');
const PROJECTS_UI_FRAMEWORK = createMarkdownComponent('projects/ui-framework.md');
const REACT_DIFF = createMarkdownComponent('react/diff.md');
const REACT_FIBER = createMarkdownComponent('react/fiber.md');
const REACT_HOOKS = createMarkdownComponent('react/hooks/index.md');
const REACT_PERFORMANCE = createMarkdownComponent('react/performance.md');
const REACT_REDUX = createMarkdownComponent('react/redux.md');
const REACT_STATE_MANAGE = createMarkdownComponent('react/state-manage.md');
const THINKING_REFECTOR = createMarkdownComponent('thinking/refector.md');
const VUE_DIFF = createMarkdownComponent('vue/diff.md');
const VUE_DIRECTIVES = createMarkdownComponent('vue/directives.md');
const VUE_KEY = createMarkdownComponent('vue/key.md');
const VUE_NEXTTICK = createMarkdownComponent('vue/nextTick.md');
const VUE_VUEX = createMarkdownComponent('vue/vuex.md');
const VUE_WATCH = createMarkdownComponent('vue/watch.md');
const WEBBROWSER_CACHE = createMarkdownComponent('webBrowser/cache.md');
const WEBBROWSER_COOKIE = createMarkdownComponent('webBrowser/cookie.md');
const WEBBROWSER_CROSSPAGE = createMarkdownComponent('webBrowser/crossPage/index.md');
const WEBBROWSER_GARBAGECYCLE = createMarkdownComponent('webBrowser/garbageCycle/index.md');
const WEBBROWSER_PERFORMANCE = createMarkdownComponent('webBrowser/performance.md');
const WEBBROWSER_PWA = createMarkdownComponent('webBrowser/pwa.md');
const WEBBROWSER_SAFETY = createMarkdownComponent('webBrowser/safety/index.md');
const WEBBROWSER_SSO = createMarkdownComponent('webBrowser/sso.md');
const WEBBROWSER_SSR_HYDRATE = createMarkdownComponent('webBrowser/ssr-hydrate.md');
const WEBBROWSER_TCP_TLS = createMarkdownComponent('webBrowser/tcp-tls.md');
const WEBPACK_MICRO_FRONT = createMarkdownComponent('webpack/micro-front.md');
const WEBPACK_PERFOMANCE = createMarkdownComponent('webpack/perfomance.md');
const WEBPACK_PROGRESS = createMarkdownComponent('webpack/progress.md');
const REACT_USEEFFECT = createMarkdownComponent('react/hooks/useEffect.md');
const REACT_USESTATE = createMarkdownComponent('react/hooks/useState.md');
const WEBBROWSER_BROADCAST_CHANNE = createMarkdownComponent('webBrowser/crossPage/Broadcast Channe.md');
const WEBBROWSER_INDEXEDDB = createMarkdownComponent('webBrowser/crossPage/IndexedDB.md');
const WEBBROWSER_LOCALSTORAGE = createMarkdownComponent('webBrowser/crossPage/LocalStorage.md');
const WEBBROWSER_SERVICE_WORKER = createMarkdownComponent('webBrowser/crossPage/Service Worker.md');
const WEBBROWSER_SHARED_WORKER = createMarkdownComponent('webBrowser/crossPage/Shared Worker.md');
const WEBBROWSER_WINDOW_OPEN_OPENER = createMarkdownComponent('webBrowser/crossPage/window open opener.md');
const WEBBROWSER_MEMORYLEAK = createMarkdownComponent('webBrowser/garbageCycle/memoryLeak.md');
const WEBBROWSER_CSRF = createMarkdownComponent('webBrowser/safety/csrf.md');
const WEBBROWSER_XSS = createMarkdownComponent('webBrowser/safety/xss.md');

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
                  <Route exact path="/Algorithm" component={ALGORITHM} />
                  <Route exact path="/css" component={CSS} />
                  <Route exact path="/engineering" component={ENGINEERING} />
                  <Route exact path="/interview" component={INTERVIEW} />
                  <Route exact path="/javascript" component={JAVASCRIPT} />
                  <Route exact path="/lesson" component={LESSON} />
                  <Route exact path="/LLMs" component={LLMS} />
                  <Route exact path="/projects" component={PROJECTS} />
                  <Route exact path="/react" component={REACT} />
                  <Route exact path="/serverless" component={SERVERLESS} />
                  <Route exact path="/thinking" component={THINKING} />
                  <Route exact path="/tips" component={TIPS} />
                  <Route exact path="/typescript" component={TYPESCRIPT} />
                  <Route exact path="/vue" component={VUE} />
                  <Route exact path="/webBrowser" component={WEBBROWSER} />
                  <Route exact path="/webpack" component={WEBPACK} />
                  <Route exact path="/Algorithm/sorting" component={ALGORITHM_SORTING} />
                  <Route exact path="/css/flex" component={CSS_FLEX} />
                  <Route exact path="/javascript/closure" component={JAVASCRIPT_CLOSURE} />
                  <Route exact path="/javascript/debounce" component={JAVASCRIPT_DEBOUNCE} />
                  <Route exact path="/javascript/deepClone" component={JAVASCRIPT_DEEPCLONE} />
                  <Route exact path="/javascript/es6" component={JAVASCRIPT_ES6} />
                  <Route exact path="/javascript/promise" component={JAVASCRIPT_PROMISE} />
                  <Route exact path="/javascript/prototype" component={JAVASCRIPT_PROTOTYPE} />
                  <Route exact path="/javascript/this" component={JAVASCRIPT_THIS} />
                  <Route exact path="/LLMs/langchain" component={LLMS_LANGCHAIN} />
                  <Route exact path="/LLMs/pico-llm" component={LLMS_PICO_LLM} />
                  <Route exact path="/LLMs/thinking" component={LLMS_THINKING} />
                  <Route exact path="/LLMs/transformer" component={LLMS_TRANSFORMER} />
                  <Route exact path="/projects/linktime" component={PROJECTS_LINKTIME} />
                  <Route exact path="/projects/okr" component={PROJECTS_OKR} />
                  <Route exact path="/projects/saas" component={PROJECTS_SAAS} />
                  <Route exact path="/projects/torture" component={PROJECTS_TORTURE} />
                  <Route exact path="/projects/ui-framework" component={PROJECTS_UI_FRAMEWORK} />
                  <Route exact path="/react/diff" component={REACT_DIFF} />
                  <Route exact path="/react/fiber" component={REACT_FIBER} />
                  <Route exact path="/react/hooks" component={REACT_HOOKS} />
                  <Route exact path="/react/performance" component={REACT_PERFORMANCE} />
                  <Route exact path="/react/redux" component={REACT_REDUX} />
                  <Route exact path="/react/state-manage" component={REACT_STATE_MANAGE} />
                  <Route exact path="/thinking/refector" component={THINKING_REFECTOR} />
                  <Route exact path="/vue/diff" component={VUE_DIFF} />
                  <Route exact path="/vue/directives" component={VUE_DIRECTIVES} />
                  <Route exact path="/vue/key" component={VUE_KEY} />
                  <Route exact path="/vue/nextTick" component={VUE_NEXTTICK} />
                  <Route exact path="/vue/vuex" component={VUE_VUEX} />
                  <Route exact path="/vue/watch" component={VUE_WATCH} />
                  <Route exact path="/webBrowser/cache" component={WEBBROWSER_CACHE} />
                  <Route exact path="/webBrowser/cookie" component={WEBBROWSER_COOKIE} />
                  <Route exact path="/webBrowser/crossPage" component={WEBBROWSER_CROSSPAGE} />
                  <Route exact path="/webBrowser/garbageCycle" component={WEBBROWSER_GARBAGECYCLE} />
                  <Route exact path="/webBrowser/performance" component={WEBBROWSER_PERFORMANCE} />
                  <Route exact path="/webBrowser/pwa" component={WEBBROWSER_PWA} />
                  <Route exact path="/webBrowser/safety" component={WEBBROWSER_SAFETY} />
                  <Route exact path="/webBrowser/sso" component={WEBBROWSER_SSO} />
                  <Route exact path="/webBrowser/ssr-hydrate" component={WEBBROWSER_SSR_HYDRATE} />
                  <Route exact path="/webBrowser/tcp-tls" component={WEBBROWSER_TCP_TLS} />
                  <Route exact path="/webpack/micro-front" component={WEBPACK_MICRO_FRONT} />
                  <Route exact path="/webpack/perfomance" component={WEBPACK_PERFOMANCE} />
                  <Route exact path="/webpack/progress" component={WEBPACK_PROGRESS} />
                  <Route exact path="/react/hooks/useEffect" component={REACT_USEEFFECT} />
                  <Route exact path="/react/hooks/useState" component={REACT_USESTATE} />
                  <Route exact path="/webBrowser/crossPage/Broadcast Channe" component={WEBBROWSER_BROADCAST_CHANNE} />
                  <Route exact path="/webBrowser/crossPage/IndexedDB" component={WEBBROWSER_INDEXEDDB} />
                  <Route exact path="/webBrowser/crossPage/LocalStorage" component={WEBBROWSER_LOCALSTORAGE} />
                  <Route exact path="/webBrowser/crossPage/Service Worker" component={WEBBROWSER_SERVICE_WORKER} />
                  <Route exact path="/webBrowser/crossPage/Shared Worker" component={WEBBROWSER_SHARED_WORKER} />
                  <Route exact path="/webBrowser/crossPage/window open opener" component={WEBBROWSER_WINDOW_OPEN_OPENER} />
                  <Route exact path="/webBrowser/garbageCycle/memoryLeak" component={WEBBROWSER_MEMORYLEAK} />
                  <Route exact path="/webBrowser/safety/csrf" component={WEBBROWSER_CSRF} />
                  <Route exact path="/webBrowser/safety/xss" component={WEBBROWSER_XSS} />
                </Switch>
              </Suspense>
            </BasePage>
          )}
        />
      </Switch>
    </BottomNav>
  );
};