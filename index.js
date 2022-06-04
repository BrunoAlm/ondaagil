function initMap() {
    // The location of Uluru
    var lat = -10.875032688203431;  
    var long = -61.954885232644614;
    const onda = {
        lat: lat,
        lng: long,
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: onda,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: onda,
        map: map,
    });
}

window.initMap = initMap;