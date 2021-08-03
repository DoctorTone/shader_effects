import * as THREE from "three";
import { extend } from "@react-three/fiber";

export class ShinyMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0.0 },
      },
      vertexShader: `
            uniform float time;
            varying vec3 Normal;
            varying vec3 Position;
            varying vec3 camPos;

            void main() {
                Normal = normalize(normalMatrix * normal);
                camPos = cameraPosition;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                if (gl_Position.x > 0.0) {
                    gl_Position.y += sin(time);
                }
                Position = gl_Position.xyz;
            }`,
      fragmentShader: `
            vec3 shading(vec3 N, vec3 V, vec3 L) {
                // Materials
                vec3 Ka = vec3(0.1, 0.1, 0.1); // Ambient
                vec3 Kd = vec3(0.1, 0.1, 0.85); // Diffuse
                vec3 Ks = vec3(0.5, 0.5, 0.5); // Specular
                float shininess = 100.0; // Shininess
                // Light properties
                vec3 lightColour = vec3(1.0, 1.0, 1.0);
                vec3 ambientLight = vec3(0.1, 0.1, 0.1);
                // Halfway vector
                vec3 H = normalize(L + V);
                // Ambient term
                vec3 ambient = Ka * ambientLight;
                // Diffuse term
                float diffuseLight = max(dot(L, N), 0.0);
                vec3 diffuse = Kd * lightColour * diffuseLight;
                // Specular term
                float specularLight = pow(max(dot(H, N), 0.0), shininess);
                if (diffuseLight <= 0.0) {
                    specularLight = 0.0;
                }
                vec3 specular = Ks * lightColour * specularLight;
                return ambient + diffuse + specular;
            }

            varying vec3 Position;
            varying vec3 Normal;
            varying vec3 camPos;

            void main() {
                vec3 lightPos = vec3(30.0, 30.0, 60.0);

                vec3 L = normalize(lightPos - Position);
                vec3 V = normalize(camPos - Position);
                vec3 N = normalize(Normal);

                vec3 shade = shading(N, V, L);
                gl_FragColor.rgb = shade;
                gl_FragColor.a = 1.0;
            }`,
    });
  }
}

extend({ ShinyMaterial });
