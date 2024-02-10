(() => {
    function appendScript(src) {
        const s = document.createElement("script");
        s.src = src;
        s.defer = true;
        document.head.appendChild(s);
    }
    appendScript("bookmark/index.js");
})();
