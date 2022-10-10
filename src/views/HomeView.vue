<template>
  <div id="container">
    <button
      @click="buttonModel1()"
      class="bubbly-button"
      style="margin-left:-5.5em"
    >
      <a>1 Этаж</a>
    </button>
    <button
      @click="buttonModel2()"
      class="bubbly-button"
    >
      <a>2 Этаж</a>
    </button>



    <button @click="add_row_by_name('0')">0</button>
    <button @click="add_row_by_name('1')">1</button>
    <!-- <button @click="add_row_by_name('2')">2</button>
    <button @click="add_row_by_name('3')">3</button>
    <button @click="add_row_by_name('4')">4</button>
    <button @click="add_row_by_name('5')">5</button>
    <button @click="add_row_by_name('6')">6</button>
    <button @click="add_row_by_name('7')">7</button>
    <button @click="add_row_by_name('8')">8</button>
    <button @click="add_row_by_name('9')">9</button>
    <button @click="add_row_by_name('10')">10</button>
    <button @click="add_row_by_name('11')">11</button>
    <button @click="add_row_by_name('12')">12</button>
    <button @click="add_row_by_name('13')">13</button>
    <button @click="add_row_by_name('14')">14</button>
    <button @click="add_row_by_name('15')">15</button>
    <button @click="add_row_by_name('16')">16</button>
    <button @click="add_row_by_name('17')">17</button>
    <button @click="add_row_by_name('18')">18</button>
    <button @click="add_row_by_name('19')">19</button>
    <button @click="add_row_by_name('20')">20</button>
    <button @click="add_row_by_name('21')">21</button>
    <button @click="add_row_by_name('22')">22</button>
    <button @click="add_row_by_name('23')">23</button>
    <button @click="add_row_by_name('24')">24</button>
    <button @click="add_row_by_name('25')">25</button>
    <button @click="add_row_by_name('26')">26</button>
    <button @click="add_row_by_name('27')">27</button>
    <button @click="add_row_by_name('28')">28</button>
    <button @click="add_row_by_name('29')">29</button>
    <button @click="add_row_by_name('30')">30</button>
    <button @click="add_row_by_name('31')">31</button>
    <button @click="add_row_by_name('32')">32</button>
    <button @click="add_row_by_name('33')">33</button>
    <button @click="add_row_by_name('34')">34</button>
    <button @click="add_row_by_name('35')">35</button>
    <button @click="add_row_by_name('36')">36</button>
    <button @click="add_row_by_name('37')">37</button>
    <button @click="add_row_by_name('38')">38</button>
    <button @click="add_row_by_name('39')">39</button>
    <button @click="add_row_by_name('40')">40</button>
    <button @click="add_row_by_name('41')">41</button>
    <button @click="add_row_by_name('42')">42</button>
    <button @click="add_row_by_name('43')">43</button>
    <button @click="add_row_by_name('44')">44</button>
    <button @click="add_row_by_name('45')">45</button>
    <button @click="add_row_by_name('46')">46</button>
    <button @click="add_row_by_name('47')">47</button>
    <button @click="add_row_by_name('48')">48</button> -->
    <button @click="add_row_by_name('Эскалатор 1')">Эскалатор 1</button>
    <button @click="add_row_by_name('Эскалатор 2')">Эскалатор 2</button>
    <button @click="add_row_by_name('Эскалатор 3')">Эскалатор 3</button>
    <button @click="remove_row">remove</button>
    <button @click="add_row_by_name('49')">49</button>
    <button @click="add_row_by_name('50')">50</button>
    <!-- <button @click="add_row_by_name('51')">51</button>
    <button @click="add_row_by_name('52')">52</button>
    <button @click="add_row_by_name('53')">53</button>
    <button @click="add_row_by_name('54')">54</button>
    <button @click="add_row_by_name('55')">55</button>
    <button @click="add_row_by_name('56')">56</button>
    <button @click="add_row_by_name('57')">57</button>
    <button @click="add_row_by_name('58')">58</button>
    <button @click="add_row_by_name('59')">59</button>
    <button @click="add_row_by_name('60')">60</button>
    <button @click="add_row_by_name('61')">61</button>
    <button @click="add_row_by_name('62')">62</button>
    <button @click="add_row_by_name('63')">63</button>
    <button @click="add_row_by_name('64')">64</button>
    <button @click="add_row_by_name('65')">65</button>
    <button @click="add_row_by_name('66')">66</button>
    <button @click="add_row_by_name('67')">67</button>
    <button @click="add_row_by_name('68')">68</button>
    <button @click="add_row_by_name('69')">69</button>
    <button @click="add_row_by_name('70')">70</button>
    <button @click="add_row_by_name('71')">71</button>
    <button @click="add_row_by_name('72')">72</button>
    <button @click="add_row_by_name('73')">73</button>
    <button @click="add_row_by_name('74')">74</button>
    <button @click="add_row_by_name('75')">75</button>
    <button @click="add_row_by_name('76')">76</button>
    <button @click="add_row_by_name('77')">77</button>
    <button @click="add_row_by_name('78')">78</button>
    <button @click="add_row_by_name('79')">79</button>
    <button @click="add_row_by_name('80')">80</button>
    <button @click="add_row_by_name('81')">81</button>
    <button @click="add_row_by_name('82')">82</button>
    <button @click="add_row_by_name('83')">83</button>
    <button @click="add_row_by_name('84')">84</button>
    <button @click="add_row_by_name('85')">85</button>
    <button @click="add_row_by_name('86')">86</button>
    <button @click="add_row_by_name('87')">87</button>
    <button @click="add_row_by_name('88')">88</button> -->


    <ButtonSearch />
    <ButtonMenu />
  </div>
