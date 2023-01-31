// import Link from "next/link";
import * as THREE from "three";
import { useEffect } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
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

    const geometry = new THREE.TorusGeometry(20, 3, 16, 40);
    const material = new THREE.MeshBasicMaterial({
      color: 0xe69138,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const canvas = document.getElementById("ez");
    if (!canvas) return console.log("Can not find canvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);
    function cube() {
      const cube = new THREE.BoxGeometry(10, 10, 10);
      const boxMaterial = new THREE.MeshNormalMaterial();
      const boxMesh = new THREE.Mesh(cube, boxMaterial);
      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(100));
      boxMesh.position.set(x as number, y as number, z as number);
      return boxMesh;
    }
    scene.add(cube());
    // const controls = new OrbitControls(camera, renderer.domElement);
    //background
    scene.background = new THREE.Color(0x6fa8dc);
    const animate = () => {
      torus.rotation.x += 0.001;
      torus.rotation.z += 0.001;

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
