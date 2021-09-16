import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {dirOutput} from './output'
const initialState:{
  routes:Array<singleCata | string>
} = {
  routes:dirOutput.keyWords
} 
function keyWordsReducer(state = initialState, action: { type: string }) {
  // 检查 reducer 是否关心这个 action
  if (action.type === 'counter/increment') {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      // value: state.value + 1
    }
  }
  // 返回原来的 state 不变
  return state
}

export const store = configureStore({
  reducer: keyWordsReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type singleCata = {
  keyWords:Array<singleCata | string>,
  mdPath?:string;
  routePath?:string;
  label:string;
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const routes = initialState.routes