console.log('hello!')

const newBox= document.createElement("div");
newBox.classList.add("box");
const containerBox = document.querySelector("container-boxes");
containerBox.appendChild(newBox)