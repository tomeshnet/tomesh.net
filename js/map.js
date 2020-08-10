var map = null;
var infowindow = null;
var nodes = [];
var links = [];
var currentNodeListURL;
var circle = null;
var mapStyle;

function initialize() {
  //Current Node URL with random bits to make sure it doesnt get cached
  currentNodeListURL = document.getElementById('nodeURL').value + '?ramd=' + new Date();

  //Set options based on check box positions
  var filterActive = document.getElementById('chkActive').checked;
  var filterProposed = document.getElementById('chkProposed').checked;
  var zoomGroup = document.getElementById('chkGroup').checked;
  var filterBuildings = document.getElementById('chkTheme').checked;

  //Prepare default view and create map
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(43.698136, -79.397593),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    fullscreenControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    }
  };

  infowindow = new google.maps.InfoWindow({
    content: 'holding...'
  });

  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  //Store default theme
  if (filterBuildings == false) {
    map.setOptions({ styles: mapStyle });
  }

  //Reset markers array
  nodes = undefined;
  nodes = [];

  //Pull and process node url
  $.getJSON(currentNodeListURL, function (data) {

    var nodeVisible;
    var nodeData = new Array();

    //loop through each node
    for (var key in data.nodeList) {
      var results = data.nodeList[key];

      nodeVisible = 1; //Default all nodes to visible
      nodeData[results['name']] = results;

      //Adjust visibility based on value and option variable
      if (!results['status']) results['status'] = 'active';
      if (results['status'] == 'active' && !filterActive) nodeVisible = 0;
      if (results['status'] == 'proposed' && !filterProposed) nodeVisible = 0;

      if (nodeVisible) {
        //prepare location point
        var lat = results['latitude'];
        var lng = results['longitude'];
        var nodeLatLng = new google.maps.LatLng(lat, lng);
        var nodeName = results['name'];
        //Call function to create (or update) marker
        var newNode = addMarker(map, results, nodeName, nodeLatLng);

        //If new node was created (rather then updated) add it to the marker array
        if (newNode)
          nodes.push(newNode);
      }

      //Draw cone
      if (results['antennaDirection'] != undefined) {
        var antennaCone = results['antennaCone'];
        var antennaDirection = results['antennaDirection'];
        var antennaDistance = results['antennaDistance'];

        var startArc = antennaDirection - (antennaCone / 2);
        if (startArc < 0) startArc = startArc + 365;
        var arcPts = drawArc(nodeLatLng, startArc, startArc + antennaCone, antennaDistance);
        var piePoly = new google.maps.Polygon({
          paths: [arcPts],
          strokeColor: '#0000FF',
          strokeOpacity: 0.2,
          strokeWeight: 2,
          fillColor: '#0000cc',
          fillOpacity: 0.10,
          map: map
        });
        if (piePoly) { /*Make code climate happy*/ }
      }

      //Draw links
      if (results['router'] != undefined) {
        var routerNode = nodeData[results['router']];
        if (routerNode != undefined) {
          var routerLink = [
            { lat: results['latitude'], lng: results['longitude'] },
            { lat: routerNode['latitude'], lng: routerNode['longitude'] },
          ];

          links[results['router'] + '-' + results['name']] = new google.maps.Polyline({
            path: routerLink,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            map: map
          });
        }
      }
    }

    //Clustering code to group markers that are very close together untill you zoom in (if option enabled)
    if (zoomGroup) {
      var mcOptions = {
        gridSize: 20,
        maxZoom: 15,
        imagePath: '/images/map/m'
      };
      var mc = new MarkerClusterer(map, nodes, mcOptions);
    }
  });
}

//Find a marker witth a specific lat lng and dir combo.  Used so that we dont create a new marker but rather add info to the existing one.
function findMarker(lat, lng, dir) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].position.lat() == lat &&
      nodes[i].position.lng() == lng &&
      nodes[i].direction == dir) {
      return nodes[i];
    }
  }
  return undefined;
}