</template>

<!-- <script src="./threejs/Path3D.js"></script> -->

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { TWEEN } from "three/examples/jsm/libs/tween.module.min";
import axios from "axios";


import TextSprite from "@seregpie/three.text-sprite";
import ButtonMenu from "@/components/ButtonMenu.vue";
import ButtonSearch from "@/components/ButtonSearch.vue";
// import Autocomplete from 'vue2-autocomplete-js'

import json_search from "/public/search.json";
import all_path from "/public/roads.json"
// import road_texture from "/public/images/threejs/images/path_007_21.png";

// import { GUI } from 'dat.gui'
var container, controls;
var camera, scene, raycaster, renderer;
var INTERSECTED;
let title;
var loaded_models = [];
// let titleCategory
const pointer = new THREE.Vector2();

export default {
  components: {
    ButtonMenu,
    ButtonSearch,
    // Autocomplete,
  },
  data() {
    return {
      message: "",
      row: null,
      t_line: {
        objects: [],
      },
      path_lsit: all_path,
      clock: null,
      t_row: null,
      material_mixers: [],
      selected_objects: [],
    };
  },
  mounted() {
    this.getapi();
    this.init();
    this.animate();
    this.add_events();
    // this.getapicategory();
  },

  methods: {
    getapi() {
      axios.get("http://Localhost:8081/api/stores").then(function (response) {
        title = response.data;
      });
    },

    add_row_by_name(name="0"){
      this.create_row(this.path_lsit[name].road);
      this.select_objects(this.path_lsit[name].objects);
    },

    create_row(path_list){
      this.remove_row();
      let path_points = []
      path_list.forEach(p => {
        path_points.push(new THREE.Vector3(
          p[0],
          p[1],
          p[2]
        ))
      });
      var curve = new THREE.CatmullRomCurve3(path_points, false/*is it closed*/);
      var tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.05, 20, false);
      var tubeMaterial = this.getAnimatedMaterial();
      var tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
      tube.name = "row_tube"
      scene.add(tube)
    },

    getAnimatedMaterial() {
      const animate_material_param = {
          "object_name": "row_tube",
          "texture": "full",
          "color": "#ffffff",
          "wrap": true,
          "repeat": {
              "x": 2,
              "y": 15
          },
          "offset": {
              "duration": 1,
              "time": [],
              "values": [
                  0,
                  0,
                  0, 
                  -1
              ]
          },
          "rotation": -90,
          "center": {
              "x": 0.5,
              "y": 0
          }
      }
      // create material
      var texture = new THREE.TextureLoader().load('images/threejs/images/a.png');

      // wrap
      if (animate_material_param.wrap) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }

      // repeat
      texture.repeat.set(
        animate_material_param.repeat.x,
        animate_material_param.repeat.y
      );
      texture.rotation = (animate_material_param.rotation * Math.PI) / 180.0;
      texture.center = animate_material_param.center;

      // animation
      let time = [...animate_material_param.offset.time];
      time.unshift(0);
      time.push(animate_material_param.offset.duration);
      let values = [...animate_material_param.offset.values];
      var offset = new THREE.VectorKeyframeTrack(
        `${texture.uuid}.offset`,
        time,
        values
      );
      var clip = new THREE.AnimationClip(
        "texture_animation",
        animate_material_param.offset.duration,
        [offset]
      );
      var mixer = new THREE.AnimationMixer(texture);
      var clipAction = mixer.clipAction(clip);
      clipAction.play();
      this.material_mixers.push(mixer);

      return new THREE.MeshBasicMaterial({
        color: animate_material_param.color,
        map: texture,
        // polygonOffset: true,
        transparent: true,
      });
    },

    remove_row(){
      var selectedObject = scene.getObjectByName("row_tube");
      scene.remove( selectedObject );
    },

    // select+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    select_objects(objects_list){
      objects_list.forEach(obj_name => {
        var selectedObject = scene.getObjectByName(obj_name);
        if(selectedObject) {
          // selectedObject.userData['old_color'] = 
          selectedObject.material.color = "#00ff00"
          console.log(">> selected objecdts", selectedObject);
          this.selected_objects.push(selectedObject);
        } else {
          console.error(">>> not found:", obj_name);
        }
      })
    },


    

    searchBox2() {
      let temp_json = json_search;
      for (let i in temp_json) {
        if (this.message == temp_json[i]) {
          let butik_name = i;
          for (let k in scene.children[4].children) {
            if (butik_name == scene.children[4].children[k].name) {
              scene.children[4].children[k].material.color.set("#1eb6ff");
              console.log("SEARCH-NAME-model2");
            }
          }
        }
      }
    },

    init() {
      //Camera create and settings
      camera = new THREE.PerspectiveCamera(
        11,
        window.innerWidth / window.innerHeight,
        1,
        100
      );
      camera.position.set(0, 30, 45);

      //Create Scene and settings
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0x222222);
      scene.background = new THREE.Color("#D7D7D7");
      
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

      
      const loader = new GLTFLoader();
      loader.load(
        "models/InUse/first_floor.gltf",
        (gltf_model1) => {
          scene.add(gltf_model1.scene);
          gltf_model1.scene.scale.set(4.5, 5.5, 4.5);
          console.log(
            "First floor Loaded",
            scene.add(gltf_model1.scene),
            loaded_models.push(gltf_model1.scene)
          );
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );

      loader.load(
        "models/InUse/second_floor1.gltf",
        function (gltf_model2) {
          scene.add(gltf_model2.scene);
          gltf_model2.scene.scale.set(5.0, 6.0, 4.7);
          console.log(
            "Second floor Loaded",
            scene.add(gltf_model2.scene),
            loaded_models.push(gltf_model2.scene)

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
      // di Максимальное и минимальное приближение камеры
      controls.minDistance = 40;
      controls.maxDistance = 55;
      // di Touch fingers
      controls.touches = {
        ONE: THREE.TOUCH.DOLLY_PAN,
      };
      // di Ограничение по Rotate
      // controls.minPolarAngle = 0.9;
      // controls.maxPolarAngle = 0.9;
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
        
        for (let i in title) {
          console.log("Text from DB loaded")
          switch (title[i].id) {
            case 45: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.61,0.05,-0.6)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 44: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.61,0.05,-0.5)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 43: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.61,0.05,-0.41)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 42: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.61,0.05,-0.22)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 41: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.06,0.05,0.97)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 40: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.31,0.05,0.775)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 39: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.6,0.05,0.34)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 38: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.6,0.05,0.01)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 37: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.6,0.05,-0.42)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 36: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.59,0.05,-0.52)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 35: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.59,0.05,-0.67)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 34: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.09,0.05,-0.81)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 33: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.44,0.05,-0.815)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 32: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.6,0.05,-0.98)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 31: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.6,0.05,-1.085)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 30: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.36,0.05,-0.63)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 29: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.36,0.05,-0.49)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 28: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.36,0.05,-0.375)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 27: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.13,0.06,-0.55)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 26: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,-0.55)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 25: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,-0.38)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 24: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.29,0.06,-0.1)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 23: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.3,0.05,0)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 22: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,0.3)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 21: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.8,0.05,0.3)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 20: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1,0.05,0.33)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 19: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.05,0.05,0.58)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 18: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.55,0.05,0.58)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 17: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.26,0.05,0.735)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 16: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.6,0.05,0.81)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 15: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.9,0.05,0.91)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 14: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(1.1,0.06,0.31)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 13: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.7,0.05,-0.34)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 12: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.8,0.05,-0.5)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 11: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.9,0.05,-1.5)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 10: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.43,0.05,-1.53)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 9: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.42,0.05,-1.38)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 8: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.35,0.06,-1)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 7: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.09,0.05,-0.96)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 6: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,-0.98)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 5: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.07,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.8,0.06,-0.9)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 4: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.85,0.05,-0.61)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 3: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.13,0.05,-0.51)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 2: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.89,0.05,-0.14)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 1: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,                
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.37,0.06,-0.05)
              instance.rotation.set(0, 0, 150)
              scene.children[3].add(instance)
              break;
            }
            case 46: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.06,0.06,-0.73)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 47: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(1.1,0.06,0.3)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 48: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.44,0.05,0.84)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 49: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.89,0.06,0.95)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 50: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.16,0.05,0.61)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 51: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.06,0.05,0.585)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 52: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1,0.05,0.47)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 53: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1,0.05,0.3)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 54: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.82,0.05,0.38)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 55: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.175,0.05,-0.34)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 56: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.1,0.05,-0.32)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 57: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1,0.06,-0.9)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 58: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-1.2,0.05,-1.23)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 59: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.9,0.06,-1.5)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 60: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.405,0.05,-1.2)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 61: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.22,0.05,-1.16)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 62: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.06,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.65,0.06,-1.47)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 63: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.94,0.05,-1.11)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 64: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.04,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.88,0.06,-0.66)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 65: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.71,0.05,-0.48)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 66: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,-0.8)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 67: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,-0.65)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 68: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,-0.54)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 69: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.04,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.32,0.06,-0.74)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 70: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.46,0.05,-0.8)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 71: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.38,0.05,-0.54)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 72: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.04,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.29,0.06,-0.2)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 73: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.04,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.28,0.06,-0.1)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 74: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,0.23)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 75: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.45,0.05,0.48)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 76: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.3,0.05,0.51)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 77: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.15,0.05,0.53)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 78: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.03,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.015,0.05,0.65)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 79: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.04,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.15,0.06,0.53)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 80: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.44,0.05,-1.01)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 81: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.16,0.05,-1.02)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 82: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.27,0.05,-1)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 83: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.63,0.05,-0.27)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 84: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.77,0.05,-0.27)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 85: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(0.66,0.05,0.33)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
            case 86: {
              let instance = new TextSprite({
                // alignment: "center",
                fontFamily: 'fantasy',
                color: "#ffffff",
                strokeColor: '#000000',
                strokeWidth: 0.03,
                fontSize: 0.02,
                text: title[i].title,
              });
              instance.scale.set(0.5, 0.5, 0.5)
              instance.position.set(-0.75,0.05,-0.03)
              instance.rotation.set(0, 0, 150)
              scene.children[4].add(instance)
              break;
            }
          }
        }
      }, 500);

      this.clock = new THREE.Clock();
    },


    //Подгон размера окна к данным матрице
    async onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },

    //Выбрать модель через кнопку (1 этаж / 2 этаж )
    buttonModel1() {
      scene.children[3].visible = true;
      scene.children[4].visible = false;
    },

    buttonModel2() {
      scene.children[3].visible = false;
      scene.children[4].visible = true;
    },

    //Отслеживание мыши
    onPointerMove(event) {
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
      // TWEEN.update();
      //Функция срабатывающаяя на двойное нажатие мыши
      this.intersects = null;
      const delta = this.clock.getDelta()

      if (this.material_mixers.length > 0) {
        this.material_mixers.forEach((material_mixer) => {
          console.log(">! ANIMATED MATERIAL");
          material_mixer.update(delta);
        });
      }

      this.render();
      // this.render_row();
    },

    add_events(){
      document.addEventListener("dblclick", async function () {
        //Рэйкастер для захвата модели на точке где расположена мышь
        raycaster.setFromCamera(pointer, camera);

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
            const names_1 = ["ff_g-39001", "ff_tr_e008", "ff_tr_e007", "ff_tr_e021", "ff_tr_e023", "ff_toilet_3001", "ff_tr_e020", "ff_tr_e009", "ff_tr_e010", "ff_toilet_3002", "ff_tr_e022", "ff_tr_e011", "ff_tr_e012", "ff_tr_e013", "ff_tr_e018", "ff_tr_e019", "ff_toilet_4001", "ff_tr_e025", "ff_tr_e017", "ff_tr_e015", "ff_tr_e016", "ff_tr_e014", "ff_tr_e024", "ff_tr_e026", "ff_tr_e004", "ff_tr_e003", "ff_tr_e006", "ff_tr_e005", "ff_tr_d028", "ff_tr_d030", "ff_tr_e", "ff_tr_e002", "ff_tr_d025", "ff_tr_d026", "ff_tr_d027", "ff_tr_d029", "ff_tr_d", "ff_tr_d019", "ff_tr_d031", "ff_tr_d024", "ff_tr_d020", "ff_tr_d023", "ff_tr_d002", "ff_tr_d003", "ff_tr_d021", "ff_tr_d005", "ff_tr_d004", "ff_tr_d022", "ff_tr_d014", "ff_tr_d017", "ff_tr_d018", "ff_tr_d006", "ff_tr_d015", "ff_tr_d012", "ff_tr_d013", "ff_tr_d016", "ff_tr_d011", "ff_tr_d032", "ff_tr_d008", "ff_tr_d007", "ff_toilet_7002", "ff_toilet_7001", "ff_tr_d009", "ff_tr_d010", "ff_tr_f002", "ff_tr_f", "ff_toilet_7004", "ff_toilet_7003", "ff_tr_f006", "ff_tr_f005", "ff_tr_f004", "ff_tr_f003", "ff_toilet_6004", "ff_toilet_6001", "ff_toilet_6002", "ff_tr_f007", "ff_toilet_6003", "ff_tr_f018", "ff_tr_f008", "ff_toilet_6005", "ff_tr_f011", "ff_tr_f013", "ff_tr_f009", "ff_tr_f015", "ff_tr_f016", "ff_tr_f010", "ff_tr_f014", "ff_tr_f012", "ff_toilet_5003", "ff_toilet_5002", "ff_toilet_5001", "ff_tr_f017", "ff_tr_a029", "ff_tr_a037", "ff_toilet_5004", "ff_toilet_5005", "ff_tr_a033", "ff_tr_a034", "ff_tr_a035", "ff_tr_a036", "ff_tr_a038", "ff_tr_a026", "ff_tr_a032", "ff_tr_a040", "ff_tr_a027", "ff_tr_a030", "ff_tr_a025", "ff_tr_a024", "ff_tr_a006", "ff_tr_a", "ff_tr_a031", "ff_tr_a028", "ff_tr_a014", "ff_tr_a003", "ff_tr_a004", "ff_tr_a005", "ff_tr_a007", "ff_tr_a008", "ff_tr_a013", "ff_tr_a002", "ff_toilet_2001", "ff_tr_a012", "ff_tr_a011", "ff_tr_a009", "ff_toilet_2002", "ff_toilet_2003", "ff_tr_a010", "ff_tr_a015", "ff_tr_c013", "ff_tr_c023", "ff_tr_c014", "ff_tr_a042", "ff_tr_c022", "ff_tr_c021", "ff_tr_c033", "ff_tr_c034", "ff_tr_c028", "ff_tr_c031", "ff_tr_c029", "ff_tr_c030", "ff_tr_c018", "ff_tr_c020", "ff_tr_c017", "ff_tr_c032", "ff_tr_c015", "ff_tr_c016", "ff_tr_c012", "ff_tr_c019", "ff_tr_c026", "ff_tr_c024", "ff_tr_c025", "ff_tr_c011", "ff_tr_c004", "ff_tr_c002", "ff_tr_c", "ff_tr_c027", "ff_tr_c008", "ff_tr_c009", "ff_tr_c007", "ff_tr_c005", "ff_tr_b037", "ff_tr_c003", "ff_tr_c006", "ff_tr_c010", "ff_tr_b043", "ff_tr_b038", "ff_tr_b025", "ff_tr_b035", "ff_tr_b052", "ff_tr_b017", "ff_tr_b018", "ff_tr_b044", "ff_toilet_1003", "ff_toilet_1002", "ff_toilet_1001", "ff_tr_b016", "ff_tr_b048", "ff_tr_b027", "ff_tr_b047", "ff_toilet_1004", "ff_tr_b023", "ff_tr_b022", "ff_tr_b026", "ff_tr_b046", "ff_tr_b021", "ff_tr_b020", "ff_tr_b019", "ff_tr_b024", "ff_tr_b050", "ff_tr_b051", "ff_tr_b049", "ff_tr_b057", "ff_tr_b036", "ff_tr_b054", "ff_tr_b056", "ff_tr_b053", "ff_tr_b014", "ff_tr_b012", "ff_tr_b041", "ff_tr_b045", "ff_tr_b040", "ff_tr_b042", "ff_tr_b055", "ff_tr_b", "ff_tr_b034", "ff_tr_b039", "ff_tr_b004", "ff_tr_b003", "ff_tr_b032", "ff_tr_b029", "ff_tr_b028", "ff_tr_b033", "ff_tr_b013", "ff_tr_b015", "ff_tr_b030", "ff_tr_b031", "ff_tr_b007", "ff_tr_b006", "ff_tr_g", "ff_tr_b005", "ff_tr_b011", "ff_tr_b010", "ff_tr_b009", "ff_tr_b008", "ff_tr_a017", "ff_tr_a018", "ff_tr_a016", "ff_tr_a041", "ff_tr_a022", "ff_tr_a021", "ff_tr_a020", "ff_tr_a019", "ff_tr_g003", "ff_tr_g004", "ff_tr_a023", "ff_tr_a039", "ff_tr_g001", "ff_tr_g002", "ff_ground", "sf_tr_a039", "sf_tr_c056", "sf_tr_c053", "sf_tr_c052", "sf_tr_c051", "sf_tr_c047", "sf_tr_c048", "sf_tr_c049", "sf_tr_c050", "sf_tr_c058", "sf_tr_c057", "sf_tr_c055", "sf_tr_c054", "sf_tr_c060", "sf_tr_c044", "sf_tr_c045", "sf_tr_c046", "sf_tr_a002", "sf_tr_a001", "sf_tr_a004", "sf_tr_a", "sf_tr_a047", "sf_tr_a048", "sf_tr_a006", "sf_tr_a005", "sf_tr_a013", "sf_tr_a012", "sf_toilet_05001", "sf_tr_a003", "sf_tr_a016", "sf_tr_a015", "sf_tr_a017", "sf_tr_a014", "sf_tr_a008", "sf_tr_a011", "sf_tr_a010", "sf_tr_a007", "sf_toilet_03001", "sf_tr_b031", "sf_toilet_04001", "sf_tr_a009", "sf_tr_b030", "sf_tr_b025", "sf_tr_b033", "sf_tr_b032", "sf_tr_b029", "sf_tr_b028", "sf_tr_b026", "sf_tr_b034", "sf_tr_b036", "sf_tr_b035", "sf_tr_b042", "sf_tr_b027", "sf_tr_b040", "sf_tr_b038", "sf_tr_b039", "sf_tr_b037", "sf_tr_a052", "sf_tr_a050", "sf_tr_a051", "sf_tr_b041", "sf_tr_c040", "sf_tr_c039", "sf_tr_c038", "sf_tr_a053", "sf_tr_c037", "sf_tr_c043", "sf_tr_c042", "sf_tr_c041", "sf_tr_c032", "sf_tr_c030", "sf_tr_c031", "sf_toilet_06001", "sf_tr_c036", "sf_tr_c034", "sf_tr_c033", "sf_tr_c026", "sf_tr_c029", "sf_tr_c022", "sf_tr_c021", "sf_tr_c035", "sf_tr_c024", "sf_tr_c019", "sf_tr_c027", "sf_tr_c025", "sf_tr_c018", "sf_tr_c020", "sf_tr_c023", "sf_tr_c028", "sf_tr_c012", "sf_tr_c011", "sf_tr_c010", "sf_tr_c003", "sf_tr_c002", "sf_tr_c017", "sf_tr_c", "sf_tr_c001", "sf_tr_c005", "sf_tr_c008", "sf_tr_c007", "sf_tr_c006", "sf_tr_c016", "sf_tr_c014", "sf_tr_c009", "sf_tr_c004", "sf_tr_b013", "sf_tr_b012", "sf_tr_c013", "sf_tr_c015", "sf_tr_b010", "sf_tr_b011", "sf_tr_b023", "sf_tr_b024", "sf_tr_b008", "sf_tr_b006", "sf_tr_b007", "sf_tr_b009", "sf_tr_b005", "sf_tr_b004", "sf_tr_b002", "sf_tr_b003", "sf_tr_b018", "sf_tr_b017", "sf_tr_b", "sf_tr_b001", "sf_tr_b019", "sf_tr_b015", "sf_tr_b014", "sf_tr_b016", "sf_tr_a045", "sf_tr_b021", "sf_tr_b022", "sf_tr_b020", "sf_toilet_02001", "sf_tr_a026", "sf_tr_a027", "sf_tr_a046", "sf_tr_a020", "sf_tr_a021", "sf_tr_a022", "sf_tr_a025", "sf_tr_a024", "sf_tr_a023", "sf_tr_a018", "sf_tr_a019", "sf_tr_a033", "sf_tr_a037", "sf_tr_a038", "sf_tr_a028", "sf_tr_a030", "sf_tr_a036", "sf_tr_a034", "sf_tr_a035", "sf_tr_a049", "sf_tr_a029", "sf_tr_a032", "sf_tr_a031", "sf_tr_a041", "sf_tr_a042", "sf_tr_a043", "sf_tr_a044", "sf_tr_a040", "sf_ground", ]

            if (INTERSECTED.name in names_1) {
              console.log(INTERSECTED.name, "- Nonclickable");
            } else {
              INTERSECTED.material = new THREE.MeshPhongMaterial();
              INTERSECTED.material.color.set("#1eb6ff");
              console.log(INTERSECTED.name);
              return INTERSECTED;
            }
          }
          else if (INTERSECTED.name == "ff_g-ksk-15001"){
            
           console.log("dwda"); 
          }
          // Условие для совместного выделения
          else if (INTERSECTED.name in  ["ff_g-23001", "ff_g-22001"]) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-23001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-22001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (INTERSECTED.name in ["ff_g-17001", "ff_g-16_1001", "ff_g-16_2001"]) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-17001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-16_1001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-16_2001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
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
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-12001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == ["ff_g-01001","ff_g-02_1001","ff_g-02_2001"]
          ) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-01001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-02_1001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-02_2001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (INTERSECTED.name == ["ff_g-49001", "ff_g-48001" , "ff_g-47001"]) {
            for (let i in scene.children[3].children) {
              if (scene.children[3].children[i].name === "ff_g-49001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-48001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-47001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
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
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-61001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-62001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-63001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-64001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
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
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-54001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-53001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
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
                scene.children[3].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[3].children[i].name === "ff_g-52001") {
                scene.children[3].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[3].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-61001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-02001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-05001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-32001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-33001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-36001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-35001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-75001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-76001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-77001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-69001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-70001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-83001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-84001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-85001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-86001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
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
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
              if (scene.children[4].children[i].name === "ff_f-54001") {
                scene.children[4].children[i].material =
                  new THREE.MeshPhongMaterial();
                scene.children[4].children[i].material.color.set("#1eb6ff");
              }
            }
          }
          INTERSECTED = null;
        }
      });

    },

    //Функция рендера страницы
    render() {
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