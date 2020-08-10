var EarthRadiusMeters = 6378137.0; // meters
/* Based the on the Latitude/longitude spherical geodesy formulae & scripts
   at http://www.movable-type.co.uk/scripts/latlong.html
   (c) Chris Veness 2002-2010
*/
google.maps.LatLng.prototype.DestinationPoint = function (brng, dist) {
  var R = EarthRadiusMeters; // earth's mean radius in meters
  brng = brng.toRad();
  var lat1 = this.lat().toRad(), lon1 = this.lng().toRad();
  var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist / R) +
    Math.cos(lat1) * Math.sin(dist / R) * Math.cos(brng));
  var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist / R) * Math.cos(lat1),
    Math.cos(dist / R) - Math.sin(lat1) * Math.sin(lat2));

  return new google.maps.LatLng(lat2.toDeg(), lon2.toDeg());
};

// === A function which returns the bearing between two LatLng in radians ===
// === If v1 is null, it returns the bearing between the first and last vertex ===
// === If v1 is present but v2 is null, returns the bearing from v1 to the next vertex ===
// === If either vertex is out of range, returns void ===
google.maps.LatLng.prototype.Bearing = function (otherLatLng) {
  var from = this;
  var to = otherLatLng;
  if (from.equals(to)) {
    return 0;
  }
  var lat1 = from.latRadians();
  var lon1 = from.lngRadians();
  var lat2 = to.latRadians();
  var lon2 = to.lngRadians();
  var angle = - Math.atan2(Math.sin(lon1 - lon2) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));
  if (angle < 0.0) angle += Math.PI * 2.0;
  if (angle > Math.PI) angle -= Math.PI * 2.0;
  return parseFloat(angle.toDeg());
};


/**
 * Extend the Number object to convert degrees to radians
 *
 * @return {Number} Bearing in radians
 * @ignore
 */
Number.prototype.toRad = function () {
  return this * Math.PI / 180;
};

/**
 * Extend the Number object to convert radians to degrees
 *
 * @return {Number} Bearing in degrees
 * @ignore
 */
Number.prototype.toDeg = function () {
  return this * 180 / Math.PI;
};

/**
 * Normalize a heading in degrees to between 0 and +360
 *
 * @return {Number} Return 
 * @ignore
 */
Number.prototype.toBrng = function () {
  return (this.toDeg() + 360) % 360;
};
//end
