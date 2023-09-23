import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice';
import { dataSearchReducer, launchDataReducer } from '../features/dataSearch/dataSearchSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    dataSearch: dataSearchReducer,
    launchData: launchDataReducer
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch