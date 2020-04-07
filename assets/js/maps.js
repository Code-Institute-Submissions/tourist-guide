var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {
  'country': 'ke'
};
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
  'rw': {
    center: {
      lat: -1.940278,
      lng: 29.873888
    },
    zoom: 4
  },
  'sa': {
    center: {
      lat: -28.4792625,
      lng: 24.6727135
    },
    zoom: 3
  },
  'ma': {
    center: {
      lat: 31.791702,
      lng: -7.092620
    },
    zoom: 3
  },
  'ng': {
    center: {
      lat: 9.081999,
      lng: 8.675277
    },
    zoom: 5
  },
  'ag': {
    center: {
      lat: 28.033886,
      lng: 1.659626
    },
    zoom: 5
  },
  'cg': {
    center: {
      lat: -35.968761,
      lng: 150.127228
    },
    zoom: 4
  },
  'ug': {
    center: {
      lat: 1.373333,
      lng: 32.290276
    },
    zoom: 5
  },
  'ca': {
    center: {
      lat: 7.369722,
      lng: 12.354722
    },
    zoom: 5
  },
  'et': {
    center: {
      lat: 9.145000,
      lng: 40.489674
    },
    zoom: 5
  },
  'sd': {
    center: {
      lat: 12.862807,
      lng: 30.217636
    },
    zoom: 5
  },
  'ic': {
    center: {
      lat: 4.984241,
      lng: -4.045966
    },
    zoom: 6
  },
  'ml': {
    center: {
      lat: 17.570692,
      lng: -3.996166
    },
    zoom: 3
  },
  'al': {
    center: {
      lat: -11.202692,
      lng: 17.873886
    },
    zoom: 3
  },
  'lb': {
    center: {
      lat: 26.335100,
      lng: 17.228331
    },
    zoom: 3
  },
  'gn': {
    center: {
      lat: 9.509130,
      lng: -13.712550
    },
    zoom: 3
  },
  'bn': {
    center: {
      lat: 39.922250,
      lng: -82.896980
    },
    zoom: 3
  },
  'zm': {
    center: {
      lat: -13.133897,
      lng: 27.849333
    },
    zoom: 3
  },
  'mz': {
    center: {
      lat: -18.665695,
      lng: 35.529564
    },
    zoom: 3
  },
  'sm': {
    center: {
      lat: 7.516940,
      lng: 44.346531
    },
    zoom: 3
  },
  'mr': {
    center: {
      lat: -20.348404,
      lng: 57.552151
    },
    zoom: 3
  },
  'mn': {
    center: {
      lat: 21.007891,
      lng: -10.940835
    },
    zoom: 3
  },
  'bt': {
    center: {
      lat: -22.328474,
      lng: 24.684866
    },
    zoom: 3
  },
  'cv': {
    center: {
      lat: 14.916700,
      lng: -23.507500
    },
    zoom: 3
  },
  'sl': {
    center: {
      lat: -4.623540,
      lng: 55.452492
    },
    zoom: 3
  },
  'mw': {
    center: {
      lat: -13.254308,
      lng: 34.301525
    },
    zoom: 3
  },
  'bf': {
    center: {
      lat: 12.238333,
      lng: -1.561593
    },
    zoom: 3
  },
  'ea': {
    center: {
      lat: 15.339000,
      lng: 38.937111
    },
    zoom: 3
  },
  'nr': {
    center: {
      lat: 17.607788,
      lng: 8.081666
    },
    zoom: 3
  },
  'tg': {
    center: {
      lat: 8.619543,
      lng: 0.824782
    },
    zoom: 3
  },
  'gb': {
    center: {
      lat: 4.330400,
      lng: 31.061930
    },
    zoom: 3
  },
  'la': {
    center: {
      lat: 6.428055,
      lng: -9.429499
    },
    zoom: 3
  },
  'sl': {
    center: {
      lat: 8.482050,
      lng: -13.213670
    },
    zoom: 3
  },
  'sz': {
    center: {
      lat: -26.326080,
      lng: 31.146080
    },
    zoom: 3
  },
  'ss': {
    center: {
      lat: 6.876992,
      lng: 31.306978
    },
    zoom: 3
  },
  'gm': {
    center: {
      lat: 13.451290,
      lng: -16.573000
    },
    zoom: 3
  },
  'cd': {
    center: {
      lat: 15.454166,
      lng: 18.732206
    },
    zoom: 3
  },
  'dj': {
    center: {
      lat: 11.825138,
      lng: 42.590275
    },
    zoom: 3
  },
  'bd': {
    center: {
      lat: -3.373056,
      lng: 29.918886
    },
    zoom: 3
  },
  'cr': {
    center: {
      lat: 4.394673,
      lng: 18.558189
    },
    zoom: 3
  },
  'ru': {
    center: {
      lat: -20.882980,
      lng: 55.450020
    },
    zoom: 3
  },
  'le': {
    center: {
      lat: -29.314140,
      lng: -29.314140
    },
    zoom: 3
  },
  'cb': {
    center: {
      lat: -4.273900,
      lng: 15.281510
    },
    zoom: 3
  },
  'mr': {
    center: {
      lat: 33.971588,
      lng: -6.849813
    },
    zoom: 3
  },
  'ke': {
    center: {
      lat: -0.023559,
      lng: 37.906193
    },
    zoom: 3
  },
  'tu': {
    center: {
      lat: 36.806496,
      lng: 10.181532
    },
    zoom: 3
  },
  'gn': {
    center: {
      lat: 7.946527,
      lng: -1.023194
    },
    zoom: 3
  },

  'nm': {
    center: {
      lat: -22.565220,
      lng: 17.084300
    },
    zoom: 3
  },
  'tz': {
    center: {
      lat: -6.814920,
      lng: 39.288410
    },
    zoom: 3
  },
  'cm': {
    center: {
      lat: -11.645500,
      lng: -11.645500
    },
    zoom: 3
  },
  'eg': {
    center: {
      lat: 30.044420,
      lng: 31.235712
    },
    zoom: 3
  },
  'zw': {
    center: {
      lat: -17.827630,
      lng: 31.050450
    },
    zoom: 3
  },
  'se': {
    center: {
      lat: 14.698230,
      lng: -17.437130
    },
    zoom: 3
  },

  'md': {
    center: {
      lat: -18.908440,
      lng: 47.537491
    },
    zoom: 5
  }
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: countries['ke'].zoom,
    center: countries['ke'].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    (
      document.getElementById('autocomplete')), {
      types: ['(cities)'],
      componentRestrictions: countryRestrict
    });
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);

  // Add a DOM event listener to react when the user selects a country.
  document.getElementById('country').addEventListener(
    'change', setAutocompleteCountry);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
  } else {
    document.getElementById('autocomplete').placeholder = 'Add your city of destination...';
  }
}

// Search for hotels in the selected city, within the viewport of the map.
function search() {
  let poi = 'lodging'; //poi = point of interest
  clearMarkers();
  markers = [];

  if (document.getElementById("museum").checked) poi = 'museum';
  clearMarkers();
  markers = [];
  if (document.getElementById("restaurant").checked) poi = 'restaurant';
  clearMarkers();
  markers = [];
  if (document.getElementById("bar").checked) poi = 'bar';
  clearMarkers();
  markers = [];
  if (document.getElementById("airport").checked) poi = 'airport';
  clearMarkers();
  markers = [];
  if (document.getElementById("bank").checked) poi = 'bank';
  clearMarkers();
  markers = [];
  if (document.getElementById("atractions").checked) poi = 'tourist';
  clearMarkers();
  markers = [];


  let search = {

    bounds: map.getBounds(),
    types: [poi]
  };

  places.nearbySearch(search, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      // Create a marker for each hotel found, and
      // assign a letter of the alphabetic to each marker icon.
      for (var i = 0; i < results.length; i++) {
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';
        // Use marker animation to drop the icons incrementally on the map.
        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon
        });
        // If the user clicks a hotel marker, show the details of that hotel
        // in an info window.
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], 'click', showInfoWindow);
        setTimeout(dropMarker(i), i * 100);
        addResult(results[i], i);
      }
    }
  });
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
  var country = document.getElementById('country').value;
  if (country == 'all') {
    autocomplete.setComponentRestrictions({
      'country': []
    });
    map.setCenter({
      lat: 15,
      lng: 0
    });
    map.setZoom(2);
  } else {
    autocomplete.setComponentRestrictions({
      'country': country
    });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  }
  clearResults();
  clearMarkers();
}

function dropMarker(i) {
  return function () {
    markers[i].setMap(map);
  };
}

function addResult(result, i) {
  var results = document.getElementById('results');
  var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + markerLetter + '.png';

  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function () {
    google.maps.event.trigger(markers[i], 'click');
  };

  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  var results = document.getElementById('results');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Get the place details for a hotel. Show the information in an info window,
// anchored on the marker for the hotel that the user selected.
function showInfoWindow() {
  var marker = this;
  places.getDetails({
      placeId: marker.placeResult.place_id
    },
    function (place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildIWContent(place);
    });
}


function placesChanged(search) {
  //move the viewport to the map section
  window.location.href = "#map-section";
}
// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
    'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
    '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
      place.formatted_phone_number;
  } else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      } else {
        ratingHtml += '&#10029;';
      }
      document.getElementById('iw-rating-row').style.display = '';
      document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  } else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  } else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}