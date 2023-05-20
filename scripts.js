let mapOptions = {
    center:[-6.97480,107.63036],
    zoom: 10
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
map.addLayer(layer);

let marker = new L.Marker([-6.97480,107.63036]);
marker.addTo(map);