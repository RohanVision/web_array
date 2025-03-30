
// Scroll Navbar Function
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Scroll Navbar Function


// Hamburger Function
const navToggle = document.querySelector('.nav-toggle');
const navGroup = document.querySelector('.nav-group');

navToggle.addEventListener('click', () => {
    navGroup.classList.toggle('active');
    navToggle.classList.toggle('active');
});
// Hamburger Function


// Banner Image Rotation Function
const rotator = document.getElementById('image-rotator');
const images = rotator.querySelectorAll('img');
let current = 0;
let interval;

// Image Rotation Function
function rotateImages() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}

// Start Auto Rotate
function startRotation() {
    interval = setInterval(rotateImages, 1500); // Duration for image rotation change according to preferance
}

// Stop Auto Rotate
function stopRotation() {
    clearInterval(interval);
}

// Event Listeners
rotator.addEventListener('mouseenter', stopRotation);
rotator.addEventListener('mouseleave', startRotation);

// Initialize function
startRotation();
// Banner Image Rotation Function


// Service Section onHover Function
const section = document.querySelector('.services-section');
const cards = document.querySelectorAll('.service-card');
const sectionHeader = document.querySelector('.section-header');
const sectionArrow = document.querySelector('.section-arrow');

cards.forEach(card => {
    const overlay1 = card.querySelector('.overlay-1');
    const overlay2 = card.querySelector('.overlay-2');
    const overlay3 = card.querySelector('.overlay-3');

    card.addEventListener('mouseenter', () => {
        if (overlay1) {
            section.style.setProperty('--section-bg', 'rgba(73, 15, 189, 0.85)');
            sectionArrow.style.backgroundImage = "url('assets/images/arrow-defaults.png')";
            sectionHeader.style.color = sectionHeader.querySelector('p').style.color = '#fff';
        } else if (overlay2) {
            section.style.setProperty('--section-bg', 'rgba(230, 184, 255, 1)');
            sectionArrow.style.backgroundImage = "url('assets/images/arrows-one.png')";
            sectionHeader.style.color = sectionHeader.querySelector('p').style.color = '';
        } else if (overlay3) {
            section.style.setProperty('--section-bg', 'rgba(255, 128, 103, 1)');
            sectionArrow.style.backgroundImage = "url('assets/images/arrow-defaults.png')";
            sectionHeader.style.color = sectionHeader.querySelector('p').style.color = '';
        }
    });

    // Reset CSS on Mouse Leave
    card.addEventListener('mouseleave', () => {
        section.style.setProperty('--section-bg', '#fff');
        sectionHeader.style.color = sectionHeader.querySelector('p').style.color = '';
        sectionArrow.style.backgroundImage = "url('assets/images/arrow-defaults.png')";
    });
});
// Service Section onHover Function



// News Slider Function
const slider = document.getElementById('newsSlider');
const nextBtn = document.querySelector('.news-nav-btn.next');
const prevBtn = document.querySelector('.news-nav-btn.prev');

// Buttons Scroll
nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 260, behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -260, behavior: 'smooth' });
});

// User Drag / Swipe Scroll
let isDown = false, startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // adjust scroll speed
    slider.scrollLeft = scrollLeft - walk;
});

// Touch Support
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('touchend', () => {
    isDown = false;
});
slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});
// News Slider Function