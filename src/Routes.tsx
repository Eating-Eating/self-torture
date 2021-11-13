import { SelfTorture } from "@/pages/SelfTorture";
import { BottomNav } from "@/pages/shared/BottomNav";
import { Route, Switch } from "react-router-dom";
import BasePage from "@/pages/shared/BasePage";
import { lazy, Suspense, useEffect, useState } from "react";

const CSS = lazy<any>(() => import("./pages/markdown/css/index.md"));
const CSSFLEX = lazy<any>(() => import("./pages/markdown/css/flex.md"));
const JAVASCRIPT = lazy<any>(
  () => import("./pages/markdown/javascript/index.md")
);
const JAVASCRIPTCLOSURE = lazy<any>(
  () => import("./pages/markdown/javascript/closure.md")
);
const JAVASCRIPTDEBOUNCE = lazy<any>(
  () => import("./pages/markdown/javascript/debounce.md")
);
const JAVASCRIPTDEEPCLONE = lazy<any>(
  () => import("./pages/markdown/javascript/deepClone.md")
);
const JAVASCRIPTES = lazy<any>(
  () => import("./pages/markdown/javascript/es6.md")
);
const JAVASCRIPTPROMISE = lazy<any>(
  () => import("./pages/markdown/javascript/promise.md")
);
const JAVASCRIPTPROTOTYPE = lazy<any>(
  () => import("./pages/markdown/javascript/prototype.md")
);
const PROJECTS = lazy<any>(() => import("./pages/markdown/projects/index.md"));
const PROJECTSLINKTIME = lazy<any>(
  () => import("./pages/markdown/projects/linktime.md")
);
const PROJECTSOKR = lazy<any>(() => import("./pages/markdown/projects/okr.md"));
const PROJECTSTORTURE = lazy<any>(
  () => import("./pages/markdown/projects/torture.md")
);
const PROJECTSUIFRAMEWORK = lazy<any>(
  () => import("./pages/markdown/projects/ui-framework.md")
);
const REACT = lazy<any>(() => import("./pages/markdown/react/index.md"));
const REACTDIFF = lazy<any>(() => import("./pages/markdown/react/diff.md"));
const REACTFIBER = lazy<any>(() => import("./pages/markdown/react/fiber.md"));
const REACTHOOKS = lazy<any>(
  () => import("./pages/markdown/react/hooks/index.md")
);
const REACTHOOKSUSEEFFECT = lazy<any>(
  () => import("./pages/markdown/react/hooks/useEffect.md")
);
const REACTHOOKSUSESTATE = lazy<any>(
  () => import("./pages/markdown/react/hooks/useState.md")
);
const REACTPERFORMANCE = lazy<any>(
  () => import("./pages/markdown/react/performance.md")
);
const REACTREDUX = lazy<any>(() => import("./pages/markdown/react/redux.md"));
const VUE = lazy<any>(() => import("./pages/markdown/vue/index.md"));
const VUEDIFF = lazy<any>(() => import("./pages/markdown/vue/diff.md"));
const VUEDIRECTIVES = lazy<any>(
  () => import("./pages/markdown/vue/directives.md")
);
const VUEKEY = lazy<any>(() => import("./pages/markdown/vue/key.md"));
const VUENEXTTICK = lazy<any>(() => import("./pages/markdown/vue/nextTick.md"));
const VUEVUEX = lazy<any>(() => import("./pages/markdown/vue/vuex.md"));
const VUEWATCH = lazy<any>(() => import("./pages/markdown/vue/watch.md"));
const WEBBROWSER = lazy<any>(
  () => import("./pages/markdown/webBrowser/index.md")
);
const WEBBROWSERCOOKIE = lazy<any>(
  () => import("./pages/markdown/webBrowser/cookie.md")
);
const WEBBROWSERCROSSPAGE = lazy<any>(
  () => import("./pages/markdown/webBrowser/crossPage/index.md")
);
const WEBBROWSERCROSSPAGEBROADCASTCHANNE = lazy<any>(
  () => import("./pages/markdown/webBrowser/crossPage/Broadcast Channe.md")
);
const WEBBROWSERCROSSPAGEINDEXEDDB = lazy<any>(
  () => import("./pages/markdown/webBrowser/crossPage/IndexedDB.md")
);
const WEBBROWSERCROSSPAGELOCALSTORAGE = lazy<any>(
  () => import("./pages/markdown/webBrowser/crossPage/LocalStorage.md")
);
const THINKINGINDEX = lazy<any>(
  () => import("./pages/markdown/thinking/index.md")
);
const WEBBROWSERCROSSPAGESERVICEWORKER = lazy<any>(
  () => import("./pages/markdown/webBrowser/crossPage/Service Worker.md")
);
const WEBBROWSERCROSSPAGESHAREDWORKER = lazy<any>(
  () => import("./pages/markdown/webBrowser/crossPage/Shared Worker.md")
);
const WEBBROWSERCROSSPAGEWINDOWOPENOPENER = lazy<any>(
  () => import("./pages/markdown/webBrowser/crossPage/window open opener.md")
);
const WEBBROWSERGARBAGECYCLE = lazy<any>(
  () => import("./pages/markdown/webBrowser/garbageCycle/index.md")
);
const WEBBROWSERGARBAGECYCLEMEMORYLEAK = lazy<any>(
  () => import("./pages/markdown/webBrowser/garbageCycle/memoryLeak.md")
);
const WEBBROWSERPERFORMANCE = lazy<any>(
  () => import("./pages/markdown/webBrowser/performance.md")
);
const WEBBROWSERPWA = lazy<any>(
  () => import("./pages/markdown/webBrowser/pwa.md")
);
const WEBBROWSERSAFETY = lazy<any>(
  () => import("./pages/markdown/webBrowser/safety/index.md")
);
const WEBBROWSERSAFETYCSRF = lazy<any>(
  () => import("./pages/markdown/webBrowser/safety/csrf.md")
);
const WEBBROWSERSAFETYXSS = lazy<any>(
  () => import("./pages/markdown/webBrowser/safety/xss.md")
);
const WEBBROWSERSSO = lazy<any>(
  () => import("./pages/markdown/webBrowser/sso.md")
);
const WEBBROWSERSSRHYDRATE = lazy<any>(
  () => import("./pages/markdown/webBrowser/ssr-hydrate.md")
);
const WEBBROWSERTCPTLS = lazy<any>(
  () => import("./pages/markdown/webBrowser/tcp-tls.md")
);
const WEBPACK = lazy<any>(() => import("./pages/markdown/webpack/index.md"));
const WEBPACKMICROFRONT = lazy<any>(
  () => import("./pages/markdown/webpack/micro-front.md")
);
const WEBPACKPERFOMANCE = lazy<any>(
  () => import("./pages/markdown/webpack/perfomance.md")
);
const WEBPACKPROGRESS = lazy<any>(
  () => import("./pages/markdown/webpack/progress.md")
);

