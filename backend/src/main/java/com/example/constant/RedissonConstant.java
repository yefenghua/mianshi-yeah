package com.example.constant;

/**
 * Redis常量
 */
public interface RedissonConstant {

    // 用户签到记录的RedisKey
    String USER_SIGN_IN_REDIS_KEY_PREFIX = "user:signins";

    /**
     * 获取用户签到记录的Redis Key
     * @param year
     * @param userId
     * @return 拼接好的Redis Key
     */
    static String getUserSignInRedisKeyPrefix(int year, long userId){
        return String.format("%s:%s:%s",USER_SIGN_IN_REDIS_KEY_PREFIX,year,userId);
    }
}
