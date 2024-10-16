package com.example.mapper;

import com.example.model.entity.Question;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

import java.util.Date;
import java.util.List;

/**
* @author yfh13
* @description 针对表【question(题目)】的数据库操作Mapper
* @createDate 2024-09-28 20:09:57
* @Entity com.example.model.entity.Question
*/
public interface QuestionMapper extends BaseMapper<Question> {

    @Select("select * from question where updateTime >= #{minUpdateTime}")
    List<Question> listQuestionWithDelete(Date minUpdateTime);
}