const SuspenseJudge:(turn:any)=>any = ({turn})=>{
  useEffect(()=>{
    turn(true)
    return ()=>{
      turn(false)
    }
  },[turn])
  return <div>loading</div>
}
export const Routes = () => {
  const [pending,setPending] = useState(false)
  return (
    <Route>
      <BottomNav>
        <Switch>
          <Route path="/selfTorture" exact>
            <SelfTorture />
          </Route>
          <Route>
            <BasePage pending={pending}>
              <Suspense fallback={<SuspenseJudge turn={setPending}/>}>
                <Route path="/css" key="/css" exact>
                  <CSS />
                </Route>
                <Route path="/css/flex" key="/css/flex" exact>
                  <CSSFLEX />
                </Route>
                <Route path="/javascript" key="/javascript" exact>
                  <JAVASCRIPT />
                </Route>
                <Route
                  path="/javascript/closure"
                  key="/javascript/closure"
                  exact
                >
                  <JAVASCRIPTCLOSURE />
                </Route>
                <Route
                  path="/javascript/debounce"
                  key="/javascript/debounce"
                  exact
                >
                  <JAVASCRIPTDEBOUNCE />
                </Route>
                <Route
                  path="/javascript/deepClone"
                  key="/javascript/deepClone"
                  exact
                >
                  <JAVASCRIPTDEEPCLONE />
                </Route>
                <Route path="/javascript/es6" key="/javascript/es6" exact>
                  <JAVASCRIPTES />
                </Route>
                <Route
                  path="/javascript/promise"
                  key="/javascript/promise"
                  exact
                >
                  <JAVASCRIPTPROMISE />
                </Route>
                <Route
                  path="/javascript/prototype"
                  key="/javascript/prototype"
                  exact
                >
                  <JAVASCRIPTPROTOTYPE />
                </Route>
                <Route path="/thinking" key="/thinking" exact>
                  <THINKINGINDEX />
                </Route>
                <Route path="/projects" key="/projects" exact>
                  <PROJECTS />
                </Route>
                <Route path="/projects/linktime" key="/projects/linktime" exact>
                  <PROJECTSLINKTIME />
                </Route>
                <Route path="/projects/okr" key="/projects/okr" exact>
                  <PROJECTSOKR />
                </Route>
                <Route path="/projects/torture" key="/projects/torture" exact>
                  <PROJECTSTORTURE />
                </Route>
                <Route
                  path="/projects/ui-framework"
                  key="/projects/ui-framework"
                  exact
                >
                  <PROJECTSUIFRAMEWORK />
                </Route>
                <Route path="/react" key="/react" exact>
                  <REACT />
                </Route>
                <Route path="/react/diff" key="/react/diff" exact>
                  <REACTDIFF />
                </Route>
                <Route path="/react/fiber" key="/react/fiber" exact>
                  <REACTFIBER />
                </Route>
                <Route path="/react/hooks" key="/react/hooks" exact>
                  <REACTHOOKS />
                </Route>
                <Route
                  path="/react/hooks/useEffect"
                  key="/react/hooks/useEffect"
                  exact
                >
                  <REACTHOOKSUSEEFFECT />
                </Route>
                <Route
                  path="/react/hooks/useState"
                  key="/react/hooks/useState"
                  exact
                >
                  <REACTHOOKSUSESTATE />
                </Route>
                <Route path="/react/performance" key="/react/performance" exact>
                  <REACTPERFORMANCE />
                </Route>
                <Route path="/react/redux" key="/react/redux" exact>
                  <REACTREDUX />
                </Route>
                <Route path="/vue" key="/vue" exact>
                  <VUE />
                </Route>
                <Route path="/vue/diff" key="/vue/diff" exact>
                  <VUEDIFF />
                </Route>
                <Route path="/vue/directives" key="/vue/directives" exact>
                  <VUEDIRECTIVES />
                </Route>
                <Route path="/vue/key" key="/vue/key" exact>
                  <VUEKEY />
                </Route>
                <Route path="/vue/nextTick" key="/vue/nextTick" exact>
                  <VUENEXTTICK />
                </Route>
                <Route path="/vue/vuex" key="/vue/vuex" exact>
                  <VUEVUEX />
                </Route>
                <Route path="/vue/watch" key="/vue/watch" exact>
                  <VUEWATCH />
                </Route>
                <Route path="/webBrowser" key="/webBrowser" exact>
                  <WEBBROWSER />
                </Route>
                <Route path="/webBrowser/cookie" key="/webBrowser/cookie" exact>
                  <WEBBROWSERCOOKIE />
                </Route>
                <Route
                  path="/webBrowser/crossPage"
                  key="/webBrowser/crossPage"
                  exact
                >
                  <WEBBROWSERCROSSPAGE />
                </Route>
                <Route
                  path="/webBrowser/crossPage/Broadcast Channe"
                  key="/webBrowser/crossPage/Broadcast Channe"
                  exact
                >
                  <WEBBROWSERCROSSPAGEBROADCASTCHANNE />
                </Route>
                <Route
                  path="/webBrowser/crossPage/IndexedDB"
                  key="/webBrowser/crossPage/IndexedDB"
                  exact
                >
                  <WEBBROWSERCROSSPAGEINDEXEDDB />
                </Route>
                <Route
                  path="/webBrowser/crossPage/LocalStorage"
                  key="/webBrowser/crossPage/LocalStorage"
                  exact
                >
                  <WEBBROWSERCROSSPAGELOCALSTORAGE />
                </Route>
                <Route
                  path="/webBrowser/crossPage/Service Worker"
                  key="/webBrowser/crossPage/Service Worker"
                  exact
                >
                  <WEBBROWSERCROSSPAGESERVICEWORKER />
                </Route>
                <Route
                  path="/webBrowser/crossPage/Shared Worker"
                  key="/webBrowser/crossPage/Shared Worker"
                  exact
                >
                  <WEBBROWSERCROSSPAGESHAREDWORKER />
                </Route>
                <Route
                  path="/webBrowser/crossPage/window open opener"
                  key="/webBrowser/crossPage/window open opener"
                  exact
                >
                  <WEBBROWSERCROSSPAGEWINDOWOPENOPENER />
                </Route>
                <Route
                  path="/webBrowser/garbageCycle"
                  key="/webBrowser/garbageCycle"
                  exact
                >
                  <WEBBROWSERGARBAGECYCLE />
                </Route>
                <Route
                  path="/webBrowser/garbageCycle/memoryLeak"
                  key="/webBrowser/garbageCycle/memoryLeak"
                  exact
                >
                  <WEBBROWSERGARBAGECYCLEMEMORYLEAK />
                </Route>
                <Route
                  path="/webBrowser/performance"
                  key="/webBrowser/performance"
                  exact
                >
                  <WEBBROWSERPERFORMANCE />
                </Route>
                <Route path="/webBrowser/pwa" key="/webBrowser/pwa" exact>
                  <WEBBROWSERPWA />
                </Route>
                <Route path="/webBrowser/safety" key="/webBrowser/safety" exact>
                  <WEBBROWSERSAFETY />
                </Route>
                <Route
                  path="/webBrowser/safety/csrf"
                  key="/webBrowser/safety/csrf"
                  exact
                >
                  <WEBBROWSERSAFETYCSRF />
                </Route>
                <Route
                  path="/webBrowser/safety/xss"
                  key="/webBrowser/safety/xss"
                  exact
                >
                  <WEBBROWSERSAFETYXSS />
                </Route>
                <Route path="/webBrowser/sso" key="/webBrowser/sso" exact>
                  <WEBBROWSERSSO />
                </Route>
                <Route
                  path="/webBrowser/ssr-hydrate"
                  key="/webBrowser/ssr-hydrate"
                  exact
                >
                  <WEBBROWSERSSRHYDRATE />
                </Route>
                <Route
                  path="/webBrowser/tcp-tls"
                  key="/webBrowser/tcp-tls"
                  exact
                >
                  <WEBBROWSERTCPTLS />
                </Route>
                <Route path="/webpack" key="/webpack" exact>
                  <WEBPACK />
                </Route>
                <Route
                  path="/webpack/micro-front"
                  key="/webpack/micro-front"
                  exact
                >
                  <WEBPACKMICROFRONT />
                </Route>
                <Route
                  path="/webpack/perfomance"
                  key="/webpack/perfomance"
                  exact
                >
                  <WEBPACKPERFOMANCE />
                </Route>
                <Route path="/webpack/progress" key="/webpack/progress" exact>
                  <WEBPACKPROGRESS />
                </Route>
              </Suspense>
            </BasePage>
          </Route>
        </Switch>
      </BottomNav>
    </Route>
  );
};
