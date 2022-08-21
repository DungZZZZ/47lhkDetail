var img = document.querySelectorAll('.img img')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var close = document.querySelector('.close')
var galleryimg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        left.classList.add('hide')
    } else {
        left.classList.remove('hide')
    }

    if (currentIndex == img.length - 1) {
        right.classList.add('hide')
    } else {
        right.classList.remove('hide')
    }


    //display
    galleryimg.src = img[currentIndex].src
    gallery.classList.add('show')
}

img.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', function () {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})


left.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

right.addEventListener('click', function () {
    if (currentIndex < img.length - 1) {
        currentIndex++
        showGallery()
    }
})


document.onkeydown = function (event) {
    var e = event || window.event;
    if (e.keyCode == '37' && currentIndex > 0) { //LEFT
        currentIndex--;
        showGallery();
    } else if (e.keyCode == '39' && currentIndex < 7) { //RIGHT
        currentIndex++;
        showGallery();
    }
}