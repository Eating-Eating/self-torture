import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import routeReducer from './routeSlice'

export type singleCata = {
  keyWords: Array<singleCata | string>,
  mdPath?: string;
  routePath?: string;
  label: string;
}

export interface RootState {
  routes: singleCata[];
}

export const store = configureStore({
  reducer: {
    routes: routeReducer,
  },
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector