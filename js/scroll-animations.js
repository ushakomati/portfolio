// Scroll Animations
const animatedElements = document.querySelectorAll('.scroll-animated');

function handleScroll() {
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust this value as needed

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');  // Re-animate when re-entering viewport
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
