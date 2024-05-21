// File: hkt_website/js/scripts.js
document.addEventListener('DOMContentLoaded', function() { 
    var nightlifeMap = L.map('map-nightlife').setView([22.2820, 114.1585], 13);
    var essentialsMap = L.map('map-essentials').setView([22.3193, 114.1694], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(nightlifeMap);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(essentialsMap);

    var nightlifeLocations = [
        {lat: 22.2819, lng: 114.1585, title: 'Club XYZ'},
        {lat: 22.2783, lng: 114.1825, title: 'Nightclub ABC'},
        {lat: 22.2820, lng: 114.1545, title: 'Bar 123'}
    ];

    var essentialsLocations = [
        {lat: 22.3193, lng: 114.1694, title: 'MTR Station'},
        {lat: 22.3356, lng: 114.1758, title: 'Public Hospital'},
        {lat: 22.2842, lng: 114.1491, title: 'International School'}
    ];

    nightlifeLocations.forEach(function(location) {
        L.marker([location.lat, location.lng]).addTo(nightlifeMap)
            .bindPopup(location.title);
    });

    essentialsLocations.forEach(function(location) {
        L.marker([location.lat, location.lng]).addTo(essentialsMap)
            .bindPopup(location.title);
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

document.getElementById('search-input').addEventListener('input', function(event) {
    var query = event.target.value.toLowerCase();
    var sections = document.querySelectorAll('main section');

    sections.forEach(function(section) {
        var text = section.innerText.toLowerCase();
        if (text.includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
