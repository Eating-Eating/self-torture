
import {AsyncCompoennt} from './pages/shared/asyncComponent'
import {SelfTorture} from '@/pages/SelfTorture'
import {BottomNav} from '@/pages/shared/BottomNav'
import { Route, Switch,  } from "react-router-dom";
import BasePage from '@/pages/shared/BasePage'

export const Routes = ()=>{
  return (
    <BottomNav>
      <Switch>
        <Route path="/selfTorture" exact>
          <SelfTorture/>
        </Route>
        <BasePage>
        <Route path="/javascript" key="/javascript" exact>{AsyncCompoennt(import("/javascriptindex.md"))}</Route>
<Route path="/javascript/closure" key="/javascript/closure" exact>{AsyncCompoennt(import("./pages/markdown/javascript/closure.md"))}</Route>
<Route path="/javascript/debounce" key="/javascript/debounce" exact>{AsyncCompoennt(import("./pages/markdown/javascript/debounce.md"))}</Route>
<Route path="/javascript/deepClone" key="/javascript/deepClone" exact>{AsyncCompoennt(import("./pages/markdown/javascript/deepClone.md"))}</Route>
<Route path="/javascript/es6" key="/javascript/es6" exact>{AsyncCompoennt(import("./pages/markdown/javascript/es6.md"))}</Route>
<Route path="/javascript/promise" key="/javascript/promise" exact>{AsyncCompoennt(import("./pages/markdown/javascript/promise.md"))}</Route>
<Route path="/javascript/prototype" key="/javascript/prototype" exact>{AsyncCompoennt(import("./pages/markdown/javascript/prototype.md"))}</Route>
<Route path="/projects" key="/projects" exact>{AsyncCompoennt(import("/projectsindex.md"))}</Route>
<Route path="/projects/linktime" key="/projects/linktime" exact>{AsyncCompoennt(import("./pages/markdown/projects/linktime.md"))}</Route>
<Route path="/projects/okr" key="/projects/okr" exact>{AsyncCompoennt(import("./pages/markdown/projects/okr.md"))}</Route>
<Route path="/projects/torture" key="/projects/torture" exact>{AsyncCompoennt(import("./pages/markdown/projects/torture.md"))}</Route>
<Route path="/projects/ui-framework" key="/projects/ui-framework" exact>{AsyncCompoennt(import("./pages/markdown/projects/ui-framework.md"))}</Route>
<Route path="/react" key="/react" exact>{AsyncCompoennt(import("/reactindex.md"))}</Route>
<Route path="/react/diff" key="/react/diff" exact>{AsyncCompoennt(import("./pages/markdown/react/diff.md"))}</Route>
<Route path="/react/fiber" key="/react/fiber" exact>{AsyncCompoennt(import("./pages/markdown/react/fiber.md"))}</Route>
<Route path="/react/hooks" key="/react/hooks" exact>{AsyncCompoennt(import("./pages/markdown/react/hooks.md"))}</Route>
<Route path="/react/key" key="/react/key" exact>{AsyncCompoennt(import("./pages/markdown/react/key.md"))}</Route>
<Route path="/react/performance" key="/react/performance" exact>{AsyncCompoennt(import("./pages/markdown/react/performance.md"))}</Route>
<Route path="/react/redux" key="/react/redux" exact>{AsyncCompoennt(import("./pages/markdown/react/redux.md"))}</Route>
<Route path="/react/update" key="/react/update" exact>{AsyncCompoennt(import("./pages/markdown/react/update.md"))}</Route>
<Route path="/vue" key="/vue" exact>{AsyncCompoennt(import("/vueindex.md"))}</Route>
<Route path="/vue/diff" key="/vue/diff" exact>{AsyncCompoennt(import("./pages/markdown/vue/diff.md"))}</Route>
<Route path="/vue/directives" key="/vue/directives" exact>{AsyncCompoennt(import("./pages/markdown/vue/directives.md"))}</Route>
<Route path="/vue/key" key="/vue/key" exact>{AsyncCompoennt(import("./pages/markdown/vue/key.md"))}</Route>
<Route path="/vue/nextTick" key="/vue/nextTick" exact>{AsyncCompoennt(import("./pages/markdown/vue/nextTick.md"))}</Route>
<Route path="/vue/vuex" key="/vue/vuex" exact>{AsyncCompoennt(import("./pages/markdown/vue/vuex.md"))}</Route>
<Route path="/vue/watch" key="/vue/watch" exact>{AsyncCompoennt(import("./pages/markdown/vue/watch.md"))}</Route>
<Route path="/webBrowser" key="/webBrowser" exact>{AsyncCompoennt(import("/webBrowserindex.md"))}</Route>
<Route path="/webBrowser/cookie" key="/webBrowser/cookie" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/cookie.md"))}</Route>
<Route path="/webBrowser/crossPage" key="/webBrowser/crossPage" exact>{AsyncCompoennt(import("/webBrowser/crossPageindex.md"))}</Route>
<Route path="/webBrowser/crossPage/Broadcast Channe" key="/webBrowser/crossPage/Broadcast Channe" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/crossPage/Broadcast Channe.md"))}</Route>
<Route path="/webBrowser/crossPage/IndexedDB" key="/webBrowser/crossPage/IndexedDB" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/crossPage/IndexedDB.md"))}</Route>
<Route path="/webBrowser/crossPage/LocalStorage" key="/webBrowser/crossPage/LocalStorage" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/crossPage/LocalStorage.md"))}</Route>
<Route path="/webBrowser/crossPage/Service Worker" key="/webBrowser/crossPage/Service Worker" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/crossPage/Service Worker.md"))}</Route>
<Route path="/webBrowser/crossPage/Shared Worker" key="/webBrowser/crossPage/Shared Worker" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/crossPage/Shared Worker.md"))}</Route>
<Route path="/webBrowser/crossPage/window open opener" key="/webBrowser/crossPage/window open opener" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/crossPage/window open opener.md"))}</Route>
<Route path="/webBrowser/garbageCycle" key="/webBrowser/garbageCycle" exact>{AsyncCompoennt(import("/webBrowser/garbageCycleindex.md"))}</Route>
<Route path="/webBrowser/garbageCycle/memoryLeak" key="/webBrowser/garbageCycle/memoryLeak" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/garbageCycle/memoryLeak.md"))}</Route>
<Route path="/webBrowser/performance" key="/webBrowser/performance" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/performance.md"))}</Route>
<Route path="/webBrowser/pwa" key="/webBrowser/pwa" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/pwa.md"))}</Route>
<Route path="/webBrowser/safety" key="/webBrowser/safety" exact>{AsyncCompoennt(import("/webBrowser/safetyindex.md"))}</Route>
<Route path="/webBrowser/safety/csrf" key="/webBrowser/safety/csrf" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/safety/csrf.md"))}</Route>
<Route path="/webBrowser/safety/xss" key="/webBrowser/safety/xss" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/safety/xss.md"))}</Route>
<Route path="/webBrowser/sso" key="/webBrowser/sso" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/sso.md"))}</Route>
<Route path="/webBrowser/ssr-hydrate" key="/webBrowser/ssr-hydrate" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/ssr-hydrate.md"))}</Route>
<Route path="/webBrowser/tcp-tls" key="/webBrowser/tcp-tls" exact>{AsyncCompoennt(import("./pages/markdown/webBrowser/tcp-tls.md"))}</Route>
<Route path="/webpack" key="/webpack" exact>{AsyncCompoennt(import("/webpackindex.md"))}</Route>
<Route path="/webpack/micro-front" key="/webpack/micro-front" exact>{AsyncCompoennt(import("./pages/markdown/webpack/micro-front.md"))}</Route>
<Route path="/webpack/perfomance" key="/webpack/perfomance" exact>{AsyncCompoennt(import("./pages/markdown/webpack/perfomance.md"))}</Route>
<Route path="/webpack/progress" key="/webpack/progress" exact>{AsyncCompoennt(import("./pages/markdown/webpack/progress.md"))}</Route>
        </BasePage>
      </Switch>
    </BottomNav>
  )
}