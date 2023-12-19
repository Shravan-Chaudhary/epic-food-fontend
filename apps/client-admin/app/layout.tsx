import "antd/dist/reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AntdProvider from "./AntdProvider";
import StyledComponentsRegistry from "./AntdRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epic Food",
  description: "Food delivery for gamers",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdProvider
          theme={{
            token: {
              colorPrimary: "#66B933",
              colorBgBase: " #F5F5F5",
              colorLink: "#66B933",
            },
          }}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AntdProvider>
      </body>
    </html>
  );
}
