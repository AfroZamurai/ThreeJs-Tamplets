// Import THREE.js and build function
import * as THREE from 'three';
import {  set_up   } from './setUp.js';

// Define the view function and pass the scene, camera, and renderer as parameters
function view(scene, camera, renderer) {

  // Configure the renderer and camera here
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.set(0,0,-70);
  // scene. fog = new THREE. Fog( 0xffffff, 0.010, 100 );


  // Render the scene using the provided renderer and camera
  renderer.render(scene, camera);
}




export{view};