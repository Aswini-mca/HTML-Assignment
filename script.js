 // Smooth scrolling function
 function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to "Get Started" button
document.querySelector('.bottom-container2 button').addEventListener('click', function() {
    scrollToElement('home-container'); // Scroll to the top/home section
});