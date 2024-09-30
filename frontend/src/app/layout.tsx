import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <AntdRegistry>
          <BasicLayout>{children}</BasicLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
