var map = null;
var infowindow = null;
var markers = [];
var currentNodeListURL;
var circle = null;

function initialize() {
	
	//Current Node URL with random bits to make sure it doesnt get cached
	currentNodeListURL = document.getElementById("nodeURL").value + "?ramd=" + new Date();

	//Set options based on check box positions
	filterActive = document.getElementById("chkActive").checked;
	filterProposed = document.getElementById("chkProposed").checked;
	zoomGroup = document.getElementById("chkGroup").checked;

	//Prepare default view and create map
	var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(43.698136, -79.397593),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	infowindow = new google.maps.InfoWindow({
		content: "holding..."
	});
	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

	//Reset markers array
	markers = undefined;
	markers = [];

	//Pull and process node url
	jQuery.getJSON(currentNodeListURL, function (data) {


		var nodeVisible;
		
		//loop through each node
		for (var key in data) {
			var results = data[key];

			//console.log(results);
			nodeVisible = 1; //Default all nodes to visible

			//Adjust visibility based on value and option variable
			if (results['status'] == 'active' && !filterActive) nodeVisible = 0;
			if (results['status'] == 'proposed' && !filterProposed) nodeVisible = 0;

			if (nodeVisible) {
				
				//prepare location point
				var lat = results['latitude'];
				var lng = results['longitude'];
				var myNodeLatLng = new google.maps.LatLng(lat, lng);
				var myNodeName = results['name'];
				
				//Call function to create (or update) marker
				var newNode = addMarker(map, results, myNodeName, myNodeLatLng);

				//If new node was created (rather then updated) add it to the marker array
				if (newNode)
					markers.push(newNode);
								
			}
		}

		//Clustering code to group markers that are very close together untill you zoom in (if option enabled)
		if (zoomGroup) {
			var mcOptions = {
				gridSize: 20,
				maxZoom: 15,
				imagePath: '/images/map/m'
			};
			var mc = new MarkerClusterer(map, markers, mcOptions);
		}

	});
}

//Find a marker witth a specific lat lng and dir combo.  Used so that we dont create a new marker but rather add info to the existing one.
function findMarker(lat, lng, dir) {
	for (var i = 0; i < markers.length; i++) {
		if (markers[i].position.lat() == lat &&
			markers[i].position.lng() == lng &&
			markers[i].direction == dir) {
			return markers[i];
		}
	}
	return undefined;
}

