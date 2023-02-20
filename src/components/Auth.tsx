import React, { ChangeEvent, useEffect, useState } from "react";
import type { FC } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/reactRedux";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser, LoginObg } from "../reducers/Auth";
import { Button, Checkbox, Form, Input } from "antd";

type Props = {};

function Auth({}: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(registerUser(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onLoginSubmit = (values: any) => {
    console.log("Success:", values);
    dispatch(
      loginUser({
        navigate,
        ...values,
      })
    );
  };

  const onLoginFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="mt-4 mb-7 flex flex-col space-y-4 w-[70%] mx-auto">
        <h2 className="text-xl">Registration</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: "Please input your E-mail!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone number"
            name="phonenumber"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="mb-4 flex flex-col space-y-4 w-[70%] mx-auto">
        <h2 className="text-xl">Login</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onLoginSubmit}
          onFinishFailed={onLoginFailed}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: "Please input your E-mail!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="submit">Login</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Auth;
