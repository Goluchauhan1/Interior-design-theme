$(document).ready(function () {
    var Slider = $("#Slider");
    var Service = $("#Service");

    Slider.owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        navText: [
            "<i class='fa-solid fa-chevron-left'></i>",
            "<i class='fa-solid fa-chevron-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            600: {
                nav: true,
            }
        }
    })

    Service.owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        margin: 10
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // Bring clicked box to the front
            bringToFront(box);
        });
    });

    function bringToFront(element) {
        // Get the highest z-index in the current document
        let highestZIndex = Math.max(...Array.from(boxes).map(b => parseInt(window.getComputedStyle(b).zIndex)));

        // Set the clicked element's z-index to one higher than the current highest
        element.style.zIndex = highestZIndex + 1;
    }
});

AOS.init();

let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navToggler = document.querySelector('.navToggler');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
    searchBtn.classList.add('active');
    closeBtn.classList.add('active');
    searchBox.classList.add('active');
    navToggler.classList.add('hide');
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBox.classList.remove('active');
    navToggler.classList.remove('hide');
}