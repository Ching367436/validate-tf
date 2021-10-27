(() => {
        if (document.querySelectorAll("#validateCode").length === 0)
            return false;
        if (typeof window.Ching367436_validate !== 'undefined')
            return false;
        window.Ching367436_validate = true;

        const tfjs = document.createElement("script");
        tfjs.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.7.0/dist/tf.min.js";
        tfjs.setAttribute("async", "");
        tfjs.addEventListener("load", () => {
            const main = document.createElement("script");
            main.src = "https://Ching367436.github.io/validate-tf/bookmark/model.js";
            document.head.appendChild(main);
        })
        document.head.appendChild(tfjs);

})();
