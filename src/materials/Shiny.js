import * as THREE from "three";
import { extend } from "@react-three/fiber";

const ShinyMaterial = {
  uniforms: {
    time: { value: 0.0 },
  },
  vertexShader: `
            uniform float time;
            varying vec3 Normal;
            varying vec3 LocalPos;
            varying vec4 WorldPos;
            varying vec3 camPos;

            void main() {
                Normal = normal;
                camPos = cameraPosition;
                LocalPos = position;
                if (LocalPos.x > 0.0) {
                    LocalPos.y += 1.0 * sin(time);
                }
                gl_Position = projectionMatrix * modelViewMatrix * vec4( LocalPos, 1.0 );
                WorldPos = modelViewMatrix * vec4( LocalPos, 1.0 );
            }`,
  fragmentShader: `
            vec3 shading(vec3 N, vec3 V, vec3 L) {
                // Materials
                vec3 Ka = vec3(0.1, 0.1, 0.1); // Ambient
                vec3 Kd = vec3(0.1, 0.1, 0.85); // Diffuse
                vec3 Ks = vec3(0.5, 0.5, 0.5); // Specular
                float shininess = 32.0; // Shininess

                // Light properties
                vec3 lightColour = vec3(1.0, 1.0, 1.0);
                vec3 ambientLight = vec3(0.1, 0.1, 0.1);

                // Halfway vector
                vec3 H = normalize(L + V);
                //vec3 H = reflect(-L, N);

                // Ambient term
                vec3 ambient = ambientLight;

                // Diffuse term
                float diffuseLight = max(dot(L, N), 0.0);
                vec3 diffuse = Kd * lightColour * diffuseLight;

                // Specular term
                float specularLight = pow(max(dot(H, N), 0.0), shininess);
                if (diffuseLight <= 0.0) {
                    specularLight = 0.0;
                }
                vec3 specular = lightColour * specularLight;
                return ambient + diffuse + specular;
            }

            varying vec4 WorldPos;
            varying vec3 Normal;
            varying vec3 camPos;

            void main() {
                vec3 lightPos = vec3(30.0, 30.0, 30.0);

                vec3 L = normalize(lightPos - WorldPos.xyz);
                vec3 V = normalize(camPos - WorldPos.xyz);
                vec3 N = normalize(Normal);

                vec3 shade = shading(N, V, L);
                gl_FragColor.rgb = shade;
                gl_FragColor.a = 1.0;
            }`,
};

export default ShinyMaterial;
