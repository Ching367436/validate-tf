(() => {
    function appendScript(src) {
        const s = document.createElement("script");
        s.src = src;
        s.defer = true;
        document.head.appendChild(s);
    }

    appendScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.7.0/dist/tf.min.js")
    appendScript("https://Ching367436.github.io/validate-tf/bookmark/model.js");
})();