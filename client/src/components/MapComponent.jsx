import React, { useEffect, useState, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import { Vector as VectorSource } from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import { Icon, Style, Fill, Stroke, Text } from 'ol/style';
import { defaults, ScaleLine, FullScreen } from 'ol/control';
import LandmarkInfo from './LandmarkInfo';
import LandmarkFinder from '../apis/LandmarkFinder';

const MapComponent = () => {
    // Create map ref
    // Create markers and selected landmark states
    const map = useRef(null);
    const [markers, setMarkers] = useState([]);
    const [selectedLandmark, setSelectedLandmark] = useState(null);

    // Create OpenLayers map
    useEffect(() => {
        if (!map.current) {
            // OSM layer
            const osmLayer = new TileLayer({
                preload: Infinity,
                source: new OSM(),
            });
            
            const centerCoord = fromLonLat([-79.99624, 40.44181]);
            // Create the map
            map.current = new Map({
                target: 'map',
                controls: defaults().extend([
                    new ScaleLine({
                        units: 'us'
                    }),
                    new FullScreen()
                ]),
                layers: [osmLayer],
                view: new View({
                    constrainResolution: true,
                    center: centerCoord,
                    zoom: 13,
                    maxZoom: 20
                }),
            });
            map.current.on('postcompose', (e) => {
                document.querySelector('canvas').style.filter="invert(90%) hue-rotate(180deg)";
            });

        }
    }, []);
    
    // Get landmark information from backend
    // Push latitude, longitude, and name to geocodedMarkers array
    // Set markers state equal to geocodedMarkers
    useEffect(() => {
        const fetchAddresses = async() => {
            try {
                const response = await LandmarkFinder.get("/");
                let geocodedMarkers = [];
                for (let i = 0; i < response.data.data.landmarks.length; i++) {
                    geocodedMarkers.push([
                        response.data.data.landmarks[i].latitude,
                        response.data.data.landmarks[i].longitude,
                        response.data.data.landmarks[i].name
                    ]);
                }
                setMarkers(geocodedMarkers);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchAddresses();
    }, []);
    
    // Place markers on OpenLayers map and style them
    useEffect(() => {
        if (map.current && markers.length > 0) {
            const vectorSource = new VectorSource();
            markers.forEach((marker) => {
                const feature = new Feature({
                    geometry: new Point(fromLonLat([marker[1], marker[0]])),
                    name: marker[2]
                });

                feature.setStyle(new Style({
                    image: new Icon({
                        anchor: [0.5, 1],
                        src: 'https://icon-library.com/images/google-map-pin-icon-png/google-map-pin-icon-png-11.jpg',
                        scale: 0.05
                    }),
                    text: new Text({
                        text: marker[2],
                        font: (map.current.getView().getZoom() * 0.80) + 'px Calibri,sans-serif',
                        fill: new Fill({
                          color: 'black',
                        }),
                        stroke: new Stroke({
                          color: 'white',
                          width: 2,
                        })
                    })
                }));
                
                vectorSource.addFeature(feature);
            });
            const markerLayer = new VectorLayer({
                source: vectorSource
            });
            map.current.addLayer(markerLayer);

            // If marker is selected, set selected landmark equal to the name of the marker
            map.current.on('click', (evt) => {
                const feature = map.current.forEachFeatureAtPixel(evt.pixel, (feature) => {
                    return feature;
                });
                if (feature) {
                    setSelectedLandmark(feature.get("name"));
                }
            });

            
        }
    }, [markers]);

    // Return map component with landmark info
    return (
        <div className="row m-0">
            <div className="col-4 mx-auto my-5 p-0 border border-dark border-5" style={{ height: '700px', width: '700px'}} id="map"></div>
            <LandmarkInfo landmarkName={selectedLandmark} />
        </div>
    );
};

export default MapComponent;
