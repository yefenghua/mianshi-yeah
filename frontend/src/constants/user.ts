// 默认用户
import Access_Enum from "@/app/access/accessEnum";

const DEFAULT_USER: API.LoginUserVO = {
    userName: "未登录",
    userProfile: "暂无简介",
    userAvatar: "/assets/notLoginUser.png",
    userRole: Access_Enum.NOT_LOGIN,
};

export {DEFAULT_USER};