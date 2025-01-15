console.log(document);

const myBtnEl = document.querySelector("button");
console.log(myBtnEl);

myBtnEl.addEventListener("click", (event) => {

    console.log(event);
  //  alert("Hej");
  
  myImageObject.forEach(imageObject => {
    console.log(imageObject);

    const newImgEl = document.createElement("img");
    newImgEl.setAttribute("src", imageObject.src);
    newImgEl.setAttribute("alt", imageObject.altText);

    newImgEl.style.border = "${imageObject.textColor} solid 5px";

    collageContainerEl.appendChild(newImgEl);
});
});
//appendchild()  deletchild()
//const newEl = document.createElement("img");

const collageContainerEl = document.querySelector(".collage-container");
//collageContainerEl.appendChild(newEl);
//collageContainerEl.deletChild(newEl);

const myImageObject = [
    {
        src: "img/dice4",
        altText: "Cute",
        textColor: "blue"
    },
    {
        src: "img/dice5",
        altText: "Cute",
        textColor: "red"
    },
    {
        src: "img/dice4",
        altText: "Living room",
        textColor: "aqua"
    }
]

