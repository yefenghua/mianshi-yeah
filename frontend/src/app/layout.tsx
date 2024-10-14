"use client";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import "./globals.css";
import React, {useCallback, useEffect} from "react";
import BasicLayout from "@/layouts/BasicLayout";
import {Provider, useDispatch} from "react-redux";
import store, {AppDispatch} from "@/stores";
import {getLoginUserUsingGet} from "@/api/userController";
import {setLoginUser} from "@/stores/loginUser";
import AccessLayout from "@/app/access/AssessLayout";

const InitLayout: React.FC<
    Readonly<{
        children: React.ReactNode;
    }>
> = ({children}) => {
    const dispatch = useDispatch<AppDispatch>();

    const doInitLoginUser = useCallback(async () => {
        const res = await getLoginUserUsingGet();
        if (res.data) {
            dispatch(setLoginUser(res.data));
        } else {
            // setTimeout(() => {
            //   const testUser = {
            //     userName: "测试登录",
            //     id: 1,
            //     userAvatar: "https://www.code-nav.cn/logo.png",
            //     userRole: AccessEnum.ADMIN,
            //   };
            //   dispatch(setLoginUser(testUser));
            // }, 3000);
        }
        console.log("init");
    }, []);

    useEffect(() => {
        doInitLoginUser();
    }, []);
    return children;
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh">
        <body>
        <AntdRegistry>
            <Provider store={store}>
                <InitLayout>
                    <BasicLayout>
                        <AccessLayout>{children}</AccessLayout>
                    </BasicLayout>
                </InitLayout>
            </Provider>
        </AntdRegistry>
        </body>
        </html>
    );
}
