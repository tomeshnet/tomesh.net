//mapStyling from https://mapstyle.withgoogle.com/
var mapStyle = [
  {
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'weight': '2.00'
      }
    ]
  },
  {
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#9c9c9c'
      }
    ]
  },
  {
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'elementType': 'labels.text',
    'stylers': [
      {
        'color': '#0e093f'
      },
      {
        'saturation': '0'
      },
      {
        'lightness': '0'
      },
      {
        'visibility': 'on'
      },
      {
        'weight': '0.4'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.neighborhood',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'landscape',
    'stylers': [
      {
        'color': '#f2f2f2'
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#fdfffc'
      }
    ]
  },
  {
    'featureType': 'landscape.man_made',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#fdfffc'
      }
    ]
  },
  {
    'featureType': 'poi',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road',
    'stylers': [
      {
        'saturation': -100
      },
      {
        'lightness': 45
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#dde9e3'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#7b7b7b'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#ffffff'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'stylers': [
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'transit',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'labels',
    'stylers': [
      {
        'saturation': '0'
      },
      {
        'lightness': '0'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'labels.text',
    'stylers': [
      {
        'weight': '0.51'
      }
    ]
  },
  {
    'featureType': 'water',
    'stylers': [
      {
        'color': '#46bcec'
      },
      {
        'visibility': 'on'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#c4dfed'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#070707'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#ffffff'
      }
    ]
  }
];
if (mapStyle) { /*Make code climate happy*/ }
