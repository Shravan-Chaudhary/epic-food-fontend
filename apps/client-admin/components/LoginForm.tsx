import { Button, Card, Checkbox, Form, Input, Space } from "antd";
import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const LoginForm = () => {
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
        <Form>
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
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default LoginForm;
