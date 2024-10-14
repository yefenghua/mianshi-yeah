"use server";
import "./index.css";
import Title from "antd/es/typography/Title";
import {Flex, message} from "antd";
import {listQuestionBankVoByPageUsingPost} from "@/api/questionBankController";
import QuestionBankList from "@/components/QuestionBankList";

export default async function BanksPage() {

    let questionBankList = [];

    // 题库数量不多，直接全量获取
    const pageSize=200;
    try {
        const res = await listQuestionBankVoByPageUsingPost({
            pageSize: pageSize,
            sortField: "createTime",
            sortOrder: "descend",
        });
        questionBankList = res.data.records ?? [];
    } catch (e) {
        message.error("获取题库列表失败：" + e.message);
    }

    return <div id="banksPage" className="max-width-content">
        <Flex justify="space-between" align="center">
            <Title level={3}>
                题库大全
            </Title>
        </Flex>
        <QuestionBankList questionBankList={questionBankList}/>
    </div>
}
