<template>
  <div id="container">
    <ButtonMenu />
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import ButtonMenu from "@/components/ButtonMenu.vue";
// import { GUI } from 'dat.gui'
var container, controls;
var camera, scene, raycaster, renderer;
var INTERSECTED;
// var MEHCANISM_CONTROLS;
const pointer = new THREE.Vector2();

export default {
  components: {
    ButtonMenu,
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
    this.animate();
  },

  methods: {
    async init() {
      //Camera create and settings
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        15000
      );
      camera.position.set(0, 40, 15);

      //Create Scene and settings
      scene = new THREE.Scene();
      scene.background = new THREE.Color("#DEFEFF");

      // di Добавить задний фон на сцену
      // this.loader = new THREE.TextureLoader();
      // this.bgTexture = this.loader.load("images/background.jpg");
      // scene.background = this.bgTexture;

      //Create Light for scene
      const dirLight = new THREE.DirectionalLight(0xffffff);
      const dirLight_1 = new THREE.DirectionalLight(0xffffff);
      dirLight_1.castShadow = true;
      dirLight_1.position.set(700, 2000, -900);
      scene.add(dirLight_1);

      const dirLight_2 = new THREE.DirectionalLight(0x0087ff);
      dirLight_2.castShadow = true;
      dirLight_2.position.set(0, 1500, 0);
      scene.add(dirLight_2);

      const dirLight_2_1 = new THREE.DirectionalLight(0xc1ff00);
      dirLight_2_1.castShadow = true;
      dirLight_2_1.position.set(0, -2000, 0);
      scene.add(dirLight_2_1);

      const dirLight_3 = new THREE.DirectionalLight(0xffffff);
      dirLight_3.castShadow = true;
      dirLight_3.position.set(300, 2000, 2000);
      scene.add(dirLight_3);

      dirLight.shadow.camera.top = 180;
      dirLight.shadow.camera.bottom = -100;
      dirLight.shadow.camera.left = -120;
      dirLight.shadow.camera.right = 120;

      const loader = new GLTFLoader();
      loader.load(
        "models/first_floor.gltf",
        function (gltf_model1) {
          scene.add(gltf_model1.scene);
          gltf_model1.scene.scale.set(17.0, 17.0, 17.0);
          console.log(
            ">>>THREE.JS:::gltf_model1",
            scene.add(gltf_model1.scene)
          );
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );

      loader.load(
        "models/second_floor.gltf",
        function (gltf_model2) {
          scene.add(gltf_model2.scene);
          gltf_model2.scene.scale.set(17.0, 17.0, 17.0);
          console.log(
            ">>>THREE.JS:::gltf_model2",
            scene.add(gltf_model2.scene)
          );
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );

      //Raycaster-settings
      raycaster = new THREE.Raycaster();
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      //Orbit-controls create and settings
      controls = new OrbitControls(camera, renderer.domElement);
      controls.listenToKeyEvents(window);
      controls.enableRotate = false;
      // di Максимальное и минимальное приближение камеры
      controls.minDistance = 15;
      controls.maxDistance = 50;
      // di Touch fingers
      controls.touches = {
        ONE: THREE.TOUCH.DOLLY_PAN,
      };
      // di Ограничение по Rotate
      // controls.minPolarAngle = 0
      // controls.maxPolarAngle = 1.5
      // di Передвигает картой через ЛКМ, а не через ПКМ (по умолчанию)
      controls.mouseButtons = {
        LEFT: THREE.MOUSE.PAN,
        RIGHT: THREE.MOUSE.ROTATE,
      };
      //Get element by HTML
      container = document.createElement("div");
      document.body.appendChild(container);
      container.appendChild(renderer.domElement);
      document.addEventListener("mousemove", this.onPointerMove);
      window.addEventListener("resize", this.onWindowResize);
    },

    //Подгон размера окна к данным матрице
    async onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    //Отслеживание мыши
    async onPointerMove(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    },
    //Выделение объектов и срабатывание анимации
    async animate() {
      //Срабатывание анимации
      requestAnimationFrame(this.animate);
      //Обновление Орбит контроля
      controls.update();
      //Обновление Твин для более плавного движения модели
      TWEEN.update();
      //Рэйкастер для захвата модели на точке где расположена мышь
      raycaster.setFromCamera(pointer, camera);
      //Функция срабатывающаяя на двойное нажатие мыши
      document.addEventListener("dblclick", async function () {
        const intersects = raycaster.intersectObjects(
          scene.children[4].children,
          true
        );
        //Получение объекта после реакции с рэйкастером
        if (intersects.length > 0) {
          if (INTERSECTED != intersects[0].object) {
            INTERSECTED = intersects[0].object;
            INTERSECTED.material = new THREE.MeshPhongMaterial();
            INTERSECTED.material.color.set("red");
            return INTERSECTED;
          }
          INTERSECTED = null;
        }
      });

      INTERSECTED = null;
      this.render();
    },
    //Функция рендера страницы
    async render() {
      renderer.render(scene, camera);
    },
  },
};
</script>

<style>
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  z-index: -1;
  display: block;
}
</style>