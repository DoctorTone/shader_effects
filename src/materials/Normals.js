import * as THREE from "three";
import { extend } from "@react-three/fiber";

export class NormalMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
            varying vec2 vUv;

            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }`,
      fragmentShader: `
                varying vec2 vUv;

                void main() {
                    gl_FragColor = vec4(vUv.x, vUv.y, (vUv.x + vUv.y), 1.0);
                }`,
    });
  }
}

extend({ NormalMaterial });