//Tries to find marker that already exists and updates it otherwise creates a new one
function addMarker(map, nodeResult, name, location) {

  //Specify the colour of the marker based on the status
  var nodeColor;
  if (nodeResult['status'] == 'active') {
    nodeColor = 'green';
  }
  if (nodeResult['status'] == 'proposed') {
    nodeColor = 'grey';
  }

  //Default to OMNI icon if no direction is given
  var arrowDirection = 'omni';

  //Return formatted date for display
  var formattedDate = function () {
    var date = new Date(nodeResult['dateAdded']);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  var nodeStatus = nodeResult['status'].charAt(0).toUpperCase() + nodeResult['status'].slice(1);

  //Prepare the detail information for the marker
  var description = '';
  description = '<div class="markerPop">';
  description += '<h1>' + name + ' (' + nodeResult['type'] + ')</h1>';
  description += '<p>Status: ' + nodeStatus + '</p>';
  if (nodeResult['type'] == 'antenna') {
    if (nodeResult['antennaProtocol']) description += '<p>Protocol: ' + nodeResult['antennaProtocol'] + '</p>';
    if (nodeResult['altitude']) description += '<p>Height: ' + nodeResult['altitude'] + '</p>';
    if (nodeResult['ipv4']) description += '<p>IP: ' + nodeResult['ipv4'] + '</p>';
    if (nodeResult['antennaModel']) description += '<p>Model: ' + nodeResult['antennaModel'] + '</p>';
  }
  description += '<p>Added: ' + formattedDate() + '</p>';
  description += '</div>';

  //Check to see if the currenty direction,lat,lng combo exists
  var marker = findMarker(location.lat(), location.lng(), arrowDirection);

  //Prepare the image used to display the direction arrow and node color
  var IMG = '/images/map/arrow-' + arrowDirection.toLowerCase().replace(' ', '') + '-' + nodeColor + '.png';

  //If marker does not exists in position and direction, create it
  if (marker == undefined) {

    var x = 16;
    var y = 16;

    var imageAnchor = new google.maps.Point(x, y);

    //Create a new marker
    marker = new google.maps.Marker({
      position: location,
      alt: nodeResult['altitude'],
      map: map,
      title: name,
      icon: {
        url: IMG,
        anchor: imageAnchor
      },
      direction: arrowDirection,
      html: description
    });

    //Add listener to the marker for click
    google.maps.event.addListener(marker, 'click', function () {
      //Code adds a circle to identiy selected marker and 
      //Maybe even present a possible range
      if (typeof infowindow != 'undefined') infowindow.close();
      infowindow.setContent(this.html);
      infowindow.open(map, this);
    });
    //listeer to close window
    google.maps.event.addListener(map, 'click', function () {
      infowindow.close();
    });
    //Returns marker to identify it was created not modified
    return marker;

    //If marker already exists in direction and position, just add more information to the existing one.
  } else {
    if (marker.icon.url != IMG) {

      //Promot Scacked Marker is new node is better then the previous
      //IE: if inactive and active in same macker make sure node color is green

      //Update marker color if an active node exists in the "stack"
      var markerLevel = 0;
      if (marker.icon.url.search('-red.png') > 0) markerLevel = 1;
      if (marker.icon.url.search('-green.png') > 0) markerLevel = 2;
      var requestLevel = 0;
      if (IMG.search('-red.png') > 0) requestLevel = 1;
      if (IMG.search('-green.png') > 0) requestLevel = 2;
      if (requestLevel > markerLevel) {
        marker.icon.url = IMG;
      }

    }
    //Update marker
    marker.html = marker.html + description;
    return undefined;
  }
}


/*******************
 Custom Marker Code
********************
Functions that deal with dialog box interaction
including GeoCoding and JSON Generation
*/

var customMarker = undefined;

//Plot new marker from entered coordinates
function addCustomMarker() {
  var lng = document.getElementById('customMarkerLng').value;
  var lat = document.getElementById('customMarkerLat').value;

  if (customMarker) {
    customMarker.setPosition(new google.maps.LatLng(lat, lng));
  } else {
    var location = new google.maps.LatLng(lat, lng);
    customMarker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'New Location',
      draggable: true
    });

    //Event for marker after it has been dropped (end of drag and drop)
    google.maps.event.addListener(customMarker, 'dragend', function () {
      document.getElementById('customMarkerLng').value = customMarker.getPosition().lng();
      document.getElementById('customMarkerLat').value = customMarker.getPosition().lat();
      customMarkerGenerateJSON(); //Regenerate json data in case your looking at the json screen
    });
  }
  map.setCenter(new google.maps.LatLng(lat, lng));
}

