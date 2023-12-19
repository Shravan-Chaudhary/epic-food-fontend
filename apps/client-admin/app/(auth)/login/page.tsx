"use client";
import { Layout } from "antd";
import LoginForm from "../../../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Layout style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <LoginForm />
      </Layout>
    </>
  );
};

export default LoginPage;
