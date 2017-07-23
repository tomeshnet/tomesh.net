var map = null ;
var infowindow = null;
var markers = [];
var currentNodeListURL;
var circle = null;

function initialize() {
		currentNodeListURL=document.getElementById("nodeURL").value;
	
		filterOffline = document.getElementById("chkOffline").checked;
	    filterOnline = document.getElementById("chkOnline").checked;
		filterProposed = document.getElementById("chkProposed").checked;
		zoomGroup = document.getElementById("chkGroup").checked;

		var mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(43.698136, -79.397593),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		infowindow = new google.maps.InfoWindow({
			content: "holding..."
		});
		map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

		markers = undefined;
		markers = [];

		//jQuery.getJSON("https://raw.githubusercontent.com/Pedro-on-a-bike/TOMeshNodeMap/master/nodeListTest.json", function(data){
		jQuery.getJSON(currentNodeListURL, function(data){


		var nodeVisible;
		for (var key in data) {
			var results = data[key];

			console.log(results);
			nodeVisible=1;
			if (results['onlineStatus']=="Proposed") results['onlineStatus']='Potential' //##TODO## Fix this need;
			if (results['onlineStatus']=='Offline' && !filterOffline) nodeVisible=0;
			if (results['onlineStatus']=='Online' && !filterOnline) nodeVisible=0;
			if (results['onlineStatus']=='Potential' && !filterProposed) nodeVisible=0; //##TODO fix Possible to Proposed
			
			if (nodeVisible) {
				var lat = results['latitude'];
				var lng = results['longitude'];
				var myNodeLatLng = new google.maps.LatLng(lat,lng);			
				var myNodeName = results['name'];
				var newNode = addMarker(map, results, myNodeName, myNodeLatLng);
			
				if (newNode)
					markers.push(newNode);
			}
		}
			
		if (zoomGroup) {
			var mcOptions = {gridSize: 20, maxZoom: 15, imagePath: '/images/map/m'};
			var mc = new MarkerClusterer(map,markers,mcOptions);
		}

	});	
}

//Find a marker witth a specific lat lng and dir.  Used so that we dont  create a new marker but rather add info to the existing one.
function findMarker(lat,lng,dir) { 
	for (var i = 0; i < markers.length; i++) {
		if (markers[i].position.lat()==lat &&
			markers[i].position.lng()==lng &&
			markers[i].direction==dir ) {
				return markers[i];
		}
	}
	return undefined;

}

