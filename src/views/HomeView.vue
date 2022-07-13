<template>
  <div id="container">
    <!-- <ButtonSearch /> -->
    <ButtonMenu />
    <button @click="buttonModel1()" class="bubbly-button">1 Этаж</button>
    <button
      @click="buttonModel2()"
      class="bubbly-button"
      style="margin-top: 15em"
    >
      2 Этаж
    </button>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import ButtonMenu from "@/components/ButtonMenu.vue";
// import ButtonSearch from "@/components/ButtonSearch.vue";
// import { GUI } from 'dat.gui'
var container, controls;
var camera, scene, raycaster, renderer;
var INTERSECTED;
// var MEHCANISM_CONTROLS;
const pointer = new THREE.Vector2();

export default {
  components: {
    ButtonMenu,
    // ButtonSearch,
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
      // scene.background = new THREE.Color("#DEFEFF");

      // di Добавить задний фон на сцену
      this.loader = new THREE.TextureLoader();
      this.bgTexture = this.loader.load("images/background2.jpg");
      scene.background = this.bgTexture;

      //Create Light for scene
      const dirLight = new THREE.DirectionalLight(0xffffff);
      const dirLight_1 = new THREE.DirectionalLight(0xffffff);
      dirLight_1.castShadow = true;
      dirLight_1.position.set(700, 2000, -900);
      scene.add(dirLight_1);

      const dirLight_2 = new THREE.DirectionalLight(0xffffff);
      dirLight_2.castShadow = true;
      dirLight_2.position.set(300, 2000, 2000);
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
        "models/InUse/first_floor.gltf",
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
        "models/InUse/second_floor.gltf",
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
      setTimeout(function () {
        scene.children[4].visible = true;
        scene.children[5].visible = false;
      }, 500);
    },

    //Подгон размера окна к данным матрице
    async onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },

    //Выбрать модель через кнопку (1 этаж / 2этаж )
    async buttonModel1() {
      scene.children[4].visible = true;
      scene.children[5].visible = false;
      console.log("MODEL1::::>>>", scene.children);
    },

    async buttonModel2() {
      scene.children[4].visible = false;
      scene.children[5].visible = true;
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
        if (scene.children[4].visible != false) {
          var intersects = raycaster.intersectObjects(
            scene.children[4].children,
            true
          );
        } else {
          intersects = raycaster.intersectObjects(
            scene.children[5].children,
            true
          );
        }
        //Получение объекта после реакции с рэйкастером
        if (intersects.length > 0) {
          if (INTERSECTED != intersects[0].object) {
            INTERSECTED = intersects[0].object;
            // Условие для некликабельных моделей
            if (
              INTERSECTED.name === "ff_g-39001" ||
              INTERSECTED.name === "ff_tr_e008" ||
              INTERSECTED.name === "ff_tr_e007" ||
              INTERSECTED.name === "ff_tr_e021" ||
              INTERSECTED.name === "ff_tr_e023" ||
              INTERSECTED.name === "ff_toilet_3001" ||
              INTERSECTED.name === "ff_tr_e020" ||
              INTERSECTED.name === "ff_tr_e009" ||
              INTERSECTED.name === "ff_tr_e010" ||
              INTERSECTED.name === "ff_toilet_3002" ||
              INTERSECTED.name === "ff_tr_e022" ||
              INTERSECTED.name === "ff_tr_e011" ||
              INTERSECTED.name === "ff_tr_e012" ||
              INTERSECTED.name === "ff_tr_e013" ||
              INTERSECTED.name === "ff_tr_e018" ||
              INTERSECTED.name === "ff_tr_e019" ||
              INTERSECTED.name === "ff_toilet_4001" ||
              INTERSECTED.name === "ff_tr_e025" ||
              INTERSECTED.name === "ff_tr_e017" ||
              INTERSECTED.name === "ff_tr_e015" ||
              INTERSECTED.name === "ff_tr_e016" ||
              INTERSECTED.name === "ff_tr_e014" ||
              INTERSECTED.name === "ff_tr_e024" ||
              INTERSECTED.name === "ff_tr_e026" ||
              INTERSECTED.name === "ff_tr_e004" ||
              INTERSECTED.name === "ff_tr_e003" ||
              INTERSECTED.name === "ff_tr_e006" ||
              INTERSECTED.name === "ff_tr_e005" ||
              INTERSECTED.name === "ff_tr_d028" ||
              INTERSECTED.name === "ff_tr_d030" ||
              INTERSECTED.name === "ff_tr_e" ||
              INTERSECTED.name === "ff_tr_e002" ||
              INTERSECTED.name === "ff_tr_d025" ||
              INTERSECTED.name === "ff_tr_d026" ||
              INTERSECTED.name === "ff_tr_d027" ||
              INTERSECTED.name === "ff_tr_d029" ||
              INTERSECTED.name === "ff_tr_d" ||
              INTERSECTED.name === "ff_tr_d019" ||
              INTERSECTED.name === "ff_tr_d031" ||
              INTERSECTED.name === "ff_tr_d024" ||
              INTERSECTED.name === "ff_tr_d020" ||
              INTERSECTED.name === "ff_tr_d023" ||
              INTERSECTED.name === "ff_tr_d002" ||
              INTERSECTED.name === "ff_tr_d003" ||
              INTERSECTED.name === "ff_tr_d021" ||
              INTERSECTED.name === "ff_tr_d005" ||
              INTERSECTED.name === "ff_tr_d004" ||
              INTERSECTED.name === "ff_tr_d022" ||
              INTERSECTED.name === "ff_tr_d014" ||
              INTERSECTED.name === "ff_tr_d017" ||
              INTERSECTED.name === "ff_tr_d018" ||
              INTERSECTED.name === "ff_tr_d006" ||
              INTERSECTED.name === "ff_tr_d015" ||
              INTERSECTED.name === "ff_tr_d012" ||
              INTERSECTED.name === "ff_tr_d013" ||
              INTERSECTED.name === "ff_tr_d016" ||
              INTERSECTED.name === "ff_tr_d011" ||
              INTERSECTED.name === "ff_tr_d032" ||
              INTERSECTED.name === "ff_tr_d008" ||
              INTERSECTED.name === "ff_tr_d007" ||
              INTERSECTED.name === "ff_toilet_7002" ||
              INTERSECTED.name === "ff_toilet_7001" ||
              INTERSECTED.name === "ff_tr_d009" ||
              INTERSECTED.name === "ff_tr_d010" ||
              INTERSECTED.name === "ff_tr_f002" ||
              INTERSECTED.name === "ff_tr_f" ||
              INTERSECTED.name === "ff_toilet_7004" ||
              INTERSECTED.name === "ff_toilet_7003" ||
              INTERSECTED.name === "ff_tr_f006" ||
              INTERSECTED.name === "ff_tr_f005" ||
              INTERSECTED.name === "ff_tr_f004" ||
              INTERSECTED.name === "ff_tr_f003" ||
              INTERSECTED.name === "ff_toilet_6004" ||
              INTERSECTED.name === "ff_toilet_6001" ||
              INTERSECTED.name === "ff_toilet_6002" ||
              INTERSECTED.name === "ff_tr_f007" ||
              INTERSECTED.name === "ff_toilet_6003" ||
              INTERSECTED.name === "ff_tr_f018" ||
              INTERSECTED.name === "ff_tr_f008" ||
              INTERSECTED.name === "ff_toilet_6005" ||
              INTERSECTED.name === "ff_tr_f011" ||
              INTERSECTED.name === "ff_tr_f013" ||
              INTERSECTED.name === "ff_tr_f009" ||
              INTERSECTED.name === "ff_tr_f015" ||
              INTERSECTED.name === "ff_tr_f016" ||
              INTERSECTED.name === "ff_tr_f010" ||
              INTERSECTED.name === "ff_tr_f014" ||
              INTERSECTED.name === "ff_tr_f012" ||
              INTERSECTED.name === "ff_toilet_5003" ||
              INTERSECTED.name === "ff_toilet_5002" ||
              INTERSECTED.name === "ff_toilet_5001" ||
              INTERSECTED.name === "ff_tr_f017" ||
              INTERSECTED.name === "ff_tr_a029" ||
              INTERSECTED.name === "ff_tr_a037" ||
              INTERSECTED.name === "ff_toilet_5004" ||
              INTERSECTED.name === "ff_toilet_5005" ||
              INTERSECTED.name === "ff_tr_a033" ||
              INTERSECTED.name === "ff_tr_a034" ||
              INTERSECTED.name === "ff_tr_a035" ||
              INTERSECTED.name === "ff_tr_a036" ||
              INTERSECTED.name === "ff_tr_a038" ||
              INTERSECTED.name === "ff_tr_a026" ||
              INTERSECTED.name === "ff_tr_a032" ||
              INTERSECTED.name === "ff_tr_a040" ||
              INTERSECTED.name === "ff_tr_a027" ||
              INTERSECTED.name === "ff_tr_a030" ||
              INTERSECTED.name === "ff_tr_a025" ||
              INTERSECTED.name === "ff_tr_a024" ||
              INTERSECTED.name === "ff_tr_a006" ||
              INTERSECTED.name === "ff_tr_a" ||
              INTERSECTED.name === "ff_tr_a031" ||
              INTERSECTED.name === "ff_tr_a028" ||
              INTERSECTED.name === "ff_tr_a014" ||
              INTERSECTED.name === "ff_tr_a003" ||
              INTERSECTED.name === "ff_tr_a004" ||
              INTERSECTED.name === "ff_tr_a005" ||
              INTERSECTED.name === "ff_tr_a007" ||
              INTERSECTED.name === "ff_tr_a008" ||
              INTERSECTED.name === "ff_tr_a013" ||
              INTERSECTED.name === "ff_tr_a002" ||
              INTERSECTED.name === "ff_toilet_2001" ||
              INTERSECTED.name === "ff_tr_a012" ||
              INTERSECTED.name === "ff_tr_a011" ||
              INTERSECTED.name === "ff_tr_a009" ||
              INTERSECTED.name === "ff_toilet_2002" ||
              INTERSECTED.name === "ff_toilet_2003" ||
              INTERSECTED.name === "ff_tr_a010" ||
              INTERSECTED.name === "ff_tr_a015" ||
              INTERSECTED.name === "ff_tr_c013" ||
              INTERSECTED.name === "ff_tr_c023" ||
              INTERSECTED.name === "ff_tr_c014" ||
              INTERSECTED.name === "ff_tr_a042" ||
              INTERSECTED.name === "ff_tr_c022" ||
              INTERSECTED.name === "ff_tr_c021" ||
              INTERSECTED.name === "ff_tr_c033" ||
              INTERSECTED.name === "ff_tr_c034" ||
              INTERSECTED.name === "ff_tr_c028" ||
              INTERSECTED.name === "ff_tr_c031" ||
              INTERSECTED.name === "ff_tr_c029" ||
              INTERSECTED.name === "ff_tr_c030" ||
              INTERSECTED.name === "ff_tr_c018" ||
              INTERSECTED.name === "ff_tr_c020" ||
              INTERSECTED.name === "ff_tr_c017" ||
              INTERSECTED.name === "ff_tr_c032" ||
              INTERSECTED.name === "ff_tr_c015" ||
              INTERSECTED.name === "ff_tr_c016" ||
              INTERSECTED.name === "ff_tr_c012" ||
              INTERSECTED.name === "ff_tr_c019" ||
              INTERSECTED.name === "ff_tr_c026" ||
              INTERSECTED.name === "ff_tr_c024" ||
              INTERSECTED.name === "ff_tr_c025" ||
              INTERSECTED.name === "ff_tr_c011" ||
              INTERSECTED.name === "ff_tr_c004" ||
              INTERSECTED.name === "ff_tr_c002" ||
              INTERSECTED.name === "ff_tr_c" ||
              INTERSECTED.name === "ff_tr_c027" ||
              INTERSECTED.name === "ff_tr_c008" ||
              INTERSECTED.name === "ff_tr_c009" ||
              INTERSECTED.name === "ff_tr_c007" ||
              INTERSECTED.name === "ff_tr_c005" ||
              INTERSECTED.name === "ff_tr_b037" ||
              INTERSECTED.name === "ff_tr_c003" ||
              INTERSECTED.name === "ff_tr_c006" ||
              INTERSECTED.name === "ff_tr_c010" ||
              INTERSECTED.name === "ff_tr_b043" ||
              INTERSECTED.name === "ff_tr_b038" ||
              INTERSECTED.name === "ff_tr_b025" ||
              INTERSECTED.name === "ff_tr_b035" ||
              INTERSECTED.name === "ff_tr_b052" ||
              INTERSECTED.name === "ff_tr_b017" ||
              INTERSECTED.name === "ff_tr_b018" ||
              INTERSECTED.name === "ff_tr_b044" ||
              INTERSECTED.name === "ff_toilet_1003" ||
              INTERSECTED.name === "ff_toilet_1002" ||
              INTERSECTED.name === "ff_toilet_1001" ||
              INTERSECTED.name === "ff_tr_b016" ||
              INTERSECTED.name === "ff_tr_b048" ||
              INTERSECTED.name === "ff_tr_b027" ||
              INTERSECTED.name === "ff_tr_b047" ||
              INTERSECTED.name === "ff_toilet_1004" ||
              INTERSECTED.name === "ff_tr_b023" ||
              INTERSECTED.name === "ff_tr_b022" ||
              INTERSECTED.name === "ff_tr_b026" ||
              INTERSECTED.name === "ff_tr_b046" ||
              INTERSECTED.name === "ff_tr_b021" ||
              INTERSECTED.name === "ff_tr_b020" ||
              INTERSECTED.name === "ff_tr_b019" ||
              INTERSECTED.name === "ff_tr_b024" ||
              INTERSECTED.name === "ff_tr_b050" ||
              INTERSECTED.name === "ff_tr_b051" ||
              INTERSECTED.name === "ff_tr_b049" ||
              INTERSECTED.name === "ff_tr_b057" ||
              INTERSECTED.name === "ff_tr_b036" ||
              INTERSECTED.name === "ff_tr_b054" ||
              INTERSECTED.name === "ff_tr_b056" ||
              INTERSECTED.name === "ff_tr_b053" ||
              INTERSECTED.name === "ff_tr_b014" ||
              INTERSECTED.name === "ff_tr_b012" ||
              INTERSECTED.name === "ff_tr_b041" ||
              INTERSECTED.name === "ff_tr_b045" ||
              INTERSECTED.name === "ff_tr_b040" ||
              INTERSECTED.name === "ff_tr_b042" ||
              INTERSECTED.name === "ff_tr_b055" ||
              INTERSECTED.name === "ff_tr_b" ||
              INTERSECTED.name === "ff_tr_b034" ||
              INTERSECTED.name === "ff_tr_b039" ||
              INTERSECTED.name === "ff_tr_b004" ||
              INTERSECTED.name === "ff_tr_b003" ||
              INTERSECTED.name === "ff_tr_b032" ||
              INTERSECTED.name === "ff_tr_b029" ||
              INTERSECTED.name === "ff_tr_b028" ||
              INTERSECTED.name === "ff_tr_b033" ||
              INTERSECTED.name === "ff_tr_b013" ||
              INTERSECTED.name === "ff_tr_b015" ||
              INTERSECTED.name === "ff_tr_b030" ||
              INTERSECTED.name === "ff_tr_b031" ||
              INTERSECTED.name === "ff_tr_b007" ||
              INTERSECTED.name === "ff_tr_b006" ||
              INTERSECTED.name === "ff_tr_g" ||
              INTERSECTED.name === "ff_tr_b005" ||
              INTERSECTED.name === "ff_tr_b011" ||
              INTERSECTED.name === "ff_tr_b010" ||
              INTERSECTED.name === "ff_tr_b009" ||
              INTERSECTED.name === "ff_tr_b008" ||
              INTERSECTED.name === "ff_tr_a017" ||
              INTERSECTED.name === "ff_tr_a018" ||
              INTERSECTED.name === "ff_tr_a016" ||
              INTERSECTED.name === "ff_tr_a041" ||
              INTERSECTED.name === "ff_tr_a022" ||
              INTERSECTED.name === "ff_tr_a021" ||
              INTERSECTED.name === "ff_tr_a020" ||
              INTERSECTED.name === "ff_tr_a019" ||
              INTERSECTED.name === "ff_tr_g003" ||
              INTERSECTED.name === "ff_tr_g004" ||
              INTERSECTED.name === "ff_tr_a023" ||
              INTERSECTED.name === "ff_tr_a039" ||
              INTERSECTED.name === "ff_tr_g001" ||
              INTERSECTED.name === "ff_tr_g002" ||
              INTERSECTED.name === "ff_ground" ||
              INTERSECTED.name === "sf_tr_a039" ||
              INTERSECTED.name === "sf_tr_c056" ||
              INTERSECTED.name === "sf_tr_c053" ||
              INTERSECTED.name === "sf_tr_c052" ||
              INTERSECTED.name === "sf_tr_c051" ||
              INTERSECTED.name === "sf_tr_c047" ||
              INTERSECTED.name === "sf_tr_c048" ||
              INTERSECTED.name === "sf_tr_c049" ||
              INTERSECTED.name === "sf_tr_c050" ||
              INTERSECTED.name === "sf_tr_c058" ||
              INTERSECTED.name === "sf_tr_c057" ||
              INTERSECTED.name === "sf_tr_c055" ||
              INTERSECTED.name === "sf_tr_c054" ||
              INTERSECTED.name === "sf_tr_c060" ||
              INTERSECTED.name === "sf_tr_c044" ||
              INTERSECTED.name === "sf_tr_c045" ||
              INTERSECTED.name === "sf_tr_c046" ||
              INTERSECTED.name === "sf_tr_a002" ||
              INTERSECTED.name === "sf_tr_a001" ||
              INTERSECTED.name === "sf_tr_a004" ||
              INTERSECTED.name === "sf_tr_a" ||
              INTERSECTED.name === "sf_tr_a047" ||
              INTERSECTED.name === "sf_tr_a048" ||
              INTERSECTED.name === "sf_tr_a006" ||
              INTERSECTED.name === "sf_tr_a005" ||
              INTERSECTED.name === "sf_tr_a013" ||
              INTERSECTED.name === "sf_tr_a012" ||
              INTERSECTED.name === "sf_toilet_05001" ||
              INTERSECTED.name === "sf_tr_a003" ||
              INTERSECTED.name === "sf_tr_a016" ||
              INTERSECTED.name === "sf_tr_a015" ||
              INTERSECTED.name === "sf_tr_a017" ||
              INTERSECTED.name === "sf_tr_a014" ||
              INTERSECTED.name === "sf_tr_a008" ||
              INTERSECTED.name === "sf_tr_a011" ||
              INTERSECTED.name === "sf_tr_a010" ||
              INTERSECTED.name === "sf_tr_a007" ||
              INTERSECTED.name === "sf_toilet_03001" ||
              INTERSECTED.name === "sf_tr_b031" ||
              INTERSECTED.name === "sf_toilet_04001" ||
              INTERSECTED.name === "sf_tr_a009" ||
              INTERSECTED.name === "sf_tr_b030" ||
              INTERSECTED.name === "sf_tr_b025" ||
              INTERSECTED.name === "sf_tr_b033" ||
              INTERSECTED.name === "sf_tr_b032" ||
              INTERSECTED.name === "sf_tr_b029" ||
              INTERSECTED.name === "sf_tr_b028" ||
              INTERSECTED.name === "sf_tr_b026" ||
              INTERSECTED.name === "sf_tr_b034" ||
              INTERSECTED.name === "sf_tr_b036" ||
              INTERSECTED.name === "sf_tr_b035" ||
              INTERSECTED.name === "sf_tr_b042" ||
              INTERSECTED.name === "sf_tr_b027" ||
              INTERSECTED.name === "sf_tr_b040" ||
              INTERSECTED.name === "sf_tr_b038" ||
              INTERSECTED.name === "sf_tr_b039" ||
              INTERSECTED.name === "sf_tr_b037" ||
              INTERSECTED.name === "sf_tr_a052" ||
              INTERSECTED.name === "sf_tr_a050" ||
              INTERSECTED.name === "sf_tr_a051" ||
              INTERSECTED.name === "sf_tr_b041" ||
              INTERSECTED.name === "sf_tr_c040" ||
              INTERSECTED.name === "sf_tr_c039" ||
              INTERSECTED.name === "sf_tr_c038" ||
              INTERSECTED.name === "sf_tr_a053" ||
              INTERSECTED.name === "sf_tr_c037" ||
              INTERSECTED.name === "sf_tr_c043" ||
              INTERSECTED.name === "sf_tr_c042" ||
              INTERSECTED.name === "sf_tr_c041" ||
              INTERSECTED.name === "sf_tr_c032" ||
              INTERSECTED.name === "sf_tr_c030" ||
              INTERSECTED.name === "sf_tr_c031" ||
              INTERSECTED.name === "sf_toilet_06001" ||
              INTERSECTED.name === "sf_tr_c036" ||
              INTERSECTED.name === "sf_tr_c034" ||
              INTERSECTED.name === "sf_tr_c033" ||
              INTERSECTED.name === "sf_tr_c026" ||
              INTERSECTED.name === "sf_tr_c029" ||
              INTERSECTED.name === "sf_tr_c022" ||
              INTERSECTED.name === "sf_tr_c021" ||
              INTERSECTED.name === "sf_tr_c035" ||
              INTERSECTED.name === "sf_tr_c024" ||
              INTERSECTED.name === "sf_tr_c019" ||
              INTERSECTED.name === "sf_tr_c027" ||
              INTERSECTED.name === "sf_tr_c025" ||
              INTERSECTED.name === "sf_tr_c018" ||
              INTERSECTED.name === "sf_tr_c020" ||
              INTERSECTED.name === "sf_tr_c023" ||
              INTERSECTED.name === "sf_tr_c028" ||
              INTERSECTED.name === "sf_tr_c012" ||
              INTERSECTED.name === "sf_tr_c011" ||
              INTERSECTED.name === "sf_tr_c010" ||
              INTERSECTED.name === "sf_tr_c003" ||
              INTERSECTED.name === "sf_tr_c002" ||
              INTERSECTED.name === "sf_tr_c017" ||
              INTERSECTED.name === "sf_tr_c" ||
              INTERSECTED.name === "sf_tr_c001" ||
              INTERSECTED.name === "sf_tr_c005" ||
              INTERSECTED.name === "sf_tr_c008" ||
              INTERSECTED.name === "sf_tr_c007" ||
              INTERSECTED.name === "sf_tr_c006" ||
              INTERSECTED.name === "sf_tr_c016" ||
              INTERSECTED.name === "sf_tr_c014" ||
              INTERSECTED.name === "sf_tr_c009" ||
              INTERSECTED.name === "sf_tr_c004" ||
              INTERSECTED.name === "sf_tr_b013" ||
              INTERSECTED.name === "sf_tr_b012" ||
              INTERSECTED.name === "sf_tr_c013" ||
              INTERSECTED.name === "sf_tr_c015" ||
              INTERSECTED.name === "sf_tr_b010" ||
              INTERSECTED.name === "sf_tr_b011" ||
              INTERSECTED.name === "sf_tr_b023" ||
              INTERSECTED.name === "sf_tr_b024" ||
              INTERSECTED.name === "sf_tr_b008" ||
              INTERSECTED.name === "sf_tr_b006" ||
              INTERSECTED.name === "sf_tr_b007" ||
              INTERSECTED.name === "sf_tr_b009" ||
              INTERSECTED.name === "sf_tr_b005" ||
              INTERSECTED.name === "sf_tr_b004" ||
              INTERSECTED.name === "sf_tr_b002" ||
              INTERSECTED.name === "sf_tr_b003" ||
              INTERSECTED.name === "sf_tr_b018" ||
              INTERSECTED.name === "sf_tr_b017" ||
              INTERSECTED.name === "sf_tr_b" ||
              INTERSECTED.name === "sf_tr_b001" ||
              INTERSECTED.name === "sf_tr_b019" ||
              INTERSECTED.name === "sf_tr_b015" ||
              INTERSECTED.name === "sf_tr_b014" ||
              INTERSECTED.name === "sf_tr_b016" ||
              INTERSECTED.name === "sf_tr_a045" ||
              INTERSECTED.name === "sf_tr_b021" ||
              INTERSECTED.name === "sf_tr_b022" ||
              INTERSECTED.name === "sf_tr_b020" ||
              INTERSECTED.name === "sf_toilet_02001" ||
              INTERSECTED.name === "sf_tr_a026" ||
              INTERSECTED.name === "sf_tr_a027" ||
              INTERSECTED.name === "sf_tr_a046" ||
              INTERSECTED.name === "sf_tr_a020" ||
              INTERSECTED.name === "sf_tr_a021" ||
              INTERSECTED.name === "sf_tr_a022" ||
              INTERSECTED.name === "sf_tr_a025" ||
              INTERSECTED.name === "sf_tr_a024" ||
              INTERSECTED.name === "sf_tr_a023" ||
              INTERSECTED.name === "sf_tr_a018" ||
              INTERSECTED.name === "sf_tr_a019" ||
              INTERSECTED.name === "sf_tr_a033" ||
              INTERSECTED.name === "sf_tr_a037" ||
              INTERSECTED.name === "sf_tr_a038" ||
              INTERSECTED.name === "sf_tr_a028" ||
              INTERSECTED.name === "sf_tr_a030" ||
              INTERSECTED.name === "sf_tr_a036" ||
              INTERSECTED.name === "sf_tr_a034" ||
              INTERSECTED.name === "sf_tr_a035" ||
              INTERSECTED.name === "sf_tr_a049" ||
              INTERSECTED.name === "sf_tr_a029" ||
              INTERSECTED.name === "sf_tr_a032" ||
              INTERSECTED.name === "sf_tr_a031" ||
              INTERSECTED.name === "sf_tr_a041" ||
              INTERSECTED.name === "sf_tr_a042" ||
              INTERSECTED.name === "sf_tr_a043" ||
              INTERSECTED.name === "sf_tr_a044" ||
              INTERSECTED.name === "sf_tr_a040" ||
              INTERSECTED.name === "sf_ground"
            ) {
              console.log(INTERSECTED.name, "- Nonclickable");
            } else {
              INTERSECTED.material = new THREE.MeshPhongMaterial();
              INTERSECTED.material.color.set("#009de0");
              console.log(INTERSECTED.name);
              return INTERSECTED;
            }
          }
          // Условие для совместного выделения
          else if (
            INTERSECTED.name == "ff_g-23001" ||
            INTERSECTED.name == "ff_g-22001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_g-23001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-22001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-17001" ||
            INTERSECTED.name == "ff_g-16_1001" ||
            INTERSECTED.name == "ff_g-16_2001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_g-17001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-16_1001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-16_2001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-11001" ||
            INTERSECTED.name == "ff_g-12001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_g-11001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-12001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-01001" ||
            INTERSECTED.name == "ff_g-02_1001" ||
            INTERSECTED.name == "ff_g-02_2001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_g-01001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-02_1001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-02_2001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-49001" ||
            INTERSECTED.name == "ff_g-48001" ||
            INTERSECTED.name == "ff_g-47001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_g-49001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-48001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-47001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-60001" ||
            INTERSECTED.name == "ff_g-61001" ||
            INTERSECTED.name == "ff_g-62001" ||
            INTERSECTED.name == "ff_g-63001" ||
            INTERSECTED.name == "ff_g-64001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_g-60001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-61001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-62001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-63001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-64001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-55001" ||
            INTERSECTED.name == "ff_g-54001" ||
            INTERSECTED.name == "ff_g-53001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_g-55001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-54001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-53001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-51001" ||
            INTERSECTED.name == "ff_g-52001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_g-51001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_g-52001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-62001" ||
            INTERSECTED.name == "ff_f-61001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-62001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-61001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-01001" ||
            INTERSECTED.name == "ff_f-02001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-01001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-02001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-04001" ||
            INTERSECTED.name == "ff_f-05001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-04001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-05001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-31001" ||
            INTERSECTED.name == "ff_f-32001" ||
            INTERSECTED.name == "ff_f-33001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-31001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-32001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-33001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-37001" ||
            INTERSECTED.name == "ff_f-36001" ||
            INTERSECTED.name == "ff_f-35001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-37001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-36001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-35001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-74001" ||
            INTERSECTED.name == "ff_f-75001" ||
            INTERSECTED.name == "ff_f-76001" ||
            INTERSECTED.name == "ff_f-77001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-74001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-75001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-76001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-77001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-68001" ||
            INTERSECTED.name == "ff_f-69001" ||
            INTERSECTED.name == "ff_f-70001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-68001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-69001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-70001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-82001" ||
            INTERSECTED.name == "ff_f-83001" ||
            INTERSECTED.name == "ff_f-84001" ||
            INTERSECTED.name == "ff_f-85001" ||
            INTERSECTED.name == "ff_f-86001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-82001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-83001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-84001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-85001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-86001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-53001" ||
            INTERSECTED.name == "ff_f-54001"
          ) {
            for (let i in scene.children[5].children) {
              if (scene.children[5].children[i].name === "ff_f-53001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
              if (scene.children[5].children[i].name === "ff_f-54001") {
                scene.children[5].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[5].children[i].material.color.set("#009de0");
              }
            }
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