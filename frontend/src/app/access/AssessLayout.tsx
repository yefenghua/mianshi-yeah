import React from "react";
import {usePathname} from "next/navigation";
import {useSelector} from "react-redux";
import {RootState} from "@/stores";
import {findAllMenuItemByPath} from "../../../config/menu";
import Access_Enum from "@/app/access/accessEnum";
import checkAccess from "@/app/access/checkAccess";
import Forbidden from "@/app/forbidden";

const AccessLayout: React.FC<
    Readonly<{
        children: React.ReactNode;
    }>
> = ({children}) => {
    const pathname = usePathname();
    const loginUser = useSelector((state: RootState) => state.loginUser);
    const menu = findAllMenuItemByPath(pathname);
    const needAccess = menu?.access ?? Access_Enum.NOT_LOGIN;
    const canAccess = checkAccess(loginUser, needAccess);
    if (!canAccess) return <Forbidden/>;
    return children;
};

export default AccessLayout;
