"use client";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {LoginForm, ProForm, ProFormText} from "@ant-design/pro-components";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {userLoginUsingPost} from "@/api/userController";
import {message} from "antd";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/stores";
import {setLoginUser} from "@/stores/loginUser";
import {useRouter} from "next/navigation";

const UserLoginPage: React.FC = () => {
    const [form] = ProForm.useForm();
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const doSubmit = async (values: API.UserLoginRequest) => {
        try {
            const res = await userLoginUsingPost(values);
            if (res.data) {
                message.success("登录成功");
                dispatch(setLoginUser(res.data));
                router.replace("/");
                form.resetFields();
            }
        } catch (e) {
            message.error("登录失败：" + e.message);
        }
    };

    return (
        <div id="userLoginPage">
            <LoginForm
                form={form}
                logo={
                    <Image src="/assets/logo.png" alt="面试耶" height={44} width={44}/>
                }
                title="面试耶 - 用户登录"
                subTitle="程序猿面试刷题网站"
                onFinish={doSubmit}
            >
                <ProFormText
                    name="userAccount"
                    fieldProps={{
                        size: "large",
                        prefix: <UserOutlined/>,
                    }}
                    placeholder={"请输入用户账号"}
                    rules={[
                        {
                            required: true,
                            message: "请输入用户账号!",
                        },
                    ]}
                />
                <ProFormText.Password
                    name="userPassword"
                    fieldProps={{
                        size: "large",
                        prefix: <LockOutlined/>,
                    }}
                    placeholder={"请输入密码"}
                    rules={[
                        {
                            required: true,
                            message: "请输入密码！",
                        },
                    ]}
                />
                <div
                    style={{
                        marginBlockEnd: 24,
                        textAlign: "end",
                    }}
                >
                    还没有账号？
                    <Link href={"user/register"}>去注册</Link>
                </div>
            </LoginForm>
        </div>
    );
};

export default UserLoginPage;
