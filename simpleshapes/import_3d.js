import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// // Outside of the create_object function
// addGLTFModelToScene({
//   scene,
//   modelPath: 'model_planet/planet.gltf',
//   size: 0.05,
//   position: { x: 0, y: 0, z: 0 },
//   onLoadCallback: (model) => {
//     // Callback when the GLTF model is loaded
//     console.log('GLTF model loaded:', model);
//     loadedModel = model; // Assign the loaded model to the variable
//     scene.add(loadedModel); // Add the loaded model to the scene
//   },
//   onErrorCallback: (error) => {
//     // Handle loading errors
//     console.error('Error loading GLTF model:', error);
//   },
// });

function addGLTFModelToScene({
  scene,
  modelPath,
  size = 1,
  position = { x: 0, y: 0, z: 0 },
  onLoadCallback = null,
  onErrorCallback = null,
}) {
  const loader = new GLTFLoader();

  loader.load(
    modelPath,
    (gltf) => {
      const model = gltf.scene;

      // Set the scale
      model.scale.set(size, size, size);

      // Set the position
      model.position.set(position.x, position.y, position.z);

      // Add the loaded model to the scene
      scene.add(model);

      // Callback when the model is loaded
      if (onLoadCallback) {
        onLoadCallback(model);
      }
    },
    undefined, // onProgress callback (optional)
    (error) => {
      // Handle loading errors
      if (onErrorCallback) {
        onErrorCallback(error);
      } else {
        console.error('Error loading GLTF model:', error);
      }
    }
  );
}

export { addGLTFModelToScene };
