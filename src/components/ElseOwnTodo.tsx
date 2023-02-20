import React, { ChangeEvent, useEffect, useState } from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../rtqApi/rtqTodos";
import { TTodo } from "../reducers/todos";

type Props = {};

function ElseOwnTodo({}: Props) {
  const { data, isLoading, isFetching, isError } = useGetTodosQuery();
  const [deleteTodo, { isLoading: deleteLoading }] = useDeleteTodoMutation();
  const [updateTodo, { isLoading: editLoading }] = useUpdateTodoMutation();
  const [addTodo, { isLoading: addLoading }] = useAddTodoMutation();
  const [newTodo, setNewTodo] = useState<TTodo>({
    id: new Date().getTime(),
    complete: false,
    title: "",
    message: "",
  });
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const [selected, setSelected] = useState<"all" | "active" | "complete">(
    "all"
  );

  console.log(data);

  return (
    <div className="w-full">
      <div>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTodo({ ...newTodo, title: e.target.value })
          }
          placeholder="title"
          id="title"
          type="text"
          className="border rounded border-red-500 m-2 px-2 p-1"
        />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTodo({ ...newTodo, message: e.target.value })
          }
          placeholder="message"
          id="message"
          type="text"
          className="border rounded border-red-500 m-2 px-2 p-1"
        />
        <button
          onClick={() => {
            addTodo(newTodo);
          }}
          className=" m-2 p-1 border rounded border-blue-500 bg-blue-400"
        >
          Add
        </button>
      </div>
      <div>
        <input
          type="search"
          className="border rounded border-red-500 m-2 px-2 p-1"
          placeholder="Search..."
        />
        <select
          name="select"
          id=""
          className="border rounded border-blue-500 bg-blue-400 p-1"
        >
          <option value="all">All</option>
          <option value="complete">complete</option>
          <option value="active">active</option>
        </select>
      </div>
      {isLoading ||
        editLoading ||
        deleteLoading ||
        (addLoading && (
          <div className="w-[35%] mx-auto">
            <div className="loader">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        ))}

      {data?.map((elem: any) => {
        let updateObj = {
          id: elem.id,
          title: elem.title,
          message: elem.message,
          complete: elem.complete,
        };
        return (
          <div
            key={elem.id}
            className="w-[400px] border rounded border-gray-800 m-2 mx-auto"
          >
            <h2 style={elem.complete ? { textDecoration: "line-through" } : {}}>
              {elem.title}
            </h2>
            <p>{elem.message}</p>
            <div className="flex flex-col space-y-2">
              <input className="px-2 py-1 border rounded-md" />
              <input className="px-2 py-1 border rounded-md" />
            </div>
            <button className="border border-slate-400 bg-white">
              complete
            </button>
            <button
              onClick={() => {}}
              className="border rounded border-slate-500 bg-slate-500 p-1 my-2 mx-2"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTodo(elem.id)}
              className="border rounded border-orange-500 bg-orange-500 p-1"
            >
              Del
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ElseOwnTodo;
