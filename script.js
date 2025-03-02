document.querySelector('.services-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 1000, // Adjust this value
        behavior: 'smooth'
    });
});
