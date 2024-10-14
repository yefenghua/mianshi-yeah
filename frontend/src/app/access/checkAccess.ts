import Access_Enum from "@/app/access/accessEnum";

const checkAccess = (
    loginUser: API.LoginUserVO,
    needAccess = Access_Enum.NOT_LOGIN,
) => {
    const loginUserAccess = loginUser?.userRole ?? Access_Enum.NOT_LOGIN;
    if (needAccess === Access_Enum.NOT_LOGIN) {
        return true;
    }
    if (needAccess === Access_Enum.USER) {
        if (loginUserAccess === Access_Enum.NOT_LOGIN) {
            return false;
        }
    }
    if (needAccess === Access_Enum.ADMIN) {
        if (loginUserAccess !== Access_Enum.ADMIN) {
            return false;
        }
    }
    return true;
};

export default checkAccess;
