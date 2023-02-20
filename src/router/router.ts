import { lazy } from "react";

export const Todos: any = lazy(() => import("../components/ElseOwnTodo"));
export const Users: any = lazy(() => import("../components/OwnTodo"));
export const Auth: any = lazy(() => import("../components/Auth"));
