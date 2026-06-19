const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg"
];

const tributes = [
  "Forever in our hearts.",
  "Your love remains with us.",
  "A beautiful soul never dies.",
  "Your legacy lives on.",
  "We cherish every memory."
];

let currentPhotoIndex = -1;
let currentTributeIndex = -1;

const heroImage = document.getElementById("heroImage");
const tributeText = document.getElementById("tributeText");

function getRandomIndex(length, currentIndex) {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * length);
  } while (newIndex === currentIndex);

  return newIndex;
}

function changeContent() {
  currentPhotoIndex = getRandomIndex(
    photos.length,
    currentPhotoIndex
  );

  currentTributeIndex = getRandomIndex(
    tributes.length,
    currentTributeIndex
  );

  heroImage.style.opacity = 0;
  tributeText.style.opacity = 0;

  setTimeout(() => {
    heroImage.src = photos[currentPhotoIndex];
    tributeText.textContent = tributes[currentTributeIndex];

    heroImage.style.opacity = 1;
    tributeText.style.opacity = 1;
  }, 1000);
}

setInterval(changeContent, 6000);