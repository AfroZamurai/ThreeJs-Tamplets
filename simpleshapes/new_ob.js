import * as THREE from 'three';

// const obgj = create_object({
  //   position: { x: 0, y: 15, z: -3 },
  //   size: 2,
  //   geometryType: 'lathe',
  //   materialOptions: { color: 0xff0000, wireframe: true }, // Customize material here
  //   materialType: 'basic', // Specify material type
  // });

function create_object({
  position = { x: 0, y: 0, z: 0 },
  size = 3,
  geometryType = 'sphere',
  geometryParams = {},
  materialOptions = { color: 0xffffff, wireframe: true }, // Add a materialOptions parameter
  materialType = 'basic', // Add a materialType parameter
}) {
  let geometry;

  switch (geometryType.toLowerCase()) {
      case 'box':
        geometry = new THREE.BoxGeometry(size, size, size, ...Object.values(geometryParams));
        break;
      case 'capsule':
        geometry = new THREE.CapsuleGeometry(size, size * 2, ...Object.values(geometryParams));
        break;
      case 'circle':
        geometry = new THREE.CircleGeometry(size, ...Object.values(geometryParams));
        break;
      case 'cone':
        geometry = new THREE.ConeGeometry(size, size * 2, ...Object.values(geometryParams));
        break;
      case 'cylinder':
        geometry = new THREE.CylinderGeometry(size, size, size * 2, ...Object.values(geometryParams));
        break;
      case 'dodecahedron':
        geometry = new THREE.DodecahedronGeometry(size, ...Object.values(geometryParams));
        break;
      case 'edges':
        geometry = new THREE.EdgesGeometry(geometryParams.inputGeometry);
        break;
      case 'extrude':
        geometry = new THREE.ExtrudeGeometry(geometryParams.shapes, geometryParams.options);
        break;
      case 'icosahedron':
        geometry = new THREE.IcosahedronGeometry(size, ...Object.values(geometryParams));
        break;
      case 'lathe':
        geometry = new THREE.LatheGeometry(geometryParams.points, ...Object.values(geometryParams));
        break;
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(size, ...Object.values(geometryParams));
        break;
      case 'plane':
        geometry = new THREE.PlaneGeometry(size, size, ...Object.values(geometryParams));
        break;
      case 'polyhedron':
        geometry = new THREE.PolyhedronGeometry(
          geometryParams.vertices,
          geometryParams.indices,
          size,
          ...Object.values(geometryParams)
        );
        break;
      case 'ring':
        geometry = new THREE.RingGeometry(
          geometryParams.innerRadius,
          geometryParams.outerRadius,
          ...Object.values(geometryParams)
        );
        break;
      case 'shape':
        geometry = new THREE.ShapeGeometry(geometryParams.shapes, ...Object.values(geometryParams));
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(size, ...Object.values(geometryParams));
        break;
      case 'tetrahedron':
        geometry = new THREE.TetrahedronGeometry(size, ...Object.values(geometryParams));
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(
          geometryParams.radius,
          geometryParams.tube,
          ...Object.values(geometryParams)
        );
        break;
      case 'torusknot':
        geometry = new THREE.TorusKnotGeometry(
          geometryParams.radius,
          geometryParams.tube,
          ...Object.values(geometryParams)
        );
        break;
      case 'tube':
        geometry = new THREE.TubeGeometry(
          geometryParams.path,
          geometryParams.segments,
          ...Object.values(geometryParams)
        );
        break;
      case 'wireframe':
        geometry = new THREE.WireframeGeometry(geometryParams.geometry);
        break;
      default:
        // Default to sphere if the geometry type is not recognized
        geometry = new THREE.SphereGeometry(size, ...Object.values(geometryParams));
        break;
    }let material;

    switch (materialType.toLowerCase()) {
      case 'basic':
        material = new THREE.MeshBasicMaterial(materialOptions);
        break;
      case 'phong':
        material = new THREE.MeshPhongMaterial(materialOptions);
        break;
      case 'lambert':
        material = new THREE.MeshLambertMaterial(materialOptions);
        break;
      case 'normal':
        material = new THREE.MeshNormalMaterial(materialOptions);
        break;
      case 'depth':
        material = new THREE.MeshDepthMaterial(materialOptions);
        break;
      case 'face':
        material = new THREE.MeshFaceMaterial(materialOptions);
        break;
      default:
        material = new THREE.MeshBasicMaterial(materialOptions);
        break;
    }
  
    const object = new THREE.Mesh(geometry, material);
    object.position.set(position.x, position.y, position.z);
    return object;
  }

  
  export {create_object} ;