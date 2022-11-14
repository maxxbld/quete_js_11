console.log('hello!')

const secondCard = document.querySelector('.second-card');

const newCatImage = document.createElement('img');
newCatImage.src = "https://placekitten.com/408/287";

secondCard.appendChild(newCatImage);