//Tries to find marker that already exists and updates it otherwise creates a new one
function addMarker(map, nodeResult, name, location) {
	
	//Specify the colour of the marker based on the status
	var nodecolor;
	if (nodeResult['status'] == 'active') {
		nodeColor = 'green';
	}
	if (nodeResult['status'] == 'proposed') {
		nodeColor = 'grey';
	}
	
	//Default to OMNI icon if no direction is given
	var ArrowDirection = 'omni'
	
	//If direction is given set it to the correct direction
	if (nodeResult['cardinalDirection'] != null) ArrowDirection = nodeResult['cardinalDirection'];


	//Prepare the detail information for the marker
	var Description = "";
	Description = '<div class="markerPop">';
	Description += '<h1>Name: ' + name + '</h1>';
	Description += '<p>Status: ' + nodeResult['status'] + '</p>';
	if (nodeResult['cardinalDirection']) Description += '<p>Direction: ' + nodeResult['cardinalDirection'] + '</p>';
	if (nodeResult['floor']) Description += '<p>Floor: ' + nodeResult['floor'] + '</p>';
	if (nodeResult['IPV6Address']) Description += '<p>IPV6: ' + nodeResult['IPV6Address'] + '</p>'
	Description += '<p>Added: ' + nodeResult['dateAdded'] + '</p>';
	Description += '</div>';

	
	//Check to see if the currenty direction,lat,lng combo exists
	var marker = findMarker(location.lat(), location.lng(), ArrowDirection);

	//Prepare the image used to display the direction arrow and node color
	var IMG = '/images/map/arrow-' + ArrowDirection.toLowerCase().replace(" ", "") + '-' + nodeColor + '.png';


	//If marker does not exists in position and direction, create it
	if (marker == undefined) {

		//Establish anchor point based on direction of arrow so arrow images dont overlap each other so that they dont fully overlap
		var x = 16;
		var y = 16;
		switch (ArrowDirection) {
			case "North":
			case "North East":
			case "North West":
				y = 32;
				break;
			case "South":
			case "South East":
			case "South West":
				y = 0;
				break;
		}
		switch (ArrowDirection) {
			case "East":
			case "North East":
			case "South East":
				x = 0;
				break;
			case "West":
			case "North West":
			case "South West":
				x = 32;
				break;
		}

		var imageAnchor = new google.maps.Point(x, y);

		//Create a new marker
		marker = new google.maps.Marker({
			position: location,
			map: map,
			title: name,
			icon: {
				url: IMG,
				anchor: imageAnchor
			},
			direction: nodeResult['cardinalDirection'],
			html: Description
		});

		//Add listener to the marker for click
		google.maps.event.addListener(marker, 'click', function () {
			
			//Code adds a circle to identiy selected marker and 
			//Maybe even present a possible range
			if (typeof infowindow != 'undefined') infowindow.close();
			infowindow.setContent(this.html);
			infowindow.open(map, this);

			if (circle) {
				circle.setMap(null);
			}
			// Add circle overlay and bind to marker
			circle = new google.maps.Circle({
				map: map,
				radius: 40, // 10 miles in metres
				fillColor: '#AA0000'
			});
			circle.bindTo('center', marker, 'position');


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
			if (marker.icon.url.search("-red.png") > 0) markerLevel = 1;
			if (marker.icon.url.search("-green.png") > 0) markerLevel = 2;
			var requestLevel = 0;
			if (IMG.search("-red.png") > 0) requestLevel = 1;
			if (IMG.search("-green.png") > 0) requestLevel = 2;
			if (requestLevel > markerLevel) {
				marker.icon.url = IMG;
			}

		}
		//Update marker
		marker.html = marker.html + Description;
		return undefined;
	}
}


/*******************
 Custom Marker Code
********************
Functions that deal with "ADD NODE" dialog
including GeoCoding and JSON Generation
*/

var customMarker = undefined;

//Custom marker from entered coordinates
function addCustomMarker() {
	var lng = document.getElementById("customMarkerLng").value;
	var lat = document.getElementById("customMarkerLat").value;

	if (customMarker) {
		customMarker.setPosition(new google.maps.LatLng(lat, lng));
	} else {
		var location = new google.maps.LatLng(lat, lng);
		customMarker = new google.maps.Marker({
			position: location,
			map: map,
			title: "New Location",
			draggable: true
		});

		google.maps.event.addListener(customMarker, 'dragend', function () {
			document.getElementById("customMarkerLng").value = customMarker.getPosition().lng();
			document.getElementById("customMarkerLat").value = customMarker.getPosition().lat();
			customMarkerGenerateJSON();
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

			document.getElementById("customMarkerLng").value = results[0].geometry.location.lng();
			document.getElementById("customMarkerLat").value = results[0].geometry.location.lat();
			map.setCenter(results[0].geometry.location);
			addCustomMarker(document.getElementById("customMarkerLat").value, document.getElementById("customMarkerLng").value);
			$("div#customMarkerGeoCodeDiv").hide();
			$("div#customMarkerLocationDiv").show();
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}

function customMarkerShowJsonDialog() {
	$("div#customMarkerJSONDiv").show();
	$("div#customMarkerLocationDiv").hide();
	customMarkerGenerateJSON();
}

function customMarkerGenerateJSON() {

	var lng = document.getElementById("customMarkerLng").value;
	var lat = document.getElementById("customMarkerLat").value;
	var floor = document.getElementById("customMarkerFloor").value;
	var dir = document.getElementById("customMarkerDirection").value;
	var name = document.getElementById("customMarkerName").value;


	var currentJSONDate = (new Date()).toJSON();

	var sJSON = '<pre style="white-space: pre-wrap;">{\n' +
		'   "name": "Unnamed Node",\n' +
		'   "latitude": ' + lat + ',\n' +
		'   "longitude":' + lng + ',\n' +
		'   "cardinalDirection": "' + dir + '",\n' +
		'   "floor": ' + floor + ',\n' +
		'   "dateAdded:" "' + currentJSONDate + '"\n' +
		'}\n</pre>';

	document.getElementById("customMarkerJSONDiv").innerHTML = sJSON + '<input type="button" value="Another Node" onclick="customMarkerNewNode()" />';


}

function customMarkerNewNode() {
	$("div#customMarkerGeoCodeDiv").show();
	$("div#customMarkerLocationDiv").hide();
	$("div#customMarkerJSONDiv").hide();
}

function GeoLocationBrowser() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showGeoLocatedPosition);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function showGeoLocatedPosition(position) {
	document.getElementById("customMarkerLng").value = position.coords.longitude;
	document.getElementById("customMarkerLat").value = position.coords.latitude;
	addCustomMarker();
}

function clearWindows() {
	//$("div.customMarker").hide();
	$("div#customMarkerLocationDiv").hide();
	$("div#customMarkerJSONDiv").hide();


	$("div#customMarkerGeoCodeDiv").show();
	$("div#customMarkerAddress").show();

	document.getElementById("customMarkerLng").value = -79.397593;
	document.getElementById("customMarkerLng").value = 43.678136;

	document.getElementById("customMarkerFloor").value = "";
	document.getElementById("customMarkerDirection").value = "";
	document.getElementById("customMarkerEmail").value = "";


}
function optionExpand() { 
	if ($("#mapToggles").hasClass('FullHeight')) { 
		$("#mapToggles").removeClass('FullHeight');
	} else {
		$("#mapToggles").addClass('FullHeight');
	}
}

google.maps.event.addDomListener(window, 'load', initialize);