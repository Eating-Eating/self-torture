
import {SelfTorture} from '@/pages/SelfTorture'
import {BottomNav} from '@/pages/shared/BottomNav'
import { Route, Switch,  } from "react-router-dom";
import BasePage from '@/pages/shared/BasePage'
import { lazy, Suspense } from 'react';

const CSS = lazy<any>(() => import('./pages/markdown/css/index.md'));
const CSSFLEX = lazy<any>(() => import('./pages/markdown/css/flex.md'));
const JAVASCRIPT = lazy<any>(() => import('./pages/markdown/javascript/index.md'));
const JAVASCRIPTCLOSURE = lazy<any>(() => import('./pages/markdown/javascript/closure.md'));
const JAVASCRIPTDEBOUNCE = lazy<any>(() => import('./pages/markdown/javascript/debounce.md'));
const JAVASCRIPTDEEPCLONE = lazy<any>(() => import('./pages/markdown/javascript/deepClone.md'));
const JAVASCRIPTES = lazy<any>(() => import('./pages/markdown/javascript/es6.md'));
const JAVASCRIPTPROMISE = lazy<any>(() => import('./pages/markdown/javascript/promise.md'));
const JAVASCRIPTPROTOTYPE = lazy<any>(() => import('./pages/markdown/javascript/prototype.md'));
const PROJECTS = lazy<any>(() => import('./pages/markdown/projects/index.md'));
const PROJECTSLINKTIME = lazy<any>(() => import('./pages/markdown/projects/linktime.md'));
const PROJECTSOKR = lazy<any>(() => import('./pages/markdown/projects/okr.md'));
const PROJECTSTORTURE = lazy<any>(() => import('./pages/markdown/projects/torture.md'));
const PROJECTSUIFRAMEWORK = lazy<any>(() => import('./pages/markdown/projects/ui-framework.md'));
const REACT = lazy<any>(() => import('./pages/markdown/react/index.md'));
const REACTDIFF = lazy<any>(() => import('./pages/markdown/react/diff.md'));
const REACTFIBER = lazy<any>(() => import('./pages/markdown/react/fiber.md'));
const REACTHOOKS = lazy<any>(() => import('./pages/markdown/react/hooks/index.md'));
const REACTHOOKSUSEEFFECT = lazy<any>(() => import('./pages/markdown/react/hooks/useEffect.md'));
const REACTHOOKSUSESTATE = lazy<any>(() => import('./pages/markdown/react/hooks/useState.md'));
const REACTPERFORMANCE = lazy<any>(() => import('./pages/markdown/react/performance.md'));
const REACTREDUX = lazy<any>(() => import('./pages/markdown/react/redux.md'));
const VUE = lazy<any>(() => import('./pages/markdown/vue/index.md'));
const VUEDIFF = lazy<any>(() => import('./pages/markdown/vue/diff.md'));
const VUEDIRECTIVES = lazy<any>(() => import('./pages/markdown/vue/directives.md'));
const VUEKEY = lazy<any>(() => import('./pages/markdown/vue/key.md'));
const VUENEXTTICK = lazy<any>(() => import('./pages/markdown/vue/nextTick.md'));
const VUEVUEX = lazy<any>(() => import('./pages/markdown/vue/vuex.md'));
const VUEWATCH = lazy<any>(() => import('./pages/markdown/vue/watch.md'));
const WEBBROWSER = lazy<any>(() => import('./pages/markdown/webBrowser/index.md'));
const WEBBROWSERCOOKIE = lazy<any>(() => import('./pages/markdown/webBrowser/cookie.md'));
const WEBBROWSERCROSSPAGE = lazy<any>(() => import('./pages/markdown/webBrowser/crossPage/index.md'));
const WEBBROWSERCROSSPAGEBROADCASTCHANNE = lazy<any>(() => import('./pages/markdown/webBrowser/crossPage/Broadcast Channe.md'));
const WEBBROWSERCROSSPAGEINDEXEDDB = lazy<any>(() => import('./pages/markdown/webBrowser/crossPage/IndexedDB.md'));
const WEBBROWSERCROSSPAGELOCALSTORAGE = lazy<any>(() => import('./pages/markdown/webBrowser/crossPage/LocalStorage.md'));
const WEBBROWSERCROSSPAGESERVICEWORKER = lazy<any>(() => import('./pages/markdown/webBrowser/crossPage/Service Worker.md'));
const WEBBROWSERCROSSPAGESHAREDWORKER = lazy<any>(() => import('./pages/markdown/webBrowser/crossPage/Shared Worker.md'));
const WEBBROWSERCROSSPAGEWINDOWOPENOPENER = lazy<any>(() => import('./pages/markdown/webBrowser/crossPage/window open opener.md'));
const WEBBROWSERGARBAGECYCLE = lazy<any>(() => import('./pages/markdown/webBrowser/garbageCycle/index.md'));
const WEBBROWSERGARBAGECYCLEMEMORYLEAK = lazy<any>(() => import('./pages/markdown/webBrowser/garbageCycle/memoryLeak.md'));
const WEBBROWSERPERFORMANCE = lazy<any>(() => import('./pages/markdown/webBrowser/performance.md'));
const WEBBROWSERPWA = lazy<any>(() => import('./pages/markdown/webBrowser/pwa.md'));
const WEBBROWSERSAFETY = lazy<any>(() => import('./pages/markdown/webBrowser/safety/index.md'));
const WEBBROWSERSAFETYCSRF = lazy<any>(() => import('./pages/markdown/webBrowser/safety/csrf.md'));
const WEBBROWSERSAFETYXSS = lazy<any>(() => import('./pages/markdown/webBrowser/safety/xss.md'));
const WEBBROWSERSSO = lazy<any>(() => import('./pages/markdown/webBrowser/sso.md'));
const WEBBROWSERSSRHYDRATE = lazy<any>(() => import('./pages/markdown/webBrowser/ssr-hydrate.md'));
const WEBBROWSERTCPTLS = lazy<any>(() => import('./pages/markdown/webBrowser/tcp-tls.md'));
const WEBPACK = lazy<any>(() => import('./pages/markdown/webpack/index.md'));
const WEBPACKMICROFRONT = lazy<any>(() => import('./pages/markdown/webpack/micro-front.md'));
const WEBPACKPERFOMANCE = lazy<any>(() => import('./pages/markdown/webpack/perfomance.md'));
const WEBPACKPROGRESS = lazy<any>(() => import('./pages/markdown/webpack/progress.md'));
export const Routes = ()=>{
  return (
    <Route>
    <BottomNav>
      <Switch>
        <Route path="/selfTorture" exact>
          <SelfTorture/>
        </Route>
        <Route>
        <BasePage>
        <Route path="/css" key="/css" exact>{<Suspense fallback={<div>loading</div>}><CSS/></Suspense>}</Route>
<Route path="/css/flex" key="/css/flex" exact>{<Suspense fallback={<div>loading</div>}><CSSFLEX/></Suspense>}</Route>
<Route path="/javascript" key="/javascript" exact>{<Suspense fallback={<div>loading</div>}><JAVASCRIPT/></Suspense>}</Route>
<Route path="/javascript/closure" key="/javascript/closure" exact>{<Suspense fallback={<div>loading</div>}><JAVASCRIPTCLOSURE/></Suspense>}</Route>
<Route path="/javascript/debounce" key="/javascript/debounce" exact>{<Suspense fallback={<div>loading</div>}><JAVASCRIPTDEBOUNCE/></Suspense>}</Route>
<Route path="/javascript/deepClone" key="/javascript/deepClone" exact>{<Suspense fallback={<div>loading</div>}><JAVASCRIPTDEEPCLONE/></Suspense>}</Route>
<Route path="/javascript/es6" key="/javascript/es6" exact>{<Suspense fallback={<div>loading</div>}><JAVASCRIPTES/></Suspense>}</Route>
<Route path="/javascript/promise" key="/javascript/promise" exact>{<Suspense fallback={<div>loading</div>}><JAVASCRIPTPROMISE/></Suspense>}</Route>
<Route path="/javascript/prototype" key="/javascript/prototype" exact>{<Suspense fallback={<div>loading</div>}><JAVASCRIPTPROTOTYPE/></Suspense>}</Route>
<Route path="/projects" key="/projects" exact>{<Suspense fallback={<div>loading</div>}><PROJECTS/></Suspense>}</Route>
<Route path="/projects/linktime" key="/projects/linktime" exact>{<Suspense fallback={<div>loading</div>}><PROJECTSLINKTIME/></Suspense>}</Route>
<Route path="/projects/okr" key="/projects/okr" exact>{<Suspense fallback={<div>loading</div>}><PROJECTSOKR/></Suspense>}</Route>
<Route path="/projects/torture" key="/projects/torture" exact>{<Suspense fallback={<div>loading</div>}><PROJECTSTORTURE/></Suspense>}</Route>
<Route path="/projects/ui-framework" key="/projects/ui-framework" exact>{<Suspense fallback={<div>loading</div>}><PROJECTSUIFRAMEWORK/></Suspense>}</Route>
<Route path="/react" key="/react" exact>{<Suspense fallback={<div>loading</div>}><REACT/></Suspense>}</Route>
<Route path="/react/diff" key="/react/diff" exact>{<Suspense fallback={<div>loading</div>}><REACTDIFF/></Suspense>}</Route>
<Route path="/react/fiber" key="/react/fiber" exact>{<Suspense fallback={<div>loading</div>}><REACTFIBER/></Suspense>}</Route>
<Route path="/react/hooks" key="/react/hooks" exact>{<Suspense fallback={<div>loading</div>}><REACTHOOKS/></Suspense>}</Route>
<Route path="/react/hooks/useEffect" key="/react/hooks/useEffect" exact>{<Suspense fallback={<div>loading</div>}><REACTHOOKSUSEEFFECT/></Suspense>}</Route>
<Route path="/react/hooks/useState" key="/react/hooks/useState" exact>{<Suspense fallback={<div>loading</div>}><REACTHOOKSUSESTATE/></Suspense>}</Route>
<Route path="/react/performance" key="/react/performance" exact>{<Suspense fallback={<div>loading</div>}><REACTPERFORMANCE/></Suspense>}</Route>
<Route path="/react/redux" key="/react/redux" exact>{<Suspense fallback={<div>loading</div>}><REACTREDUX/></Suspense>}</Route>
<Route path="/vue" key="/vue" exact>{<Suspense fallback={<div>loading</div>}><VUE/></Suspense>}</Route>
<Route path="/vue/diff" key="/vue/diff" exact>{<Suspense fallback={<div>loading</div>}><VUEDIFF/></Suspense>}</Route>
<Route path="/vue/directives" key="/vue/directives" exact>{<Suspense fallback={<div>loading</div>}><VUEDIRECTIVES/></Suspense>}</Route>
<Route path="/vue/key" key="/vue/key" exact>{<Suspense fallback={<div>loading</div>}><VUEKEY/></Suspense>}</Route>
<Route path="/vue/nextTick" key="/vue/nextTick" exact>{<Suspense fallback={<div>loading</div>}><VUENEXTTICK/></Suspense>}</Route>
<Route path="/vue/vuex" key="/vue/vuex" exact>{<Suspense fallback={<div>loading</div>}><VUEVUEX/></Suspense>}</Route>
<Route path="/vue/watch" key="/vue/watch" exact>{<Suspense fallback={<div>loading</div>}><VUEWATCH/></Suspense>}</Route>
<Route path="/webBrowser" key="/webBrowser" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSER/></Suspense>}</Route>
<Route path="/webBrowser/cookie" key="/webBrowser/cookie" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERCOOKIE/></Suspense>}</Route>
<Route path="/webBrowser/crossPage" key="/webBrowser/crossPage" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERCROSSPAGE/></Suspense>}</Route>
<Route path="/webBrowser/crossPage/Broadcast Channe" key="/webBrowser/crossPage/Broadcast Channe" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERCROSSPAGEBROADCASTCHANNE/></Suspense>}</Route>
<Route path="/webBrowser/crossPage/IndexedDB" key="/webBrowser/crossPage/IndexedDB" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERCROSSPAGEINDEXEDDB/></Suspense>}</Route>
<Route path="/webBrowser/crossPage/LocalStorage" key="/webBrowser/crossPage/LocalStorage" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERCROSSPAGELOCALSTORAGE/></Suspense>}</Route>
<Route path="/webBrowser/crossPage/Service Worker" key="/webBrowser/crossPage/Service Worker" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERCROSSPAGESERVICEWORKER/></Suspense>}</Route>
<Route path="/webBrowser/crossPage/Shared Worker" key="/webBrowser/crossPage/Shared Worker" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERCROSSPAGESHAREDWORKER/></Suspense>}</Route>
<Route path="/webBrowser/crossPage/window open opener" key="/webBrowser/crossPage/window open opener" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERCROSSPAGEWINDOWOPENOPENER/></Suspense>}</Route>
<Route path="/webBrowser/garbageCycle" key="/webBrowser/garbageCycle" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERGARBAGECYCLE/></Suspense>}</Route>
<Route path="/webBrowser/garbageCycle/memoryLeak" key="/webBrowser/garbageCycle/memoryLeak" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERGARBAGECYCLEMEMORYLEAK/></Suspense>}</Route>
<Route path="/webBrowser/performance" key="/webBrowser/performance" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERPERFORMANCE/></Suspense>}</Route>
<Route path="/webBrowser/pwa" key="/webBrowser/pwa" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERPWA/></Suspense>}</Route>
<Route path="/webBrowser/safety" key="/webBrowser/safety" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERSAFETY/></Suspense>}</Route>
<Route path="/webBrowser/safety/csrf" key="/webBrowser/safety/csrf" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERSAFETYCSRF/></Suspense>}</Route>
<Route path="/webBrowser/safety/xss" key="/webBrowser/safety/xss" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERSAFETYXSS/></Suspense>}</Route>
<Route path="/webBrowser/sso" key="/webBrowser/sso" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERSSO/></Suspense>}</Route>
<Route path="/webBrowser/ssr-hydrate" key="/webBrowser/ssr-hydrate" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERSSRHYDRATE/></Suspense>}</Route>
<Route path="/webBrowser/tcp-tls" key="/webBrowser/tcp-tls" exact>{<Suspense fallback={<div>loading</div>}><WEBBROWSERTCPTLS/></Suspense>}</Route>
<Route path="/webpack" key="/webpack" exact>{<Suspense fallback={<div>loading</div>}><WEBPACK/></Suspense>}</Route>
<Route path="/webpack/micro-front" key="/webpack/micro-front" exact>{<Suspense fallback={<div>loading</div>}><WEBPACKMICROFRONT/></Suspense>}</Route>
<Route path="/webpack/perfomance" key="/webpack/perfomance" exact>{<Suspense fallback={<div>loading</div>}><WEBPACKPERFOMANCE/></Suspense>}</Route>
<Route path="/webpack/progress" key="/webpack/progress" exact>{<Suspense fallback={<div>loading</div>}><WEBPACKPROGRESS/></Suspense>}</Route>
        </BasePage>
        </Route>
      </Switch>
    </BottomNav></Route>
  )
}