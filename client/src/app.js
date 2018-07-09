const Map = require("./models/map.js");
const InfoView = require('./views/info_view.js')
const LandmarkView = require('./views/landmark_view.js');
const MapView = require('./views/map_view.js');
const NextView = require('./views/next_view.js');
// const ScoreView = require('./views/score_view.js');
const SubmitView = require('./views/submit_view.js');
const Landmark = require('./models/landmark.js');

document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('#action-button');

  const nextView = new NextView(button);
  nextView.initialise();

  const submitView = new SubmitView(button, nextView.handler);
  submitView.initialise();

  const landmarkViewContainer = document.querySelector('#landmark');
  const landmarkView = new LandmarkView(landmarkViewContainer);
  landmarkView.initialise();

  const infoView = new InfoView(landmarkViewContainer);
  infoView.initialise();

  const mapViewContainer = document.querySelector('#map');
  const mapView = new MapView(mapViewContainer);
  mapView.initialise();


  const landmarkUrl = 'http://localhost:3000/api/landmarks/random-landmark';
  const landmark = new Landmark(landmarkUrl);
  landmark.initialise();

  const map = new Map();
  map.initialise();

});
