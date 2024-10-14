"use server";
import "./index.css";
import {message} from "antd";
import {getQuestionVoByIdUsingGet} from "@/api/questionController";
import QuestionCard from "@/components/QuestionCard";
import Link from "next/link";

export default async function QuestionPage({params}) {
    const {questionBankId, questionId} = params;

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


    return <div id="questionPage" className="max-width-content">
        <QuestionCard question={question}/>
    </div>
}
