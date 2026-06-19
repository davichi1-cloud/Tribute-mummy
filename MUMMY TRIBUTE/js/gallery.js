function openLightbox(image){

document.getElementById("lightbox").style.display = "flex";

document.getElementById("lightbox-img").src = image.src;

}

function closeLightbox(){

document.getElementById("lightbox").style.display = "none";

}