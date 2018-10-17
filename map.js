function addMarker(lat, lng, map, icon, content) {

  var marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map
  });

  if (icon) {
      // Set icon image
      marker.setIcon(icon);
  }
  if (content) {
      if (content.click) {
          var infoWindow = new google.maps.InfoWindow({
              content: content.click
          });
          marker.addListener('click', function () {
              infoWindow.open(map, marker);
          });
      }


      // if (content.hover) {
      //     var hoverWindow = new google.maps.InfoWindow({
      //         content: content.hover
      //     });
      //     marker.addListener('mouseover', function () {
      //         hoverWindow.open(map, marker);
      //     });
      // }
  }
}




function initMap() {

  var options = {
      zoom: 15,
      center: { lat: 16.504268, lng: 80.647025 }
  }

  var content={
    click:"<strong>Subrains</strong><br>SuBrains Solutions Pvt.Ltd, Revenue Colony Park, Siddhartha Nagar, Benz Circle, Vijayawada, Andhra Pradesh<br> <br>",
    // hover:"Subrains"
  };

  var map = new google.maps.Map(document.getElementById("map"), options);


 
  addMarker(16.504268, 80.647025, map,null,content);
  // addMarker(48.142859, 11.576912, map, icn, content);
  // addMarker(48.142383, 11.579138, map, icn, content);
  // addMarker(48.143600, 11.587914, map, icn, content);
  // addMarker(48.151925, 11.591937, map, icn, content);
  // addMarker(48.135803, 11.576203, map, icn, content);

}

$(document).ready( function () {
  initMap();
});
// google.maps.event.addDomListener(window, 'load', initMap);