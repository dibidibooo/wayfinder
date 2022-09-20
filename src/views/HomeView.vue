<template>
  <div id="container">
    
    <!-- <autocomplete
    url="http://Localhost:8081/api/stores"
    anchor="title"
    label="writer"
    :on-select="getData">
  </autocomplete> -->

    <!-- <div id="svgContainer">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="1024px"
        height="1024px"
        viewBox="0 0 1024 1024"
        enable-background="new 0 0 400 400"
        xml:space="preserve"
      >
        <path
          style="position: absolute; z-index: -1"
          class="path"
          fill="none"
          stroke="#000000"
          stroke-width="4"
          stroke-miterlimit="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="
           M512,512 q50,-100 0,-200 t0,-295
           M512,512 q100,-25 100,-100 t95,-95 q100,-25 100,-100 t95,-95 
           M512,512 q75,50 160,0 t150,0 s75,75 200,0  
           M512,512 q100,25 100,100 t95,95 q100,25 100,100 t95,95 
           M512,512 q-75,50 0,150 t0,175 s-75,75 0,180
           M512,512 q-25,50 -100,50 t-95,95 q-25,75 -100,75 t-125,125 
           M512,512 q-50,-50 -150,0 t-150,0 s-50,-50 -195,0
           M512,512 q-50,-100 -125,-75 t-100,-100 q-25,-100 -100,-75 t-100,-100         
           "
        />
      </svg>
    </div> -->

    <!-- <form class="search-bar">
      <input
        v-model="message"
        type="search"
        name="search"
        pattern=".*\S.*"
        required
      />
      <button
        @click="
          searchBox1();
          searchBox2();
        "
        class="search-btn"
      >
        <span>Поиск..</span>
      </button>
    </form> -->

    <button
      @click="buttonModel1()"
      class="bubbly-button"
      style="margin-top: 18em"
    >
      <a>1 Этаж</a>
    </button>
    <button
      @click="buttonModel2()"
      class="bubbly-button"
      style="margin-top: 25em"
    >
      <a>2 Этаж</a>
    </button>
    <!-- <ButtonSearch /> -->
    <ButtonMenu />
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import TextSprite from "@seregpie/three.text-sprite";
import ButtonMenu from "@/components/ButtonMenu.vue";
import axios from 'axios';

// import ButtonSearch from "@/components/ButtonSearch.vue";
// import Autocomplete from 'vue2-autocomplete-js'

import json_search from "/public/search.json";
// import { GUI } from 'dat.gui'
var container, controls;
var camera, scene, raycaster, renderer;
var INTERSECTED;
let title
const pointer = new THREE.Vector2();

