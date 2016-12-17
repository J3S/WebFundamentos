var map;
var objectDivMap = $("#map");
var objectHTMLTag = $("html");
var horarioAyudantes = [];
var edificioAyudantes = [];
var aulaAyudantes = [];
var LatLng = '{"posiciones": []}';
var marker = null;
var posicionOriginal = {lat: -2.1481458, lng: -79.9644885};
var zoomOriginal = 16;
var zoomMarker = 18;

$(document).ready(function() {

    if (objectDivMap.length > 0) {
        if (objectHTMLTag.attr("lang"))
            lang = objectHTMLTag.attr("lang");
        else
            lang = 'en';

        var js_file = document.createElement("script");
        js_file.type = "text/javascript";
        js_file.src = "https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyCNUDVmTFEk8jSW8K_gmWK5FBeLeyqB6R0&language=" + lang; 
        $("head").append(js_file);
    }

    llenarSelectorAyudantes();
});

function initMap() {
    var htmlDivMap = objectDivMap[0];
    map = new google.maps.Map(htmlDivMap, {
        center: posicionOriginal,
        zoom: zoomOriginal
    });
}

function llenarSelectorAyudantes() {
    var options = $("#ayudante");
    options.append("<option>Seleccione a un ayudante</option>")
    $.getJSON("../../data/ayudantias/horarios.json", function(data) {
        $.each(data.ayudantes, function(key, value) {
            options.append("<option>"+ value.nombre + "</option>");
            horarioAyudantes.push('<label class="col-xs-12">Horario: ' + value.horario + '</label>');
            edificioAyudantes.push('<label class="col-xs-12">Edificio: ' + value.edificio + '</label>');
            aulaAyudantes.push('<label class="col-xs-12">Aula: ' + value.aula + '</label>');
            var obj = JSON.parse(LatLng);
            obj.posiciones.push({"lat": value.lat, "lng": value.lng});
            LatLng = JSON.stringify(obj);
        });
    });
}

$("#ayudante").change(function() {
    var selectedPosition = $("#ayudante").prop('selectedIndex');
    var divInfoAyudantias = $("#info-ayudantias");
    var obj = JSON.parse(LatLng);
    divInfoAyudantias.empty();
    if (marker != null) marker.setMap(null);
    marker = null;
    if (selectedPosition != 0) {
        var index = selectedPosition - 1;
        divInfoAyudantias.append(horarioAyudantes[index]);
        divInfoAyudantias.append(edificioAyudantes[index]);
        divInfoAyudantias.append(aulaAyudantes[index]);
        var posLat = obj.posiciones[index].lat;
        var posLng = obj.posiciones[index].lng;
        marker = new google.maps.Marker({
            position: {lat: Number(posLat), lng: Number(posLng)},
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: $("#ayudante option:selected").text()
          });
        map.setCenter(marker.getPosition());
        map.setZoom(zoomMarker);
    } else {
        map.setCenter(posicionOriginal);
        map.setZoom(zoomOriginal);
    }
});