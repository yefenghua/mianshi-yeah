import {MenuDataItem} from "@ant-design/pro-layout";
import {CrownOutlined} from "@ant-design/icons";
import Access_Enum from "@/app/access/accessEnum";

export const menu = [
    {
        path: "/",
        name: "主页",
    },
    {
        path: "/questions",
        name: "题目",
    },
    {
        path: "/banks",
        name: "题库",
    },
    {
        path: "https://mianshiya.com",
        name: "面试鸭",
        target: "_blank",
    },
    {
        path: "/admin",
        name: "管理",
        access: Access_Enum.ADMIN,
        icon: <CrownOutlined/>,
        children: [
            {
                path: "/admin/user",
                name: "用户管理",
                access: Access_Enum.ADMIN,
            },
            {
                path: "/admin/bank",
                name: "题库管理",
                access: Access_Enum.ADMIN,
            },
            {
                path: "/admin/question",
                name: "题目管理",
                access: Access_Enum.ADMIN,
            },
        ],
    },
] as MenuDataItem[];

export const findAllMenuItemByPath = (path: string): MenuDataItem | null => {
    return findMenuItemByPath(menu, path);
};

export const findMenuItemByPath = (
    menus: MenuDataItem[],
    path: string,
): MenuDataItem | null => {
    for (const menu of menus) {
        if (menu.path === path) {
            return menu;
        }
        if (menu.children) {
            const matchedMenuItem = findMenuItemByPath(menu.children, path);
            if (matchedMenuItem) {
                return matchedMenuItem;
            }
        }
    }
    return null;
};
