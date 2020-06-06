// script to create a canvas for 3d to be displayed
/* eslint-disable */

// imports
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// class to load a model in the website
class Model {
  // set up environment & render the model
  async render (model) {
    // renderer
    const canvas = document.querySelector('.case-model');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(700, 450);
    renderer.outputEncoding = THREE.sRGBEncoding;

    // camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    camera.position.set(0, 0, 5);
    camera.lookAt(new THREE.Vector3(-1, 1, 1));

    // controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;

    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe0f3ff);

    // lighting
    const ambientLight = new THREE.AmbientLight(0x555555, 2);
    scene.add(ambientLight);

    let directionalLight = new THREE.DirectionalLight(0x595959, 1);
    scene.add(directionalLight);
    directionalLight = new THREE.DirectionalLight(0x000055, .5);
    scene.add(directionalLight);

    // loaders
    let car;
    const loader = new GLTFLoader();
    loader.load(
      `${model.src}`,
      gltf => {
        scene.add(gltf.scene);
        car = gltf.scene.getObjectByName('Body');
      },
      xhr => {
        console.info(`${xhr.loaded / xhr.total * 100}% loaded`);
      },
      error => {
        console.error(error);
      }
    );

    // rotate function
    const speed = { increment: .01 };

    function rotateCar () {
      if (typeof car === 'object') {
        car.rotation.y += speed.increment;
        car.rotation.x += speed.increment;
        car.rotation.z += speed.increment;
      }
    }

    // responsive resizer
    function resizeRendererToDisplaySize (renderer) {
      const canvas = renderer.domElement;
      const pixelRatio = window.devicePixelRatio;
      const width  = canvas.clientWidth  * pixelRatio | 0;
      const height = canvas.clientHeight * pixelRatio | 0;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    // animation loop
    (function animate () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      rotateCar();
      resizeRendererToDisplaySize(renderer);
    })();
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

// exporting the class
export default Model;
