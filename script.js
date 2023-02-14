mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHlzYWthZ3VjaGkiLCJhIjoiY2xkbTByeWl5MDF5YjNua2RmdWYyZ240ciJ9.l0mkQSD3VSua3-9301GQbA';

const map = new mapboxgl.Map({
    container: 'map',
    style:'mapbox://styles/emilysakaguchi/cle3eglbo000h01qi6soqwb00',
    center:[-79.402, 43.654],  //this will load Toronto at the centre of the map
    zoom: 12, // this zooms to a level from which users can zoom in or out
});
  
/*I have added all my sources using tilesets because it made the large files easier to work with*/
map.on('load', () => {
map.addSource('redLights', {
    'type': 'vector', 
    'url': 'mapbox://emilysakaguchi.autrtcjc' 
});

map.addLayer({
    'id': 'Red_Light_Cameras_Data-9xih4n',
    'type': 'circle',
    'source': 'redLights', 
    'paint': {
        'circle-radius': 4,
        'circle-color': 'red' // red is a logical colour to represent red lights
    },
    'source-layer': 'Red_Light_Cameras_Data-9xih4n' 
},
);

map.addSource('pedestrianNetwork', { 
    'type': 'vector', 
    'url': 'mapbox://emilysakaguchi.796w18qd' 
});

map.addLayer({
    'id': 'Pedestrian_Network_Data-d7f3ua',
    'type': 'line',
    'source': 'pedestrianNetwork', 
    'paint': {
        'line-color': '#424a6c', // this is set to be fairly neutral so the map is not too busy looking
        'line-opacity': 0.7
    },
    'source-layer': 'Pedestrian_Network_Data-d7f3ua' //name of layer. Get this from mapbox tileset page
},
//This places it below all other data since it is more contextual
     'Red_Light_Cameras_Data-9xih4n',
     'Motor_Vehicle_Collisions_with-alntc8'
);

map.addSource('seriousCollisions', { //Your source ID
    'type': 'vector', 
    'url': 'mapbox://emilysakaguchi.0h4lt48g' //Your tileset link from mapbox
});
map.addLayer({
    'id': 'Motor_Vehicle_Collisions_with-alntc8',
    'type': 'circle',
    'source': 'seriousCollisions', 
    'paint': {
        'circle-radius': 2.5, //there are so many data points, so small size increases visibility
        'circle-color': 'yellow' //this is a good colour because it's associated with warnings/danger and red is better suited to cameras
    },
    'source-layer': 'Motor_Vehicle_Collisions_with-alntc8' 
},
    'Red_Light_Cameras_Data-9xih4n'//I want the red light cameras to be eaisly visible
);
});

