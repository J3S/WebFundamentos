$(document).ready(function() {
    if (document.querySelectorAll('#map').length > 0) {
        if (document.querySelector('html').lang)
            lang = document.querySelector('html').lang;
        else
            lang = 'en';

        var js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyCNUDVmTFEk8jSW8K_gmWK5FBeLeyqB6R0&language=' + lang; 
        document.getElementsByTagName('head')[0].appendChild(js_file);
    }
});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -2.1481458, lng: -79.9644885},
        zoom: 16
    });
}