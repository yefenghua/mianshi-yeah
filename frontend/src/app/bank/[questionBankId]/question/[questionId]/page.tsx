"use server";
import "./index.css";
import {Flex, Menu, message} from "antd";
import {getQuestionBankVoByIdUsingGet} from "@/api/questionBankController";
import Title from "antd/es/typography/Title";
import {getQuestionVoByIdUsingGet} from "@/api/questionController";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import QuestionCard from "@/components/QuestionCard";
import Link from "next/link";

export default async function BankQuestionPage({params}) {
    const {questionBankId, questionId} = params;
    let bank = undefined;

    try {
        const res = await getQuestionBankVoByIdUsingGet({
            id: questionBankId,
            needQueryQuestionList: true,
            pageSize: 200
        });
        bank = res.data;
    } catch (e) {
        message.error("获取题目列表失败：" + e.message);
    }

    if (!bank) {
        return <div>获取题库详情失败，请刷新重试</div>
    }

    let question = undefined;

    try {
        const res = await getQuestionVoByIdUsingGet({
            id: questionId,
        });
        question = res.data;
    } catch (e) {
        message.error("获取题目列表失败：" + e.message);
    }

    if (!question) {
        return <div>获取题目详情失败，请刷新重试</div>
    }

    const questionMenuItemList = (bank.questionPage?.records ?? []).map(q => {
        return {
            label: <Link href={`/bank/${questionBankId}/question/${q.id}`}>{q.title}</Link>,
            key: q.id
        }
    });

    return <div id="bankQuestionPage" className="max-width-content">
        <Flex gap={24}>
            <Sider width={240} theme={"light"} style={{padding: "24px 0"}}>
                <Title level={4} style={{padding: '0 20px'}}>{bank.title}</Title>
                <Menu items={questionMenuItemList} selectedKeys={question.id}/>
            </Sider>
            <Content>
                <QuestionCard question={question}/>
            </Content>
        </Flex>
    </div>
}
