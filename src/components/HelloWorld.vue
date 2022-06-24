<template>
  <div class="about">
    <div id="model_view">
      <div
        id="container"
        style="width: 100%; height: 100%; overflow: hidden"
      ></div>
    </div>
  </div>
</template>


<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  data() {
    return {
      object: null,
      // THREE
      camera: null,
      scene: null,
      renderer: null,

      // CONTROL
      control_is_on: true,
      controls: null,
      default_camera_position: {
        x: 50,
        y: 50,
        z: -50,
      },

      // SELECT
      interactionManager_is_on: true,
      selected: [],
      interactionManager: null,
      unvisible_opacity: 0.3,

      // MODELS AND OBJECTS
      all_models: [],
      object_names: [],
      all_objects: [],
    };
  },

  mounted() {
    this.default_camera_position = { x: 0, y: 40, z: 15 };

    this.init();
    this.addSceneLight();
    this.loadModel();
    // ANIMATION
    this.animate();
  },

  methods: {
    // INIT
    init() {
      // SCENE
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#DEFEFF");

      // di Добавить задний фон на сцену
      // this.loader = new THREE.TextureLoader();
      // this.bgTexture = this.loader.load("images/background.jpg");
      // this.scene.background = this.bgTexture;

      // RENDER
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      // this.renderer.gammaFactor = 1
      // this.renderer.outputEncoding = THREE.RGBADepthPacking;

      // this.renderer.toneMapping = THREE.ReinhardToneMapping;
      // this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

      // this.renderer.toneMappingExposure = 0.85;
      let container = document.getElementById("container");
      container.appendChild(this.renderer.domElement);

      // CAMERA
      // var rect = document.getElementById("container").getBoundingClientRect();
      // var height = rect.height;
      // var width = rect.width;

      this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        // width / height,
        1,
        15000
      );

      this.camera.position.x = this.default_camera_position.x;
      this.camera.position.y = this.default_camera_position.y;
      this.camera.position.z = this.default_camera_position.z;

      const pointLight = new THREE.PointLight(0xffffff, 1);
      this.camera.add(pointLight);

      // init tick clock
      // this.clock = new THREE.Clock();

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableRotate = false;
      // di Максимальное и минимальное приближение камеры
      this.controls.minDistance = 15;
      this.controls.maxDistance = 50;
      // di Touch fingers
      this.controls.touches = {
        ONE: THREE.TOUCH.DOLLY_PAN,
      };
      // di Ограничение по Rotate
      // this.controls.minPolarAngle = 0
      // this.controls.maxPolarAngle = 1.5
      // di Передвигает картой через ЛКМ, а не через ПКМ (по умолчанию)
      this.controls.mouseButtons = {
        LEFT: THREE.MOUSE.PAN,
      };
    },

    // TiCK
    async animate() {
      requestAnimationFrame(this.animate);

      this.renderer.render(this.scene, this.camera);
      this.camera.updateProjectionMatrix();

      // const delta = this.clock.getDelta();
      // if (
      //   this.mixers.length > 0 &&
      //   this.use_explosion_model && this.explosion_scalar <= 0
      // ) {
      //   this.mixers.forEach((mixer) => {
      //     mixer.update(delta);
      //   });
      // }

      // STATS
      // if (this.use_stats) {
      //   this.stats.update();
      // }

      // controls
      // if (this.control_is_on) {
      //   this.controls.update();
      // }
    },

    // SCENE LIGHT
    addSceneLight() {
      // RectAreaLightUniformsLib.init();
      // const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
      // hemiLight.position.set( 0, 20000, 0 );
      // this.scene.add( hemiLight );
      const ambient_light = new THREE.AmbientLight(0xffffff);
      this.scene.add(ambient_light);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
      hemiLight.color.setHSL(0.6, 1, 0.6);
      hemiLight.groundColor.setHSL(0.095, 1, 0.85);
      hemiLight.position.set(0, 50, 0);
      this.scene.add(hemiLight);

      // di Видишь в какую сторону свет падает, где центр модельки, какую зону свет покрывает, куда рэйкастер смотрит
      // const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
      // this.scene.add(hemiLightHelper);

      const dirLight = new THREE.DirectionalLight(0xffffff);
      const dirLight_1 = new THREE.DirectionalLight(0xffffff);
      dirLight_1.castShadow = true;
      dirLight_1.position.set(700, 2000, -900);
      this.scene.add(dirLight_1);

      const dirLight_2 = new THREE.DirectionalLight(0x0087ff);
      dirLight_2.castShadow = true;
      dirLight_2.position.set(0, 1500, 0);
      this.scene.add(dirLight_2);

      const dirLight_2_1 = new THREE.DirectionalLight(0xc1ff00);
      dirLight_2_1.castShadow = true;
      dirLight_2_1.position.set(0, -2000, 0);
      this.scene.add(dirLight_2_1);

      const dirLight_3 = new THREE.DirectionalLight(0xffffff);
      dirLight_3.castShadow = true;
      dirLight_3.position.set(300, 2000, 2000);
      this.scene.add(dirLight_3);

      dirLight.shadow.camera.top = 180;
      dirLight.shadow.camera.bottom = -100;
      dirLight.shadow.camera.left = -120;
      dirLight.shadow.camera.right = 120;
    },

    loadModel() {
      {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load("models/first_floor.gltf", (gltf) => {
          const root = gltf.scene;
          this.scene.add(root);
          gltf.scene.scale.set(17.0, 17.0, 17.0);

          // compute the box that contains all the stuff
          // from root and below
          const box = new THREE.Box3().setFromObject(root);

          const boxSize = box.getSize(new THREE.Vector3()).length();
          const boxCenter = box.getCenter(new THREE.Vector3());

          // set the camera to frame the box
          this.frameArea(boxSize * 0.5, boxSize, boxCenter, this.camera);
          this.gltfloader.scale.set(10, 10, 10);

          // update the Trackball controls to handle the new size
          this.controls.maxDistance = boxSize * 10;
          this.controls.target.copy(boxCenter);
          this.controls.update();
        });
      }
    },

    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
  },
};
</script>