import './stylesheet.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer ({
    canvas: document.querySelector('#TOPv'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(box.offsetWidth, box.offsetHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.002
    torus.rotation.y += 0.001
    torus.rotation.z += 0.001

    controls.update

    renderer.render(scene, camera);
}

animate()