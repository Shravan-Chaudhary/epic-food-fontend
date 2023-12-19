import { ConfigProvider } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  theme: any;
}

const AntdProvider = ({ children, theme }: Props) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default AntdProvider;
