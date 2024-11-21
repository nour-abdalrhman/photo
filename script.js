var images = [
    {
        path : "images/camping-1.jpg",
        altText : " Image1"
    },
    {
        path : "images/camping-2.jpg",
        altText :"Image2"
    },
    {
        path : "images/camping-3.jpg",
        altText : "Image3"
    }
    ,
    {
        path : "./images/camping-4.jpg",
        altText : "Image4"
    },

    {
        path : "./images/camping-5.jpg",
        altText: "Image5"
    },
    {
        path : "./images/camping-6.jpg",
        altText : "Image6"
    },

];

var galleryContainer = document.getElementById('gallery');


images.forEach(imagePath => {
    var galleryItem = document.createElement("div");
    galleryItem.className = 'gallery-item';

    let img = document.createElement("img");
    img.src = imagePath.path;
    img.alt = imagePath.altText;

    galleryItem.appendChild(img);

    galleryContainer.appendChild(galleryItem)
}

);