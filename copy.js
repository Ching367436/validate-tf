document.querySelector("#copy").addEventListener("click", () => {
    // copy bookmark script
    navigator.clipboard.writeText(document.getElementById('bookmark').value)
})