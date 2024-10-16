package com.example.model.dto.questionBankQuestion;

import lombok.Data;

import java.io.Serializable;

/**
 * 移除题目
 */
@Data
public class QuestionBankQuestionRemoveRequest implements Serializable {
    /**
     * 题库 id
     */
    private Long questionBankId;

    /**
     * 题目 id
     */
    private Long questionId;

    private static final long serialVersionUID = 1L;
}
