import {menu} from "../../../config/menu";
import checkAccess from "@/app/access/checkAccess";

const getAccessibleMenus = (loginUser: API.LoginUserVO, menuItems = menu) => {
    return menuItems.filter((item) => {
        if (!checkAccess(loginUser, item.access)) {
            return false;
        }
        if (item.children) {
            item.children = getAccessibleMenus(loginUser, item.children);
        }
        return true;
    });
};

export default getAccessibleMenus;