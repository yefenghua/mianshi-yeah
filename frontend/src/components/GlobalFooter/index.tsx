import React from "react";
import "./index.css";

export default function GlobalFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <div
            className="global-footer"
        >
            <div>© {currentYear} 面试刷题平台</div>
            <div>
                <a href="https://www.code-nav.cn" target="_blank">
                    作者：叶丰华
                </a>
            </div>
        </div>
    );
}