//Attempt to GeoCode the marker based on an address
function customMarkerGeoCode() {
  var address = document.getElementById('customMarkerAddress').value;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    'address': address
  }, function (results, status) {
    if (status == 'OK') {

      document.getElementById('customMarkerLng').value = results[0].geometry.location.lng();
      document.getElementById('customMarkerLat').value = results[0].geometry.location.lat();
      map.setCenter(results[0].geometry.location);
      addCustomMarker(document.getElementById('customMarkerLat').value, document.getElementById('customMarkerLng').value);
      $('div#customMarkerGeoCodeDiv').hide();
      $('div#customMarkerLocationDiv').show();
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function customMarkerShowJsonDialog() {
  $('div#customMarkerJSONDiv').show();
  $('div#customMarkerLocationDiv').hide();
  customMarkerGenerateJSON();
}

//Updates the text for the JSON data on the JSON screen
function customMarkerGenerateJSON() {
  var lng = document.getElementById('customMarkerLng').value;
  var lat = document.getElementById('customMarkerLat').value;
  var floor = document.getElementById('customMarkerFloor').value;
  var dir = document.getElementById('customMarkerDirection').value;
  var name = document.getElementById('customMarkerName').value;
  var contact = document.getElementById('customMarkerContact').value;
  var currentJSONDate = (new Date()).toJSON();

  var sJSON = '<div class="box-header"><h2>JSON for node</h2></div><pre id="jsonData" style="white-space: pre;margin-bottom:10px;">   {\n' +
    '   "name": "' + name + '",\n' +
    '   "latitude": ' + lat + ',\n' +
    '   "longitude":' + lng + ',\n' +
    '   "cardinalDirection": "' + dir + '",\n' +
    '   "cardinalDirectionAntenna": "Omni",\n' +
    '   "floor": ' + floor + ',\n' +
    '   "status": "proposed",\n' +
    '   "contact": "' + contact + '",\n' +
    '   "IPV6Address": "",\n' +
    '   "dateAdded": "' + currentJSONDate + '"\n' +
    '   }\n</pre>';

  document.getElementById('customMakerJSONContent').innerHTML = sJSON;

}

function submitJson() {
  var msg = 'I would like to add my node to the Toronto Mesh node list. I\'ve provided the data below describing my node.\n\n```\n' + document.getElementById('jsonData').innerHTML + '```';
  var name = document.getElementById('customMarkerName').value;
  name = encodeURI(name);
  document.location = 'https://github.com/tomeshnet/node-list/issues/new?labels=map+submission&title=New Map Submission+(' + name + ')&body=' + encodeURI(msg);
}

function GeoLocationBrowser() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showGeoLocatedPosition);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

function showGeoLocatedPosition(position) {
  document.getElementById('customMarkerLng').value = position.coords.longitude;
  document.getElementById('customMarkerLat').value = position.coords.latitude;
  addCustomMarker();
}

function clearWindows() {
  //$("div.customMarker").hide();
  $('div#customMarkerLocationDiv').hide();
  $('div#customMarkerJSONDiv').hide();

  $('div#customMarkerGeoCodeDiv').show();
  $('div#customMarkerAddress').show();

  document.getElementById('customMarkerLng').value = -79.397593;
  document.getElementById('customMarkerLat').value = 43.678136;

  document.getElementById('customMarkerFloor').value = '';
  document.getElementById('customMarkerDirection').value = '';
}

//Option Window Code
function ShowAdvanced(what) {
  if (what.innerHTML == '+Show Advanced') {
    $('div#customAdvanced').show();
    what.innerHTML = '-Hide Advanced';
  } else {
    $('div#customAdvanced').hide();
    what.innerHTML = '+Show Advanced';
  }
}
//Expand Option Window For Mobile
function toggleClass(toggleID, toggleClass) {
  if ($('#' + toggleID).hasClass(toggleClass)) {
    $('#' + toggleID).removeClass(toggleClass);
  } else {
    $('#' + toggleID).addClass(toggleClass);
  }
}

function drawArc(center, initialBearing, finalBearing, radius) {
  var points = 32;
  var extp = new Array();

  if (initialBearing > finalBearing) finalBearing += 360;
  var deltaBearing = finalBearing - initialBearing;
  deltaBearing = deltaBearing / points;
  extp.push(center);
  for (var i = 0; (i < points + 1); i++) {
    extp.push(center.DestinationPoint(initialBearing + i * deltaBearing, radius));
  }
  return extp;
}

google.maps.event.addDomListener(window, 'load', initialize);