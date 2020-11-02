(async () => {

    const data = await (await fetch("./demo.json")).json();

    const n = data.length;

    const validatePic = document.getElementById("validatePic");


    function main () {
        const random = Math.floor(Math.random() * n);
        validatePic.src = data[random].validatePic;

    }

    main();


    validatePic.addEventListener("click", main )



})();