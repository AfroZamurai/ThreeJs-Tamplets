import { create_object } from "./new_ob";

function createCylinderObject(position, size, color, wireframe) {
    const geometryType = 'cylinder';
    const geometryParams = {
      radiusTop: 0,
      radiusBottom: size,
      height: size * 2,
      radialSegments: 20,
      heightSegments: 1,
    };
    const materialOptions = { color, wireframe };
  
    return create_object({
      position,
      size,
      geometryType,
      geometryParams,
      materialOptions,
    });
  }
  
  // In main.js
  const cylinderObject = createCylinderObject({ x: -5, y: -5, z: -5 }, 3, 0x00ff00, false);
  
