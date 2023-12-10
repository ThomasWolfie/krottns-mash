/*
const krot = function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
}
();

const send = function () {
    const counterValue = krot();

    // Check if the counter reaches 100
    if (counterValue === 100) {
        // If counter is 100, replace the image with text
        document.getElementById("main").innerHTML = "Позравляем!!! Вы - настоящий дрочер!!! Отправляю эту инфу Коротковой.";

        // You can also remove the image if needed
         document.getElementById("pic").remove();
         document.getElementById("here").remove();

    } else {
        // If counter is not 100, continue displaying the image
        document.getElementById("here").innerHTML = "Кликнуто раз: " + counterValue;
    }


}
*/


const images = [
    { src: 'img1.jpg', rating: 0 },
    { src: 'img2.jpg', rating: 0 },
    { src: 'img3.jpg', rating: 0 },
    { src: 'img4.jpg', rating: 0 },
    { src: 'img5.jpg', rating: 0 },
    { src: 'img6.jpg', rating: 0 },
    { src: 'img7.jpg', rating: 0 },
    { src: 'img8.jpg', rating: 0 },
    { src: 'img9.jpg', rating: 0 },
    { src: 'img10.jpg', rating: 0 },
    { src: 'img11.jpg', rating: 0 },
    { src: 'img12.jpg', rating: 0 },
    { src: 'img13.jpg', rating: 0 },
    { src: 'img14.jpg', rating: 0 }
    // Add more image objects as needed
];

let currentRating = 0;
let clickTimes = 0;
let gameOngoing = true;

function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

function displayImages() {
    if (!gameOngoing) {
        return; // Stop displaying images if the game is over
    }

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    let image1, image2;

    do {
        image1 = getRandomImage();
        image2 = getRandomImage();
    } while (image1 === image2);

    // Display the images
    imageContainer.innerHTML += `<img src="${image1.src}" onclick="chooseImage('${image1.src}')">`;
    imageContainer.innerHTML += `<img src="${image2.src}" onclick="chooseImage('${image2.src}')">`;
}

function chooseImage(chosenImageSrc) {
    if (!gameOngoing) {
        return; // Stop processing clicks if the game is over
    }

    // Increase the rating of the chosen image
    const chosenImage = images.find(image => image.src === chosenImageSrc);
    chosenImage.rating += 1;

    // Increase the overall rating
    currentRating += 1;
    document.getElementById('rating').textContent = currentRating;
    clickTimes++;

    if (clickTimes === 20) {
        displayWinner();
        document.getElementById('choose').innerHTML = 'Рейтинг фоток:';
        gameOngoing = false; // Set the flag to stop the game
    } else {
        // Display a new set of images
        displayImages();
    }
}

function displayWinner() {
    // Sort images by rating in descending order
    const sortedImages = [...images].sort((a, b) => b.rating - a.rating);

    // Display the winner and other highly rated images
    const winnerContainer = document.getElementById('winnerContainer');
    winnerContainer.innerHTML = '';

    sortedImages.forEach(image => {
        winnerContainer.innerHTML += `<div><img src="${image.src}" alt="Winner Image"><p>Rating: ${image.rating}</p></div>`;
    });
}

// Initial display of images
displayImages();
