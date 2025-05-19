import * as THREE from 'three';

function setupLights() {
  // Create and add a point light to the scene

  const DirectionalLight = new THREE.DirectionalLight(0xffffff , 10); // White light
  DirectionalLight.position.set(30, 25, 5);
  DirectionalLight.castShadow = true;

  // Create and add an ambient light to the scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 10); // Dim white light

  // Return the lights as an object for easy access
  return {
    DirectionalLight,
    ambientLight,
  };
}

export { setupLights };
