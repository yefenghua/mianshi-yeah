import {useEffect, useState} from "react";
import {message} from "antd";
import {addUserSignInUsingPost1} from "@/api/userController";

/**
 * 添加用户刷题签到钩子
 * @param props
 * @constructor
 */
const useAddUserSignInRecord = () => {
    const [loading, setLoading] = useState<boolean>(true);

    // 请求后端执行签到
    const doFetch = async () => {
        setLoading(true);
        try {
            await addUserSignInUsingPost1({});
        } catch (e) {
            message.error("签到失败，" + e.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        doFetch();
    }, []);

    return {loading}
};

export default useAddUserSignInRecord;
