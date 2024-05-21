document.addEventListener('DOMContentLoaded', function () {
    // Initialize the maps
    var mapNightlife = L.map('map-nightlife').setView([22.3193, 114.1694], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapNightlife);

    var mapEssentials = L.map('map-essentials').setView([22.3193, 114.1694], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapEssentials);

    // Search functionality
    document.getElementById('search-input').addEventListener('input', function (event) {
        var searchTerm = event.target.value.toLowerCase();
        var sections = document.querySelectorAll('main > section');
        sections.forEach(function (section) {
            if (section.innerText.toLowerCase().includes(searchTerm) || searchTerm === '') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });

    // Form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you, ' + name + '! Your message has been sent.');
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Mobile menu toggle
    var menuToggle = document.getElementById('menu-toggle');
    var navMenu = document.querySelector('nav ul');
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});