function addMarker(map, nodeResult, name, location) {
		var nodecolor;
		if (nodeResult['onlineStatus']=='Online') { nodeColor='green';  }
		if (nodeResult['onlineStatus']=='Offline') { nodeColor='red'; }
	    if (nodeResult['onlineStatus']=='Potential') { nodeColor='grey'; }
	    if ( nodeResult['cardinalDirection'].toLowerCase()=='none')  nodeResult['cardinalDirection']='omni';
		var IMG= '/images/map/arrow-' + nodeResult['cardinalDirection'].toLowerCase().replace(" ","") + '-' + nodeColor + '.png';

		var marker=findMarker(location.lat(), location.lng(), nodeResult['cardinalDirection'] );
		
		
		//If marker does not exists in position and direction, create it
		if (marker==undefined) { 
		
			//Establish anchor point based on direction of arrow so arrow images dont overlap each other
			var x=16;
			var y=16;
			switch (nodeResult['cardinalDirection']) {
				case "North":
				case "North East":
				case "North West":
					y=32;
					break;
				case "South":
				case "South East":
				case "South West":
					y=0;
					break;	
			}
			switch (nodeResult['cardinalDirection']) {		
				case "East":
				case "North East":
				case "South East":
					x=0;
					break;
				case "West":
				case "North West":			
				case "South West":
					x=32;
					break;
			}
			
			var imageAnchor=new google.maps.Point(x,y);
		
			marker = new google.maps.Marker({
				position: location,
				map: map,
				title: name,
				icon: {
					url:IMG,
					anchor: imageAnchor
				},
				direction: nodeResult['cardinalDirection'],
				html:
						'<div class="markerPop">' +
						'<h1>Name: ' + name + '</h1>' + //substring removes distance from title
						'<p>Online Status: ' + nodeResult['onlineStatus'] + '</p>' +
						'<p>Direction: ' + nodeResult['cardinalDirection'] + '</p>' +
						'<p>Floor: ' + nodeResult['floor'] + '</p>' +
						'<p>Hardware: ' + nodeResult['meshHardware'] + '</p>' +
						'<p>IPV6: ' + nodeResult['IPV6Address'] + '</p>' +
						'</div>'
			
			});

			google.maps.event.addListener(marker, 'click', function() {
				if (typeof infowindow != 'undefined') infowindow.close();
				infowindow.setContent(this.html);
				infowindow.open(map,this);
				
				if (circle) { 
					circle.setMap(null);
				}
				// Add circle overlay and bind to marker
				circle = new google.maps.Circle({
  					map: map,
  					radius: 40,    // 10 miles in metres
  					fillColor: '#AA0000'
				});
				circle.bindTo('center', marker, 'position');
				
				
			});
			google.maps.event.addListener(map, 'click', function() {
				infowindow.close();
			});	
			return marker;
			
		//If marker already exists in direction and position, just add more information to the existing one.
		} else {
			if (marker.icon.url != IMG ) {
				//Promot Scacked Marker is new node is better then the previous
				//IE: if inactive and active in same macker make sure node color is green
				
				var markerLevel=0;
				if (marker.icon.url.search("-red.png")>0) markerLevel=1;
				if (marker.icon.url.search("-green.png")>0) markerLevel=2;
				var requestLevel=0;
				if (IMG.search("-red.png")>0) requestLevel=1;
				if (IMG.search("-green.png")>0) requestLevel=2;
				if (requestLevel>markerLevel) {
					marker.icon.url=IMG;
				}
				
			}
			marker.html=marker.html + 

						'<div class="markerPop">' +
						'<h1>Name: ' + name + '</h1>' + //substring removes distance from title
						'<p>Online Status: ' + nodeResult['onlineStatus'] + '</p>' +
						'<p>Direction: ' + nodeResult['cardinalDirection'] + '</p>' +
						'<p>Floor: ' + nodeResult['floor'] + '</p>' +
						'<p>Hardware: ' + nodeResult['meshHardware'] + '</p>' +
						'<p>IPV6: ' + nodeResult['IPV6Address'] + '</p>' +
						'</div>'
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
function addCustomMarker() {
	var lng=document.getElementById("customMarkerLng").value;
	var lat=document.getElementById("customMarkerLat").value;
							
	if (customMarker) {
		customMarker.setPosition(new google.maps.LatLng(lat,lng));
	} else {
		var location  = new google.maps.LatLng(lat,lng);
		customMarker = new google.maps.Marker({
			position: location,
			map: map,
			title: "New Location",	
			draggable:true
		});		
	
		google.maps.event.addListener(customMarker, 'dragend', function() {	
			document.getElementById("customMarkerLng").value=customMarker.getPosition().lng();
			document.getElementById("customMarkerLat").value=customMarker.getPosition().lat();
			customMarkerGenerateJSON();
		});
	}
	map.setCenter(new google.maps.LatLng(lat,lng));	
}

function customMarkerGeoCode() {
    var address = document.getElementById('customMarkerAddress').value;
	var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
		  
		  document.getElementById("customMarkerLng").value=results[0].geometry.location.lng();
		  document.getElementById("customMarkerLat").value=results[0].geometry.location.lat();	  
          map.setCenter(results[0].geometry.location);
		  addCustomMarker(document.getElementById("customMarkerLat").value,document.getElementById("customMarkerLng").value);
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
	
	var lng=document.getElementById("customMarkerLng").value;
	var lat=document.getElementById("customMarkerLat").value;
	var floor=document.getElementById("customMarkerFloor").value;
	var dir=document.getElementById("customMarkerDirection").value;
	
	var sJSON = '<pre>{\n' +
		'   "name": "Unnamed Node",\n' +
		'   "latitude": ' + lat + ',\n' +
		'   "longitude":' + lng + ',\n' +
		'   "onlineStatus": "Offline",\n' +
		'   "cardinalDirection": "' + dir + '",\n' +
		'   "floor": ' + floor + ',\n' +
		'   "meshHardware": "None",\n' +
		'   "IPV6Addres": "None"\n' +
		'}\n</pre>';
	
	document.getElementById("customMarkerJSONDiv").innerHTML=sJSON + '<input type="button" value="Another Node" onclick="customMarkerNewNode()" />';
	
	
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
	document.getElementById("customMarkerLng").value= position.coords.longitude;
	document.getElementById("customMarkerLat").value=position.coords.latitude;
	addCustomMarker();
}

google.maps.event.addDomListener(window, 'load', initialize);
