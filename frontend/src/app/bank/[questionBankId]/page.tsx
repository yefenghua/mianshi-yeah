"use server";
import "./index.css";
import {Avatar, Button, Card, message} from "antd";
import {getQuestionBankVoByIdUsingGet} from "@/api/questionBankController";
import Title from "antd/es/typography/Title";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/lib/typography/Paragraph";
import QuestionList from "@/components/QuestionList";

export default async function BankPage({params}) {
    const {questionBankId} = params;
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

    let firstQuestionId;
    if (bank?.questionPage?.records && bank.questionPage.records.length > 0) {
        firstQuestionId = bank.questionPage.records[0].id;
    }

    return <div id="bankPage" className="max-width-content">
        <Card>
            <Meta
                avatar={<Avatar src={bank.picture} size={72}/>}
                title={<Title level={3} style={{marginBottom: 0}}>{bank.title}</Title>}
                description={
                    <>
                        <Paragraph
                            type="secondary"
                        >
                            {bank.description}
                        </Paragraph>
                        <Button type={"primary"} shape={"round"}
                                href={`/bank/${questionBankId}/question/${firstQuestionId}`} target={"_blank"}
                                disabled={!firstQuestionId}>
                            开始刷题
                        </Button>
                    </>
                }
            />

        </Card>
        <div style={{marginBottom: 16}}/>
        <QuestionList questionList={bank.questionPage?.records ?? []}
                      questionBankId={questionBankId}
                      cardTitle={`题目列表（${bank.questionPage?.total || 0}）`}/>
    </div>
}
