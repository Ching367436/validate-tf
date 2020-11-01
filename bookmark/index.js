(async () => {
    async function appendScript(src, defer = false, async = false) {
        const s = document.createElement("script");
        s.src = src;
        s.defer = defer;
        s.async = async;
        document.head.appendChild(s);
    }

    appendScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.7.0/dist/tf.min.js", async = true);
    appendScript("https://Ching367436.github.io/validate-tf/bookmark/model.js", defer = true);
})();