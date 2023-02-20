import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface Todo {
  id: number | string;
  title: string;
  message: string;
  complete: boolean;
}

export type TodosResponse = Todo[];

export const rtqTodoApi = createApi({
  reducerPath: "Todos",
  baseQuery: fetchBaseQuery({ baseUrl: "http://2.56.213.92:5001/" }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    getTodos: build.query<TodosResponse, void>({
      query: () => "/todos",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todo", id } as const)),
              { type: "Todo", id: "LIST" },
            ]
          : [{ type: "Todo", id: "LIST" }],
    }),
    addTodo: build.mutation<Todo, Partial<Todo>>({
      query(body) {
        return {
          url: `/todos`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
    updateTodo: build.mutation<Todo, Partial<Todo>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/todos/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Todo", id }],
    }),
    deleteTodo: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `todos/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Todo", id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = rtqTodoApi;
