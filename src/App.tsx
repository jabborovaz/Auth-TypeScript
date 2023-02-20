import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/reset.css";
import { Auth, Todos, Users } from "./router/router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="w-[35%] mx-auto">
                  <div className="loader">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
              }
            >
              <Auth />
            </Suspense>
          }
        />

        <Route
          path="todos"
          element={
            <Suspense
              fallback={
                <div className="w-[35%] mx-auto">
                  <div className="loader">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
              }
            >
              <Todos />
            </Suspense>
          }
        />

        <Route
          path="users"
          element={
            <Suspense
              fallback={
                <div className="w-[35%] mx-auto">
                  <div className="loader">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
              }
            >
              <Users />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
