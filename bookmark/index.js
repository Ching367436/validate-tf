(() => {
        const tfjs = document.createElement("script");
        tfjs.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js";
        tfjs.setAttribute("async", "");
        tfjs.addEventListener("load", () => {
            const main = document.createElement("script");
            main.src = "https://Ching367436.github.io/validate-tf/bookmark/model.js";
            document.head.appendChild(main);
        })
        document.head.appendChild(tfjs);

})();
