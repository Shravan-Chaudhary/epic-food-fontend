import "antd/dist/reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AntdProvider from "../lib/providers/AntdProvider";
import StyledComponentsRegistry from "../lib/providers/AntdRegistry";
import ReactQueryProvider from "../lib/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epic Food | Admin",
  description: "Food delivery for gamers",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
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
        </ReactQueryProvider>
      </body>
    </html>
  );
}
