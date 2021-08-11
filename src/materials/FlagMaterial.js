import * as THREE from "three";
import { extend } from "@react-three/fiber";

export class FlagMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0.0 },
        tex: { value: undefined },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,
      fragmentShader: `
        varying vec2 vUv;

        uniform sampler2D tex;
        uniform float time;

        void main() {
            vec2 wave = vUv;
            float newTime = time * 0.25;
            wave.x += sin(newTime) * wave.y/2.0;
            //wave.y += sin(newTime + 45.0) * 0.1;
            vec3 flag = texture2D(tex, wave).rgb;
            gl_FragColor.rgb = flag;
            gl_FragColor.a = 1.0;
        }
      `,
    });
  }

  get tex() {
    return this.uniforms.tex.value;
  }
  set tex(v) {
    return (this.uniforms.tex.value = v);
  }
}

extend({ FlagMaterial });
