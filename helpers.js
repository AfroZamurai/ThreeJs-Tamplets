import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function help(scene, camera, renderer, DirectionalLight) { // Pass pointLight as an argument
  const lightHelper = new THREE.DirectionalLightHelper(DirectionalLight);
  const gridHelper = new THREE.GridHelper(200, 50);
  scene.add(lightHelper, gridHelper);

  const controls = new OrbitControls(camera, renderer.domElement);

  return {
    lightHelper,
    gridHelper,
    controls
  };
}

export { help };
