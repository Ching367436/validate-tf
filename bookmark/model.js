(async () => {
    const width = 16, height = 20, step = 13;

    const model = await tf.loadLayersModel(`https://Ching367436.github.io/validate-tf/model-js/model.json`);

    const validateCode = document.getElementById("validateCode");

    const validatePic = document.getElementById("validatePic");

    validateCode.style.background = "linear-gradient(-37deg, #f8226c, #36b4ff)";
    validateCode.style.color = "#fff";


    function int_to_ch(n) {
        n = Number(n);

        if (n < 10)
            return n;
        return String.fromCharCode(n + 55);
    }

    function predict() {
        const c = document.createElement("canvas");
        c.height = height;
        c.width = width;
        c.style.display = "none";
        document.body.appendChild(c);

        const ctx = c.getContext("2d");

        // crop image
        let res = "";
        for (let i = 0; i < 4; i++) {
            ctx.drawImage(validatePic, -5 - step * i, -1);
            let data = tf.argMax(model.predict(tf.browser.fromPixels(c).expandDims(0)), 1).dataSync();
            data = int_to_ch(data);
            res += data;
        }

        document.body.removeChild(c);

        return res;
    }

    function main() {

        validateCode.value = predict();

    }

    validatePic.addEventListener("load", main);

    main();

})();