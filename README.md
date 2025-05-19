# ThreeJs-Tamplets
Cool Collection of boring functions, so that building 3D websites becomes more fun

How to call the functions in your Main file.

import { set_up } from './js/setUp.js';

import { view } from './js/view.js';

import { setupLights } from './js/lights.js';

import { createEnvironmentMap } from './js/envMap.js';

import { loadFBXModelCustom } from './js/obj/fbx_costum.js';

import { create_object } from './js/createObject.js';

// 🎬 1-liner: set up scene, camera, renderer
const { scene, camera, renderer } = set_up();

// 🧭 1-liner: set up OrbitControls and helpers
view(scene, camera, renderer);

// 🎥 Camera view setup
camera.position.set(40, 20, 40);
renderer.setClearColor(0x222222);

// 💡 1-liner: ambient and directional lights
const { ambientLight } = setupLights();
scene.add(ambientLight);

// 🌌 1-liner: environment map from custom lib
const envMap = createEnvironmentMap();
scene.environment = envMap;

// 📦 1-liner: load FBX model using custom loader
loadFBXModelCustom("fbx/pc.fbx", 0.1, { x: 0, y: 5, z: -10 }, 6, mixers, (loadedObject, error) => {
    if (error) return console.error('Model load failed:', error);
    object = loadedObject;
    scene.add(object);
    object.rotation.y = 25;
});

// 🧱 1-liner: create and add any geometry with custom material and position
const shape = create_object({
  geometryType: 'torus',
  position: { x: 10, y: 0, z: 0 },
  size: 3,
  materialType: 'phong',
  materialOptions: { color: 0xff00ff }
});
scene.add(shape);
