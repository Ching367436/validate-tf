(async () => {
    const width = 16, height = 20, step = 13;

    const model = await tf.loadLayersModel(`./model-js/model.json`)

    const validateCode = document.getElementById("validateCode");

    const validatePic = document.getElementById("validatePic");

    function int_to_ch(n) {
        n = Number(n)

        if (n < 10)
            return n;
        return String.fromCharCode(n + 55);
    }

    const c = document.createElement("canvas")
    c.height = height;
    c.width = width;
    document.head.appendChild(c);

    const ctx = c.getContext("2d")

    for (let i = 0; i < 4; i++) {
        ctx.drawImage(validatePic, -5 - step * i, -1)
        data = tf.argMax(model.predict(tf.browser.fromPixels(c).expandDims(0)), 1).dataSync();
        data = int_to_ch(data)
        validateCode.value += data;
    }
})();