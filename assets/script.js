//Init map function to display map plus markers
function initMap(){
  //map options
var options = {
  zoom:10,
  center:{lat:39.7047,lng:-105.0814}
}
//new map
var map = new google.maps.Map(document.getElementById('map'), options)




//new marker
var marker = new google.maps.Marker({
  position:{lat:39.7273336,lng:-105.0535381},
  map:map

});

// var infoWindow = new google.maps.infoWindow({
//   content: '<h1>Fresh State Bev Co</h1>'
// });

// marker.addEventListener('click', function(){
//   infoWindow.open(map, marker);
// })


var marker = new google.maps.Marker({
  position:{lat:39.734572,lng:-104.9618063},
  map:map
  
});

// var infoWindow = new google.maps.infoWindow({
//   content: '<h1>Fresh State Bev Co</h1>'
// });

var marker = new google.maps.Marker({
  position:{lat:39.6964946,lng:-104.9496032},
  map:map
  
});
}

var marker = new google.maps.Marker({
  position:{lat:39.6964946,lng:-104.9496032},
  map:map
  
});
