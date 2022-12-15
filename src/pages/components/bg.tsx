// import Link from "next/link";
import * as THREE from "three";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const BackGround = () => {
  useEffect(() => {
    const { Scene } = THREE;
    const scene = new Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );

    function sphere(number: number) {
      function random() {
        return Math.floor(Math.random() * 30);
      }
      let a = 0;
      while (a < number) {
        const geometry = new THREE.SphereGeometry(4, 32, 16);
        const material = new THREE.MeshNormalMaterial();
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(random(), random(), random());
        scene.add(sphere);
        a += 1;
      }
    }
    sphere(15);
    const canvas = document.getElementById("ez");
    if (!canvas) return console.log("Can not find canvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);
    const cube = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(cube, boxMaterial);
    scene.add(boxMesh);
    const controls = new OrbitControls(camera, renderer.domElement);
    //background
    scene.background = new THREE.Color(0x6fa8dc);
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return (
    <>
      <canvas id="ez"></canvas>
    </>
  );
};

export default BackGround;
