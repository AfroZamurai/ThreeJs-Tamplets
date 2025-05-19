// myModule.js
import * as THREE from 'three';



function set_up() {
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({

    canvas: document.querySelector('#bg'),

  });

  return {
    scene,
    camera,
    renderer
  };
}





export { set_up };
