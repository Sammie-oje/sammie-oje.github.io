function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//Close the dropdown if user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches("#dropbtn")) {
        let myDropdown = document.getElementById('myDropdown');
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

//When user reaches window level, animation starts
const element = document.querySelector('.more-info-section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
}

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        //if element is in viewport, toggle class 'appear'
        if(entry.isIntersecting) {
            element.classList.add('appear');
        }
        else{
            element.classList.remove('appear');
        }
    });
}, options);

//observe the element
observer.observe(element);

let currentIndex = 0;

let slides = document.querySelectorAll('.slide');

let progress = document.querySelector('.progress');

let interval;

function showSlide(index) {
    if (index >= slides.length)
        currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    slides.forEach(slide => (slide.style.display = 'none'));

    slides[currentIndex].style.display = 'block';

    let progressWidth = ((currentIndex + 1) / slides.length) * 100;
    progress.style.width = progressWidth + '%';
}

function changeSlide(step) {
    clearInterval(interval);
    currentIndex += step;
    showSlide(currentIndex);
    startAutoSlide();
}

function startAutoSlide() {
    interval = setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 3000);
}

showSlide(currentIndex);
startAutoSlide();