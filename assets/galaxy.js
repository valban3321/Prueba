import * as THREE from "https://unpkg.com/three@0.158.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.158.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.getElementById("galaxy");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

/* 🔴 ESTA LÍNEA ES CLAVE */
renderer.setClearColor(0x000000, 1);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = true;

// GALAXIA
const geometry = new THREE.BufferGeometry();
const starCount = 6000;
const positions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 30;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.03
});

const stars = new THREE.Points(geometry, material);
scene.add(stars);

// LUZ (SIN ESTO, TAMBIÉN PUEDE VERSE NEGRO)
scene.add(new THREE.AmbientLight(0xffffff, 1));

function animate() {
  requestAnimationFrame(animate);
  stars.rotation.y += 0.0006;
  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
