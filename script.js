function scrollCarousel(button, direction = 1) {
    const carousel = button.parentElement.querySelector('.carousel');
    const scrollAmount = carousel.offsetWidth / 2;


    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });


    setTimeout(() => toggleArrows(carousel), 300);
}

function toggleArrows(carousel) {
    const leftArrow = carousel.parentElement.querySelector('.left-arrow');
    const rightArrow = carousel.parentElement.querySelector('.right-arrow');


    leftArrow.style.display = carousel.scrollLeft > 0 ? 'block' : 'none';

 
    rightArrow.style.display = carousel.scrollLeft + carousel.offsetWidth < carousel.scrollWidth ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(carousel => toggleArrows(carousel));
});
