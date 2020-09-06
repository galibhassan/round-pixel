const canvas = document.querySelector(".canvas");
const globalStore = new Store()
const myBoard = new Board(canvas, globalStore)


// drawing loop
const update = () => {
    myBoard.draw()
    requestAnimationFrame(update)
}
update()


// save
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", (e)=> {
    html2canvas(canvas, {backgroundColor: null})
    .then(canvasOut => {
        const downloadLink = document.createElement("a")
        downloadLink.href = canvasOut.toDataURL();
        downloadLink.download = "rounded-pixel_art.png";
        downloadLink.click()

    });
})