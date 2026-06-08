function get(id){
  return document.getElementById(id);
}
function showMap(lat, lon){
  let location = [lat, lon];
  if(!map){
    map = L.map("map");
    const tiles = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
        "&copy; OpenStreetMap"
      }
    );
    tiles.addTo(map);
  }

  map.setView(location, 15);
  L.marker(location)
    .addTo(map)
    .bindPopup("Wifi Hotspot")
    .openPopup();
}

function card(info){

  let build = `<div class="card fitter">
                  <h5>${info.provider}</h5>
                  <hr>
                  <p>${info.name}</p>
                  <hr>
                  <p>${info.location}</p>
                  <hr>
                  <p>${info.zip}</p>
                  <hr>
                  <p>${info.city}</p>
                  <hr>
                  <p>${info.type}</p>`;
  if(info.latitude && info.longitude){

    build += `<input type="button"
                value="Map"
                onclick="showMap(${info.latitude},
                ${info.longitude})">`;
  }
  build += `</div>`;
  return build;
}