export default {
  components: {
    ButtonMenu,
    // ButtonSearch,
    // Autocomplete,
  },
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    this.init();
    this.animate();
    this.getapi();
  },

  methods: {
    getapi() {
    axios.get("http://Localhost:8081/api/stores").then(function (response){
    let data = response.data
    title = response.data
    console.log("axios", data)
  })
  },
    searchBox1() {
      let temp_json = json_search;
      for (let i in temp_json) {
        if (this.message == temp_json[i]) {
          let butik_name = i;
          for (let k in scene.children[3].children) {
            if (butik_name == scene.children[3].children[k].name) {
              scene.children[3].children[k].material.color.set("#009de0");
              console.log("SEARCH-NAME");
            }
          }
        }
      }
    },

    searchBox2() {
      let temp_json = json_search;
      for (let i in temp_json) {
        if (this.message == temp_json[i]) {
          let butik_name = i;
          for (let k in scene.children[4].children) {
            if (butik_name == scene.children[4].children[k].name) {
              scene.children[4].children[k].material.color.set("#009de0");
              console.log("SEARCH-NAME-model2");
            }
          }
        }
      }
    },

    async init() {
      //Camera create and settings
      camera = new THREE.PerspectiveCamera(
        11,
        window.innerWidth / window.innerHeight,
        1,
        100
      );
      camera.position.set(0, 50, 30);

      //Create Scene and settings
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x222222);

      // di Добавить задний фон на сцену
      // this.loader = new THREE.TextureLoader();
      // this.bgTexture = this.loader.load("images/background.jpg");
      // scene.background = this.bgTexture;

      //Create Light for scene
      const dirLight = new THREE.DirectionalLight(0xffffff);
      const dirLight_1 = new THREE.AmbientLight(0xffffff);
      scene.add(dirLight_1);

      const dirLight_2 = new THREE.DirectionalLight(0xffffff);
      dirLight_2.castShadow = true;
      dirLight_2.position.set(300, 2000, 2000);
      scene.add(dirLight_2);

      const dirLight_3 = new THREE.DirectionalLight(0xffffff);
      dirLight_3.castShadow = true;
      dirLight_3.position.set(300, 2000, 2000);
      scene.add(dirLight_3);

      dirLight.shadow.camera.top = 180;
      dirLight.shadow.camera.bottom = -100;
      dirLight.shadow.camera.left = -120;
      dirLight.shadow.camera.right = 120;

      // Ground
      // const gt = new THREE.TextureLoader().load("images/asphalt.jpg");
      // const gg = new THREE.PlaneGeometry(16000, 16000);
      // const gm = new THREE.MeshPhongMaterial({ color: 0xffffff, map: gt });
      // const ground = new THREE.Mesh(gg, gm);
      // ground.rotation.x = -Math.PI / 2;
      // ground.material.map.repeat.set(256 * 8, 256 * 8);
      // ground.material.map.wrapS = THREE.RepeatWrapping;
      // ground.material.map.wrapT = THREE.RepeatWrapping;
      // ground.material.map.encoding = THREE.sRGBEncoding;
      // ground.receiveShadow = true;
      // scene.add(ground);

      //Сетка
      // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );
      // let gridHelper = new THREE.GridHelper(
      //   60,
      //   150,
      //   new THREE.Color(0x555555),
      //   new THREE.Color(0x333333)
      // );
      // scene.add(gridHelper);

      const loader = new GLTFLoader();
      loader.load(
        "models/InUse/first_floor_version2.glb",
        function (gltf_model1) {
          scene.add(gltf_model1.scene);
          gltf_model1.scene.scale.set(3.0, 3.0, 3.0);
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
          gltf_model2.scene.scale.set(3.0, 3.0, 3.0);
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
      controls.enableRotate = true;
      // controls.autoRotate = true;
      // controls.autoRotateSpeed = 0.4;
      // di Максимальное и минимальное приближение камеры
      controls.minDistance = 15;
      controls.maxDistance = 50;
      // di Touch fingers
      controls.touches = {
        ONE: THREE.TOUCH.DOLLY_PAN,
      };
      // di Ограничение по Rotate
      // controls.minPolarAngle = 0.7;
      // controls.maxPolarAngle = 1.5;
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
        scene.children[3].visible = true;
        scene.children[4].visible = false;


      let instance0 = new TextSprite({
      // alignment: "center",
      color: "#24ff00",
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: 0.02,
      text: title[0].title
    });
      instance0.scale.set(0.5,0.5,0.5);
      scene.children[3].children[74].add(instance0);
      instance0.position.set(-0.61,0.05,-0.6)
      instance0.rotation.set(0,0,150)


      let instance1 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[1].title
      });
        instance1.scale.set(0.5,0.5,0.5);
        scene.children[3].children[73].add(instance1);
        instance1.position.set(-0.61,0.05,-0.5)
        instance1.rotation.set(0,0,150)


        let instance2 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[2].title
      });
        instance2.scale.set(0.5,0.5,0.5);
        scene.children[3].children[72].add(instance2);
        instance2.position.set(-0.61,0.05,-0.41)
        instance2.rotation.set(0,0,150)


        let instance3 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[3].title
      });
        instance3.scale.set(0.5,0.5,0.5);
        scene.children[3].children[71].add(instance3);
        instance3.position.set(-0.61,0.05,-0.22)
        instance3.rotation.set(0,0,150)

        let instance4 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[4].title
      });
        instance4.scale.set(0.5,0.5,0.5);
        scene.children[3].children[85].add(instance4);
        instance4.position.set( -0.06,0.05,0.97)
        instance4.rotation.set(0,0,150)

        let instance5 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[5].title
      });
       instance5.scale.set(0.5,0.5,0.5);
        scene.children[3].children[84].add(instance5);
        instance5.position.set(0.31,0.05,0.775)
        instance5.rotation.set(0,0,150)

        let instance6 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[6].title
      });
       instance6.scale.set(0.5,0.5,0.5);
        scene.children[3].children[83].add(instance6);
        instance6.position.set(0.6,0.05,0.34)
        instance6.rotation.set(0,0,150)

        let instance7 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[7].title
      });
        instance7.scale.set(0.5,0.5,0.5);
        scene.children[3].children[82].add(instance7);
        instance7.position.set(0.6,0.05,0.01)
        instance7.rotation.set(0,0,150)

        let instance8 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[8].title
      });
        instance8.scale.set(0.5,0.5,0.5);
        scene.children[3].children[81].add(instance8);
        instance8.position.set(0.6,0.05,-0.42)
        instance8.rotation.set(0,0,150)

        let instance9 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[9].title
      });
        instance9.scale.set(0.5,0.5,0.5);
        scene.children[3].children[80].add(instance9);
        instance9.position.set(0.59,0.05,-0.52)
        instance9.rotation.set(0,0,150)

        let instance10 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[10].title
      });
       instance10.scale.set(0.5,0.5,0.5);
        scene.children[3].children[79].add(instance10);
        instance10.position.set(0.59,0.05,-0.67)
        instance10.rotation.set(0,0,150)

        let instance11 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[11].title
      });
        instance11.scale.set(0.5,0.5,0.5);
        scene.children[3].children[75].add(instance11);
        instance11.position.set(0.09,0.05,-0.81)
        instance11.rotation.set(0,0,150)

        let instance12 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[12].title
      });
        instance12.scale.set(0.5,0.5,0.5);
        scene.children[3].children[76].add(instance12);
        instance12.position.set(0.44,0.05,-0.815)
        instance12.rotation.set(0,0,150)

        let instance13 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[13].title
      });
        instance13.scale.set(0.5,0.5,0.5);
        scene.children[3].children[77].add(instance13);
        instance13.position.set(0.6,0.05,-0.98)
        instance13.rotation.set(0,0,150)

        let instance14 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[14].title
      });
        instance14.scale.set(0.5,0.5,0.5);
        scene.children[3].children[78].add(instance14);
        instance14.position.set(0.6,0.05,-1.085)
        instance14.rotation.set(0,0,150)

        let instance15 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[15].title
      });
        instance15.scale.set(0.5,0.5,0.5);
        scene.children[3].children[63].add(instance15);
        instance15.position.set(0.36,0.05,-0.63)
        instance15.rotation.set(0,0,150)

        let instance16 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[16].title
      });
        instance16.scale.set(0.5,0.5,0.5);
        scene.children[3].children[64].add(instance16);
        instance16.position.set(0.36,0.05,-0.49)
        instance16.rotation.set(0,0,150)

        let instance17 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[17].title
      });
        instance17.scale.set(0.5,0.5,0.5);
        scene.children[3].children[65].add(instance17);
        instance17.position.set(0.36,0.05,-0.375)
        instance17.rotation.set(0,0,150)

        let instance18 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.06,
        text: title[18].title
      });
        instance18.scale.set(0.5,0.5,0.5);
        scene.children[3].children[61].add(instance18);
        instance18.position.set(-0.13,0.06,-0.55)
        instance18.rotation.set(0,0,150)

        let instance19 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[19].title
      });
       instance19.scale.set(0.5,0.5,0.5);
        scene.children[3].children[57].add(instance19);
        instance19.position.set(-0.45,0.05,-0.55)
        instance19.rotation.set(0,0,150)

        let instance20 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[20].title
      });
        instance20.scale.set(0.5,0.5,0.5);
        scene.children[3].children[56].add(instance20);
        instance20.position.set(-0.45,0.05,-0.38)
        instance20.rotation.set(0,0,150)

        let instance21 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.06,
        text: title[21].title
      });
        instance21.scale.set(0.5,0.5,0.5);
        scene.children[3].children[54].add(instance21);
        instance21.position.set(-0.29,0.06,-0.1)
        instance21.rotation.set(0,0,150)

        let instance22 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[22].title
      });
        instance22.scale.set(0.5,0.5,0.5);
        scene.children[3].children[68].add(instance22);
        instance22.position.set(0.3,0.05,0)
        instance22.rotation.set(0,0,150)

        let instance23 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[23].title
      });
        instance23.scale.set(0.5,0.5,0.5);
        scene.children[3].children[52].add(instance23);
        instance23.position.set(-0.45,0.05,0.3)
        instance23.rotation.set(0,0,150)

        let instance24 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[24].title
      });
        instance24.scale.set(0.5,0.5,0.5);
        scene.children[3].children[15].add(instance24);
        instance24.position.set(-0.8,0.05,0.3)
        instance24.rotation.set(0,0,150)

        let instance25 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[25].title
      });
        instance25.scale.set(0.5,0.5,0.5);
        scene.children[3].children[14].add(instance25);
        instance25.position.set(-1,0.05,0.33)
        instance25.rotation.set(0,0,150)

        let instance26 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[26].title
      });
        instance26.scale.set(0.5,0.5,0.5);
        scene.children[3].children[12].add(instance26);
        instance26.position.set(-1.05,0.05,0.58)
        instance26.rotation.set(0,0,150)

        let instance27 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[27].title
      });
        instance27.scale.set(0.5,0.5,0.5);
        scene.children[3].children[9].add(instance27);
        instance27.position.set(-1.55,0.05,0.58)
        instance27.rotation.set(0,0,150)

        let instance28 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.02,
        text: title[28].title
      });
        instance28.scale.set(0.5,0.5,0.5);
        scene.children[3].children[8].add(instance28);
        instance28.position.set(-1.26,0.05,0.735)
        instance28.rotation.set(0,0,150)

        let instance29 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[29].title
      });
        instance29.scale.set(0.5,0.5,0.5);
        scene.children[3].children[7].add(instance29);
        instance29.position.set(-1.6,0.05,0.81)
        instance29.rotation.set(0,0,150)

        let instance30 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[30].title
      });
        instance30.scale.set(0.5,0.5,0.5);
        scene.children[3].children[5].add(instance30);
        instance30.position.set(-0.9,0.05,0.91)
        instance30.rotation.set(0,0,150)

        let instance31 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.06,
        text: title[31].title
      });
        instance31.scale.set(0.5,0.5,0.5);
        scene.children[3].children[43].add(instance31);
        instance31.position.set(1.1,0.06,0.31)
        instance31.rotation.set(0,0,150)

        let instance32 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[32].title
      });
        instance32.scale.set(0.5,0.5,0.5);
        scene.children[3].children[42].add(instance32);
        instance32.position.set(0.7,0.05,-0.34)
        instance32.rotation.set(0,0,150)

        let instance33 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[33].title
      });
        instance33.scale.set(0.5,0.5,0.5);
        scene.children[3].children[41].add(instance33);
        instance33.position.set(0.8,0.05,-0.5)
        instance33.rotation.set(0,0,150)

        let instance34 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[34].title
      });
        instance34.scale.set(0.5,0.5,0.5);
        scene.children[3].children[35].add(instance34);
        instance34.position.set(0.9,0.05,-1.5)
        instance34.rotation.set(0,0,150)

        let instance35 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[35].title
      });
        instance35.scale.set(0.5,0.5,0.5);
        scene.children[3].children[34].add(instance35);
        instance35.position.set(0.43,0.05,-1.53)
        instance35.rotation.set(0,0,150)

        let instance36 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[36].title
      });
        instance36.scale.set(0.5,0.5,0.5);
        scene.children[3].children[33].add(instance36);
        instance36.position.set(0.42,0.05,-1.38)
        instance36.rotation.set(0,0,150)

        let instance37 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.06,
        text: title[37].title
      });
        instance37.scale.set(0.5,0.5,0.5);
        scene.children[3].children[31].add(instance37);
        instance37.position.set(0.35,0.06,-1)
        instance37.rotation.set(0,0,150)

        let instance38 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[38].title
      });
        instance38.scale.set(0.5,0.5,0.5);
        scene.children[3].children[29].add(instance38);
        instance38.position.set(0.09,0.05,-0.96)
        instance38.rotation.set(0,0,150)

        let instance39 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[39].title
      });
        instance39.scale.set(0.5,0.5,0.5);
        scene.children[3].children[26].add(instance39);
        instance39.position.set(-0.45,0.05,-0.98)
        instance39.rotation.set(0,0,150)

        let instance40 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.07,
        text: title[40].title
      });
        instance40.scale.set(0.5,0.5,0.5);
        scene.children[3].children[23].add(instance40);
        instance40.position.set(-0.8,0.06,-0.9)
        instance40.rotation.set(0,0,150)

        let instance41 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[41].title
      });
        instance41.scale.set(0.5,0.5,0.5);
        scene.children[3].children[22].add(instance41);
        instance41.position.set(-0.85,0.05,-0.61)
        instance41.rotation.set(0,0,150)

        let instance42 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[42].title
      });
        instance42.scale.set(0.5,0.5,0.5);
        scene.children[3].children[87].add(instance42);
        instance42.position.set(-1.13,0.05,-0.51)
        instance42.rotation.set(0,0,150)

        let instance43 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[43].title
      });
        instance43.scale.set(0.5,0.5,0.5);
        scene.children[3].children[19].add(instance43);
        instance43.position.set(-0.89,0.05,-0.14)
        instance43.rotation.set(0,0,150)

        let instance44 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.06,
        text: title[44].title
      });
        instance44.scale.set(0.5,0.5,0.5);
        scene.children[3].children[44].add(instance44);
        instance44.position.set(-1.37,0.06,-0.05)
        instance44.rotation.set(0,0,150)


        //////////////////////////////////////////////


        let instance45 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.06,
        text: title[45].title
      });
        instance45.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance45);
        instance45.position.set(-1.37,0.06,-0.05)
        instance45.rotation.set(0,0,150)

        let instance46 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.06,
        text: title[46].title
      });
        instance46.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance46);
        instance46.position.set(0,0.06,0)
        instance46.rotation.set(0,0,150)

        let instance47 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[47].title
      });
        instance47.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance47);
        instance47.position.set(0,0.05,0)
        instance47.rotation.set(0,0,150)

        let instance48 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[48].title
      });
        instance48.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance48);
        instance48.position.set(0,0.05,0)
        instance48.rotation.set(0,0,150)

        let instance49 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[49].title
      });
        instance49.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance49);
        instance49.position.set(0,0.05,0)
        instance49.rotation.set(0,0,150)

        let instance50 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[50].title
      });
        instance50.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance50);
        instance50.position.set(0,0.05,0)
        instance50.rotation.set(0,0,150)

        let instance51 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[51].title
      });
        instance51.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance51);
        instance51.position.set(0,0.05,0)
        instance51.rotation.set(0,0,150)

        let instance52 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[52].title
      });
        instance52.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance52);
        instance52.position.set(0,0.05,0)
        instance52.rotation.set(0,0,150)

        let instance53 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[53].title
      });
        instance53.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance53);
        instance53.position.set(0,0.05,0)
        instance53.rotation.set(0,0,150)

        let instance54 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[54].title
      });
        instance54.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance54);
        instance54.position.set(0,0.05,0)
        instance54.rotation.set(0,0,150)

        let instance55 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[55].title
      });
        instance55.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance55);
        instance55.position.set(0,0.05,0)
        instance55.rotation.set(0,0,150)

        let instance56 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[56].title
      });
        instance56.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance56);
        instance56.position.set(0,0.05,0)
        instance56.rotation.set(0,0,150)

        let instance57 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[57].title
      });
        instance57.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance57);
        instance57.position.set(0,0.05,0)
        instance57.rotation.set(0,0,150)

        let instance58 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[58].title
      });
        instance58.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance58);
        instance58.position.set(0,0.05,0)
        instance58.rotation.set(0,0,150)

        let instance59 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[59].title
      });
        instance59.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance59);
        instance59.position.set(0,0.05,0)
        instance59.rotation.set(0,0,150)

        let instance60 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[60].title
      });
        instance60.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance60);
        instance60.position.set(0,0.05,0)
        instance60.rotation.set(0,0,150)

        let instance61 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[61].title
      });
        instance61.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance61);
        instance61.position.set(0,0.05,0)
        instance61.rotation.set(0,0,150)

        let instance62 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[62].title
      });
        instance62.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance62);
        instance62.position.set(0,0.05,0)
        instance62.rotation.set(0,0,150)

        let instance63 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[63].title
      });
        instance63.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance63);
        instance63.position.set(0,0.05,0)
        instance63.rotation.set(0,0,150)

        let instance64 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[64].title
      });
        instance64.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance64);
        instance64.position.set(0,0.05,0)
        instance64.rotation.set(0,0,150)

        let instance65 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[65].title
      });
        instance65.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance65);
        instance65.position.set(0,0.05,0)
        instance65.rotation.set(0,0,150)

        let instance66 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[66].title
      });
        instance66.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance66);
        instance66.position.set(0,0.05,0)
        instance66.rotation.set(0,0,150)

        let instance67 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[67].title
      });
        instance67.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance67);
        instance67.position.set(0,0.05,0)
        instance67.rotation.set(0,0,150)

        let instance68 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[68].title
      });
        instance68.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance68);
        instance68.position.set(0,0.05,0)
        instance68.rotation.set(0,0,150)

        let instance69 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[69].title
      });
        instance69.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance69);
        instance69.position.set(0,0.05,0)
        instance69.rotation.set(0,0,150)

        let instance70 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[70].title
      });
        instance70.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance70);
        instance70.position.set(0,0.05,0)
        instance70.rotation.set(0,0,150)

        let instance71 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[71].title
      });
        instance71.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance71);
        instance71.position.set(0,0.05,0)
        instance71.rotation.set(0,0,150)

        let instance72 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[72].title
      });
        instance72.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance72);
        instance72.position.set(0,0.05,0)
        instance72.rotation.set(0,0,150)

        let instance73 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[73].title
      });
        instance73.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance73);
        instance73.position.set(0,0.05,0)
        instance73.rotation.set(0,0,150)

        let instance74 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[74].title
      });
        instance74.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance74);
        instance74.position.set(0,0.05,0)
        instance74.rotation.set(0,0,150)

        let instance75 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[75].title
      });
        instance75.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance75);
        instance75.position.set(0,0.05,0)
        instance75.rotation.set(0,0,150)

        let instance76 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[76].title
      });
        instance76.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance76);
        instance76.position.set(0,0.05,0)
        instance76.rotation.set(0,0,150)

        let instance77 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[77].title
      });
        instance77.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance77);
        instance77.position.set(0,0.05,0)
        instance77.rotation.set(0,0,150)

        let instance78 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[78].title
      });
        instance78.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance78);
        instance78.position.set(0,0.05,0)
        instance78.rotation.set(0,0,150)

        let instance79 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[79].title
      });
        instance79.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance79);
        instance79.position.set(0,0.05,0)
        instance79.rotation.set(0,0,150)

        let instance80 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[80].title
      });
        instance80.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance80);
        instance80.position.set(0,0.05,0)
        instance80.rotation.set(0,0,150)

        let instance81 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[81].title
      });
        instance81.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance81);
        instance81.position.set(0,0.05,0)
        instance81.rotation.set(0,0,150)

        let instance82 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[82].title
      });
        instance82.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance82);
        instance82.position.set(0,0.05,0)
        instance82.rotation.set(0,0,150)

        let instance83 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[83].title
      });
        instance83.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance83);
        instance83.position.set(0,0.05,0)
        instance83.rotation.set(0,0,150)

        let instance84 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[84].title
      });
        instance84.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance84);
        instance84.position.set(0,0.05,0)
        instance84.rotation.set(0,0,150)

        let instance85 = new TextSprite({
        // alignment: "center",
        color: "#24ff00",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 0.03,
        text: title[85].title
      });
        instance85.scale.set(0.5,0.5,0.5);
        scene.children[4].children[44].add(instance85);
        instance85.position.set(0,0.05,0)
        instance85.rotation.set(0,0,150)
        
        
      }, 500);
      // console.log("SCENE", scene);
    },

    //Подгон размера окна к данным матрице
    async onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },

    //Выбрать модель через кнопку (1 этаж / 2этаж )
    async buttonModel1() {
      scene.children[3].visible = true;
      scene.children[4].visible = false;
    },

    async buttonModel2() {
      scene.children[3].visible = false;
      scene.children[4].visible = true;
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
        if (scene.children[3].visible != false) {
          var intersects = raycaster.intersectObjects(
            scene.children[3].children,
            true
          );
        } else {
          intersects = raycaster.intersectObjects(
            scene.children[4].children,
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
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-23001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-22001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-17001" ||
            INTERSECTED.name == "ff_g-16_1001" ||
            INTERSECTED.name == "ff_g-16_2001"
          ) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-17001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-16_1001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-16_2001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-11001" ||
            INTERSECTED.name == "ff_g-12001"
          ) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-11001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-12001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-01001" ||
            INTERSECTED.name == "ff_g-02_1001" ||
            INTERSECTED.name == "ff_g-02_2001"
          ) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-01001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-02_1001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-02_2001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-49001" ||
            INTERSECTED.name == "ff_g-48001" ||
            INTERSECTED.name == "ff_g-47001"
          ) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-49001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-48001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-47001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-60001" ||
            INTERSECTED.name == "ff_g-61001" ||
            INTERSECTED.name == "ff_g-62001" ||
            INTERSECTED.name == "ff_g-63001" ||
            INTERSECTED.name == "ff_g-64001"
          ) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-60001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-61001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-62001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-63001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-64001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-55001" ||
            INTERSECTED.name == "ff_g-54001" ||
            INTERSECTED.name == "ff_g-53001"
          ) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-55001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-54001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-53001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-51001" ||
            INTERSECTED.name == "ff_g-52001"
          ) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-51001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
              if (scene.children[3].children[i].name === "ff_g-52001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-62001" ||
            INTERSECTED.name == "ff_f-61001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-62001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-61001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-01001" ||
            INTERSECTED.name == "ff_f-02001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-01001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-02001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-04001" ||
            INTERSECTED.name == "ff_f-05001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-04001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-05001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-31001" ||
            INTERSECTED.name == "ff_f-32001" ||
            INTERSECTED.name == "ff_f-33001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-31001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-32001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-33001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-37001" ||
            INTERSECTED.name == "ff_f-36001" ||
            INTERSECTED.name == "ff_f-35001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-37001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-36001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-35001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-74001" ||
            INTERSECTED.name == "ff_f-75001" ||
            INTERSECTED.name == "ff_f-76001" ||
            INTERSECTED.name == "ff_f-77001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-74001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-75001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-76001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-77001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-68001" ||
            INTERSECTED.name == "ff_f-69001" ||
            INTERSECTED.name == "ff_f-70001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-68001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-69001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-70001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-82001" ||
            INTERSECTED.name == "ff_f-83001" ||
            INTERSECTED.name == "ff_f-84001" ||
            INTERSECTED.name == "ff_f-85001" ||
            INTERSECTED.name == "ff_f-86001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-82001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-83001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-84001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-85001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-86001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-53001" ||
            INTERSECTED.name == "ff_f-54001"
          ) {
            for (let i in scene.children[4].children) {
              if (scene.children[4].children[i].name === "ff_f-53001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
              if (scene.children[4].children[i].name === "ff_f-54001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#009de0");
              }
            }
          }
          INTERSECTED = null;
        }
      });

      this.intersects = null;
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

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}

svg {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50%;
  margin-top: -50vh;
  width: 100%;
  height: 100vh;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>