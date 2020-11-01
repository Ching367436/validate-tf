// ==UserScript==
// @name         驗證碼自動
// @namespace    https://ching367436.github.io/
// @version      1.1
// @description  校務行政系統驗證碼自動 tf
// @author       Ching367436
// @match        http://210.60.107.251/tcfsh/Login.action*
// @match        http://210.60.107.250/storx/Portal.do*
// @match        https://sschool.tp.edu.tw/Login.action*
// @grant        none
// ==/UserScript==


(() => {
    function appendScript(src) {
        const s = document.createElement("script");
        s.src = src;
        s.defer = true;
        document.head.appendChild(s);
    }
    appendScript("https://Ching367436.github.io/validate-tf/bookmark/index.js");
})();