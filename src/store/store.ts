import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todos";
import authReducer from "../reducers/Auth";
import { rtqTodoApi } from "../rtqApi/rtqTodos";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReducer,
    [rtqTodoApi.reducerPath]: rtqTodoApi.reducer,
  },
  middleware: (getGetDefaultMiddleware) =>
    getGetDefaultMiddleware().concat(rtqTodoApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
