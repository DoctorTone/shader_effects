import * as THREE from "three";
import { extend } from "@react-three/fiber";

export class ShinyMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: `varying vec2 vUv;
            varying vec3 Normal;
            void main() {
                vUv = uv;
                Normal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }`,
      fragmentShader: `
            varying vec2 vUv;
            varying vec3 Normal;
            void main() {
                gl_FragColor = vec4(Normal.x, Normal.y, Normal.z, 1.0);
            }`,
    });
  }
}

extend({ ShinyMaterial });
