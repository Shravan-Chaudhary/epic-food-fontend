import { Alert, Button, Card, Checkbox, Form, Input, Space } from "antd";
import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Credentials } from "../types";
import { login, self } from "../http/api";

const loginUser = async (credentials: Credentials) => {
  const { data } = await login(credentials);
  return data;
};

const getSelf = async () => {
  const { data } = await self();
  return data;
};

const LoginForm = () => {
  const { data: selfData, refetch } = useQuery({
    queryKey: ["self"],
    queryFn: getSelf,
    enabled: false,
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async () => {
      // get self
      refetch();
      console.log("userData: ", selfData);
      //store data in state
      console.log("Logged in successfully");
    },
  });

  return (
    <>
      <Card
        bordered={false}
        style={{ width: 300 }}
        title={
          <Space style={{ width: "100%", justifyContent: "center", fontSize: 18 }}>
            <LockFilled />
            Log in
          </Space>
        }
      >
        <Form onFinish={(values) => mutate({ email: values.username, password: values.password })}>
          {isError && <Alert style={{ marginBottom: 20 }} type="error" message={error.message} />}
          <Form.Item name="username" rules={[{ required: true, message: "Username is required" }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Password is required" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item name="remember">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Link href={"#"}>Forgot Password?</Link>
          </Form.Item>
          <Form.Item>
            <Button loading={isPending} type="primary" htmlType="submit" style={{ width: "100%" }}>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default LoginForm;
