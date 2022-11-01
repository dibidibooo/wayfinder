<template>
  <div id="container">

      <button
        @click="change_floor(1), activeBtn = 'btn1'"
        :class="{buttonactive: activeBtn === 'btn1' }"
        class="bubblybutton"
        style="margin-left: -5.5em"
      >
        <a>1 Этаж</a>
        <!-- {{this.road_floors.includes(1)? 1: 0}}
        {{this.selected_floor == 1? 1: 0}} -->

      </button>
      <button @click="change_floor(2), activeBtn = 'btn2'"
      :class="{buttonactive: activeBtn === 'btn2' }" 
      class="bubblybutton">
        <a>2 Этаж</a>
        <!-- {{this.road_floors.includes(2)? 1: 0}}
        {{this.selected_floor == 2? 1: 0}} -->
      </button>

    <div style="position: absolute; margin-top: 10em">
    <button @click="test_create_text()">test box</button>
    <button @click="change_floor(1)">floor 1</button>
    <button @click="change_floor(2)">floor 2</button>
    <button @click="add_row_by_name('0')">0</button>
    <button @click="add_row_by_name('1')">1</button>
    <button @click="add_row_by_name('2')">2</button>
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
    <button @click="add_row_by_name('48')">48</button>
    <button @click="add_row_by_name('Эскалатор 1')">Эскалатор 1</button>
    <button @click="add_row_by_name('Эскалатор 2')">Эскалатор 2</button>
    <button @click="add_row_by_name('Эскалатор 3')">Эскалатор 3</button>
    <button @click="remove_row">remove</button>
    <button @click="add_row_by_name('49')">49</button>
    <button @click="add_row_by_name('50')">50</button>
    <button @click="add_row_by_name('51')">51</button>
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
    <button @click="add_row_by_name('88')">88</button>
    </div>

    <ButtonSearch />
    <ButtonMenu />
  </div>
</template>

<!-- <script src="./threejs/Path3D.js"></script> -->

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import axios from "axios";

import TextSprite from "@seregpie/three.text-sprite";
import ButtonMenu from "@/components/ButtonMenu.vue";
import ButtonSearch from "@/components/ButtonSearch.vue";
// import Autocomplete from 'vue2-autocomplete-js'

// import json_search from "/public/search.json";
import all_path from "/public/roads.json";
import text_config from "/public/text_config.json";
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
// import road_texture from "/public/images/threejs/images/path_007_21.png";

// import { GUI } from 'dat.gui'
var container, controls;
var camera, scene, raycaster, renderer;
var INTERSECTED;
let title;
var loaded_models = [];
// let titleCategory
const pointer = new THREE.Vector2();

const floors_info = {
  1:{
    src: "models/InUse/first_floor.gltf",
    scale: {x: 3.5, y: 4.5, z: 3.5},
    floor_code: 1,
    position: {x: 0, y: 5, z: 0}
  },
  2:{
    src: "models/InUse/second_floor.gltf",
    scale: {x: 3.5, y: 4.5, z: 3.5},
    floor_code: 2,
    position: {x: 0, y: 4, z: 0}
  },
}

export default {
  components: {
    ButtonMenu,
    ButtonSearch,
    // Autocomplete,
  },
  data() {
    return {
      activeBtn:'btn1',
      message: "",
      row: null,
      t_line: {
        objects: [],
      },
      path_lsit: all_path,
      text_config: text_config,
      clock: null,
      t_row: null,
      material_mixers: [],
      selected_objects: [],
      
      FLOOR_COUNT: 2,
      floors: {}, 
      selected_floor: 1,
      loded_floors: 0,
      road_floors: [],
      change_floor_speed: 1000,
    };
  },
  mounted() {
    
    this.init();
    this.animate();
    this.add_events();
    // this.getapicategory();
  },

  methods: {
    getapi() {
      axios.get("http://Localhost:8100/api/stores").then(response => {
        console.log(">>> getapi", response);
        title = response.data;
        this.add_text();
      });
    },
    
    // _____________________________________ row _____________________________________
    add_row_by_name(name = "0") {
      this.unselect_objects(this.path_lsit[name].objects)
      this.road_floors = []
      
      this.create_floor_rows(name);
      
      if(this.road_floors.length == 1){
        this.change_floor(this.road_floors[0])
      } else {
        this.change_floor(this.selected_floor)
      }
      // this.create_row(this.path_lsit[name].road);
      this.select_objects(this.path_lsit[name].objects);
    },

    create_floor_rows(name="0"){
      this.remove_row();

      const FIRST = 0;
      const SECOND = 1;


      const floor_roads = this.path_lsit[name].road
      console.log(">>> floor_roads", name, floor_roads[FIRST], floor_roads[SECOND]);
      if (floor_roads[FIRST].length > 0){
        this.create_row(floor_roads[FIRST], 1);
        this.road_floors.push(FIRST+1)
      }
      
      if (floor_roads[SECOND].length > 0){
        this.create_row(floor_roads[SECOND], 2);
        this.road_floors.push(SECOND+1)
      }
    },

    create_row(path_list, floor_ind) {
      let path_points = [];
      let path_lenght = 0
      path_list.forEach((p) => {
        path_points.push(new THREE.Vector3(p[0], p[1], p[2]));
        path_lenght += Math.sqrt(p[0]*p[0] + p[1]*p[1] + p[2]*p[2] )
      });
      path_lenght = Math.fround(path_lenght)
      // console.log(">>> path_lenght", floor_ind, path_lenght);
      var curve = new THREE.CatmullRomCurve3(
        path_points,
        false /*is it closed*/
      );
      var tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.05, 20, false);
      var tubeMaterial = this.getAnimatedMaterial(path_lenght/2);
      var tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
      tube.name = "row_tube";
      this.floors[floor_ind].add(tube)
      tube.visible = this.selected_floor == floor_ind
      tube.opacity = this.selected_floor == floor_ind? 1: 0;
      tube.scale.x /= floors_info[floor_ind].scale.x
      tube.scale.y /= floors_info[floor_ind].scale.y
      tube.scale.z /= floors_info[floor_ind].scale.z
      console.log(">>> tube.visible", this.selected_floor, floor_ind, tube.visible, this.selected_floor == floor_ind);
      // scene.add(tube);
    },

    getAnimatedMaterial(count=15) {
      const animate_material_param = {
        object_name: "row_tube",
        texture: "full",
        color: "#000000",
        wrap: true,
        repeat: {
          x: 2,
          y: count,
        },
        offset: {
          duration: 1,
          time: [],
          values: [0, 0, 0, -1],
        },
        rotation: -90,
        center: {
          x: 0.5,
          y: 0,
        },
      };
      // create material
      var texture = new THREE.TextureLoader().load(
        "images/threejs/RouteImage/route.png"
      );

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

    remove_row() {
      let find = true;
      while (find){
        // var selectedObject = scene.getObjectByName("row_tube");
        const row_floor_1 = this.floors[1].getObjectByName("row_tube")
        const row_floor_2 = this.floors[2].getObjectByName("row_tube")
        if(row_floor_1 || row_floor_2){
          if(row_floor_1) {
            this.floors[1].remove(row_floor_1)
          }
          if(row_floor_2) {
            this.floors[2].remove(row_floor_2)
          }
          // scene.remove(selectedObject);
          find = true;
        } else {
          find = false
        }
      }
    },
    
    // _____________________________________ select _____________________________________
    select_objects(objects_list) {
      objects_list.forEach((obj_name) => {
        var selectedObject = scene.getObjectByName(obj_name);
        selectedObject.material.copy(selectedObject.material.clone())
        if (selectedObject) {
          console.log(">>> selectedObject", selectedObject);
          this.add_animation(selectedObject, {x:1, y:3, z:1})
          // selectedObject.userData.defaultMaterial = selectedObject.material.clone()
          if (!("defaultMaterial" in Object.keys(selectedObject.userData))){
            selectedObject.userData.defaultMaterial = {
              r: selectedObject.material.color.r,
              g: selectedObject.material.color.g,
              b: selectedObject.material.color.b,
            }
          }
          // console.log(">>> color", selectedObject.userData.defaultMaterial);
          this.add_material_bounce(selectedObject.material, {r:44, g:0.66, b:0.63}, 1)
          // selectedObject.material.copy(this.select_material()) 

          console.log(">> material", selectedObject);

          this.selected_objects.push(obj_name);
        } else {
          console.error(">>> not found:", obj_name);
        }
      });
    },

    unselect_objects(){
      this.selected_objects.forEach((obj_name) => {
        var selectedObject = scene.getObjectByName(obj_name);
        if (selectedObject) {
          this.add_animation(selectedObject, {x:1, y:1, z:1})
          this.add_material_bounce(selectedObject.material, selectedObject.userData.defaultMaterial, 0)
          console.log(">>> unselect_objects", selectedObject);
        } else {
          console.error(">>> not found:", obj_name);
        }
      });
      this.selected_objects = []
    },

    add_animation(selectedObject, to_scale){
      const from_scale = {x: selectedObject.scale.x, y: selectedObject.scale.y, z: selectedObject.scale.z}
      this.add_bounce(selectedObject.scale, from_scale,  to_scale)
    },

    select_material(){
      let material = new THREE.MeshStandardMaterial( {
        metalness: 1,
        roughness: 1,
        envMapIntensity: 1.0,
      } );
      return material;
    },

    add_material_bounce(material, color_to, opacity){
      material.color.r = color_to.r;
      material.color.g = color_to.g;
      material.color.b = color_to.b;
      material.opacity = opacity
    },

    add_bounce(obj_scale, scale_from, scale_to){
      new TWEEN.Tween(scale_from)
        .to({x: scale_to.x, y: scale_to.y, z: scale_to.z},
            2000
        )
        .easing(TWEEN.Easing.Bounce.Out)
        .onUpdate(()=>{
          obj_scale.set(scale_from.x, scale_from.y, scale_from.z);
        })
        .start()
    },

    // ==============================================================

    add_floor(src, scale, floor=0, deltaPosition=null){
      const loader = new GLTFLoader();
      loader.load(
        src,
        (gltf_model1) => {
          const obj = gltf_model1.scene
          // set scale
          obj.scale.set(scale.x, scale.y, scale.z);

          // select floor
          this.floors[floor] = obj
          if (floor != this.selected_floor){
            this.setOpacity(obj, 0)
            // this.floors[floor].visible = false
          } else {
            this.setOpacity(obj, 1)
          }
          
					obj.traverse( function ( object ) {
            if ( object.isMesh ) object.castShadow = true;
          } );

          // set position
          if (deltaPosition) {
            obj.position.x += deltaPosition.x;
            obj.position.y += deltaPosition.y;
            obj.position.z += deltaPosition.z;
          }

          // add to scene
          scene.add(obj)

          loaded_models.push(obj)
          this.on_all_loaded_models();
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    },

    change_floor(curr_floor){
      Object.keys(this.floors).forEach(floor => {
        // let from;
        let to = 0;
        if(curr_floor == floor){
          // from = 0;
          to = 1
        } else {
          // from = 1;
          to = 0
        }
        // console.log(">>> floor", curr_floor, floor, to);
        this.change_opacity(this.floors[floor], to);
      })
      this.selected_floor = curr_floor

      // move camera
      new TWEEN.Tween(controls.target)
      .to(floors_info[curr_floor].position,
        2000
      )
      .start()

      console.log(">>> position",curr_floor, this.floors[curr_floor]);
      
    },

    select_floor(obj, select=false){
      let from, to;
      if(select == true){
        from = 0;
        to = 1
      } else {
        from = 1;
        to = 0
      }

      console.log(">>> select_floor", obj, select);
      new TWEEN.Tween(obj)
      .to(to,
        this.change_floor_speed
      )
      .easing(TWEEN.Easing.Bounce.Out)
      .onUpdate(()=>{
        console.log(">>> set_opacity", from);
        this.setOpacity(obj, from);
      })
      .start()
    },

    change_opacity(obj, to_opacity){
      obj.children.forEach((child)=>{
        this.change_opacity( child, to_opacity );
      })

      if ( obj.material ) {
        new TWEEN.Tween( obj.material )
        .to( { opacity: to_opacity }, 1000 )
        .onUpdate(() => {
          // console.log(">> change opacity", obj.material.opacity, to_opacity);
          if(obj.material.opacity == 0) {
            obj.visible = false
          } else {
            obj.visible = true
          }
        })
        .start();
      }
    },

    setOpacity( obj, opacity ) {
      obj.children.forEach((child)=>{
        this.setOpacity( child, opacity );
      })

      if ( obj.material ) {
        // console.log(">>> opacity",obj.material, opacity);
        obj.material.opacity = opacity ;
        obj.material.transparent = true;
        // obj.material.emissive.g = 1 ;
      }
    },

    init() {
      //Camera create and settings
      camera = new THREE.PerspectiveCamera(
        11,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.set(0, 30, 50);

      //Create Scene and settings
      scene = new THREE.Scene();
      scene.background = new THREE.Color("#dcdcdc");
      scene.fog = new THREE.FogExp2( 0x000000, 0.0025 );
    
      

      const hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.02 );
      hemiLight.intensity = 3
      // hemiLight.castShadow = true
      scene.add( hemiLight );

      // const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
      // hemiLight.position.set( 0, 2, 0 );
      // scene.add( hemiLight );

      const dirLight = new THREE.DirectionalLight( 0xffffff );
      dirLight.position.set( 0.3, 1, 1 );
      dirLight.castShadow = true;
      dirLight.shadow.camera.top = 0.2;
      dirLight.shadow.camera.bottom = - 0.2;
      dirLight.shadow.camera.left = - 0.2;
      dirLight.shadow.camera.right = 0.2;
      dirLight.shadow.camera.near = 0.1;
      dirLight.shadow.camera.far = 40;
      scene.add( dirLight );
      

      this.add_floor(floors_info[1].src, floors_info[1].scale, floors_info[1].floor_code, floors_info[1].position)
      this.add_floor(floors_info[2].src, floors_info[2].scale, floors_info[2].floor_code, floors_info[2].position)

      //Raycaster-settings
      raycaster = new THREE.Raycaster();
      renderer = new THREE.WebGLRenderer();

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.physicallyCorrectLights = true
      renderer.shadowMap.enabled = true
      renderer.toneMappingExposure = Math.pow( 1, 5.0 );
      renderer.outputEncoding = THREE.sRGBEncoding;
      

      //Orbit-controls create and settings
      controls = new OrbitControls(camera, renderer.domElement);
      controls.listenToKeyEvents(window);
      controls.enableRotate = true;
      // di Максимальное и минимальное приближение камеры
      controls.minDistance = 20;
      controls.maxDistance = 105;
      // di Touch fingers
      controls.touches = {
        ONE: THREE.TOUCH.DOLLY_PAN,
      };
      // di Ограничение по Rotate
      controls.minPolarAngle = 0.1;
      controls.maxPolarAngle = 0.9;
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

      this.clock = new THREE.Clock();
    },

    on_all_loaded_models(){
      this.loded_floors ++
      console.log(">>> on_all_loaded_models", this.loded_floors);
      if(this.loded_floors >= this.FLOOR_COUNT){
        console.log(">>> load end", );
        this.getapi();
        this.change_floor(this.selected_floor)
      }
    },

    create_text(id, name){
      id = id.toString();
      const obj = this.text_config[id]
      const position = this.get_bound(obj.objects)
      console.log(">>> create_text", position);
      if(obj){
        console.log(">>>create_text",id, name, this.text_config[id], this.text_config);
        let instance = new TextSprite({
          // alignment: "center",
          fontFamily: "fantasy",
          color: "#ffffff",
          strokeColor: "#000000",
          strokeWidth: 0.03,
          fontSize: 0.02,
          text: name,
        });
        instance.scale.set(0.5, 0.5, 0.5);
        // instance.position.set(obj.position[0], obj.position[1], obj.position[2]);
        instance.position.set(position);
        instance.rotation.set(0, 0, 150);
        this.floors[obj.floor].add(instance);
      }
    },

    get_bound(names=["ff_g-45001", "ff_g-44001"]){
      let object_centers = []
      let obj_height = 0
      names.forEach(name => {
        const obj = scene.getObjectByName(name)
        obj.geometry.computeBoundingBox()
        const box = obj.geometry.boundingBox
        obj_height = box.max.y
        const center = new THREE.Vector3()
        box.getCenter(center)
        object_centers.push(center)
      })
      console.log(">> object_centers", object_centers);

      let center_v = new THREE.Vector3(0, 0, 0)
      const count = object_centers.length
      object_centers.forEach(cent => {
        center_v.addScaledVector(cent, 1)
      })      
      console.log(">>center_v",count, center_v,obj_height);
      console.log(">>> center_v.divide", center_v.divide(new THREE.Vector3(count, count, count)));
      center_v.y = 0.1
      return center_v


    },

    add_text(){
      console.log("Text from DB loaded");
      for (let i in title) {
          console.log(">>> text:",i, title[i] );
          // this.create_text(title[i].id, title[i].title)
        }
    },

    test_create_text(){
      
      this.create_text("000", "SUPER MEGA TEXXT")
    },
      
      //Подгон размера окна к данным матрице
      async onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      },

      //Выбрать модель через кнопку (1 этаж / 2 этаж )
      buttonModel1() {
      this.floors[1].visible = true;  
      this.floors[2].visible = false;
    },

    buttonModel2() {
      this.floors[1].visible = false;
      this.floors[2].visible = true;
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
      TWEEN.update();

      //Функция срабатывающаяя на двойное нажатие мыши
      // this.intersects = null;
      const delta = this.clock.getDelta();

      if (this.material_mixers.length > 0) {
        this.material_mixers.forEach((material_mixer) => {
          material_mixer.update(delta);
        });
      }

      this.render();
      // this.render_row();
    },

    add_events() {
      document.addEventListener("dblclick", async function () {
        //Рэйкастер для захвата модели на точке где расположена мышь
        raycaster.setFromCamera(pointer, camera);

        if (this.floors[1].visible != false) {
          var intersects = raycaster.intersectObjects(
            this.floors[1].children,
            true
          );
        } else {
          intersects = raycaster.intersectObjects(
            this.floors[2].children,
            true
          );
        }
        //Получение объекта после реакции с рэйкастером
        if (intersects.length > 0) {
          if (INTERSECTED != intersects[0].object) {
            INTERSECTED = intersects[0].object;
            // Условие для некликабельных моделей
            const names_1 = [
              "ff_g-39001",
              "ff_tr_e008",
              "ff_tr_e007",
              "ff_tr_e021",
              "ff_tr_e023",
              "ff_toilet_3001",
              "ff_tr_e020",
              "ff_tr_e009",
              "ff_tr_e010",
              "ff_toilet_3002",
              "ff_tr_e022",
              "ff_tr_e011",
              "ff_tr_e012",
              "ff_tr_e013",
              "ff_tr_e018",
              "ff_tr_e019",
              "ff_toilet_4001",
              "ff_tr_e025",
              "ff_tr_e017",
              "ff_tr_e015",
              "ff_tr_e016",
              "ff_tr_e014",
              "ff_tr_e024",
              "ff_tr_e026",
              "ff_tr_e004",
              "ff_tr_e003",
              "ff_tr_e006",
              "ff_tr_e005",
              "ff_tr_d028",
              "ff_tr_d030",
              "ff_tr_e",
              "ff_tr_e002",
              "ff_tr_d025",
              "ff_tr_d026",
              "ff_tr_d027",
              "ff_tr_d029",
              "ff_tr_d",
              "ff_tr_d019",
              "ff_tr_d031",
              "ff_tr_d024",
              "ff_tr_d020",
              "ff_tr_d023",
              "ff_tr_d002",
              "ff_tr_d003",
              "ff_tr_d021",
              "ff_tr_d005",
              "ff_tr_d004",
              "ff_tr_d022",
              "ff_tr_d014",
              "ff_tr_d017",
              "ff_tr_d018",
              "ff_tr_d006",
              "ff_tr_d015",
              "ff_tr_d012",
              "ff_tr_d013",
              "ff_tr_d016",
              "ff_tr_d011",
              "ff_tr_d032",
              "ff_tr_d008",
              "ff_tr_d007",
              "ff_toilet_7002",
              "ff_toilet_7001",
              "ff_tr_d009",
              "ff_tr_d010",
              "ff_tr_f002",
              "ff_tr_f",
              "ff_toilet_7004",
              "ff_toilet_7003",
              "ff_tr_f006",
              "ff_tr_f005",
              "ff_tr_f004",
              "ff_tr_f003",
              "ff_toilet_6004",
              "ff_toilet_6001",
              "ff_toilet_6002",
              "ff_tr_f007",
              "ff_toilet_6003",
              "ff_tr_f018",
              "ff_tr_f008",
              "ff_toilet_6005",
              "ff_tr_f011",
              "ff_tr_f013",
              "ff_tr_f009",
              "ff_tr_f015",
              "ff_tr_f016",
              "ff_tr_f010",
              "ff_tr_f014",
              "ff_tr_f012",
              "ff_toilet_5003",
              "ff_toilet_5002",
              "ff_toilet_5001",
              "ff_tr_f017",
              "ff_tr_a029",
              "ff_tr_a037",
              "ff_toilet_5004",
              "ff_toilet_5005",
              "ff_tr_a033",
              "ff_tr_a034",
              "ff_tr_a035",
              "ff_tr_a036",
              "ff_tr_a038",
              "ff_tr_a026",
              "ff_tr_a032",
              "ff_tr_a040",
              "ff_tr_a027",
              "ff_tr_a030",
              "ff_tr_a025",
              "ff_tr_a024",
              "ff_tr_a006",
              "ff_tr_a",
              "ff_tr_a031",
              "ff_tr_a028",
              "ff_tr_a014",
              "ff_tr_a003",
              "ff_tr_a004",
              "ff_tr_a005",
              "ff_tr_a007",
              "ff_tr_a008",
              "ff_tr_a013",
              "ff_tr_a002",
              "ff_toilet_2001",
              "ff_tr_a012",
              "ff_tr_a011",
              "ff_tr_a009",
              "ff_toilet_2002",
              "ff_toilet_2003",
              "ff_tr_a010",
              "ff_tr_a015",
              "ff_tr_c013",
              "ff_tr_c023",
              "ff_tr_c014",
              "ff_tr_a042",
              "ff_tr_c022",
              "ff_tr_c021",
              "ff_tr_c033",
              "ff_tr_c034",
              "ff_tr_c028",
              "ff_tr_c031",
              "ff_tr_c029",
              "ff_tr_c030",
              "ff_tr_c018",
              "ff_tr_c020",
              "ff_tr_c017",
              "ff_tr_c032",
              "ff_tr_c015",
              "ff_tr_c016",
              "ff_tr_c012",
              "ff_tr_c019",
              "ff_tr_c026",
              "ff_tr_c024",
              "ff_tr_c025",
              "ff_tr_c011",
              "ff_tr_c004",
              "ff_tr_c002",
              "ff_tr_c",
              "ff_tr_c027",
              "ff_tr_c008",
              "ff_tr_c009",
              "ff_tr_c007",
              "ff_tr_c005",
              "ff_tr_b037",
              "ff_tr_c003",
              "ff_tr_c006",
              "ff_tr_c010",
              "ff_tr_b043",
              "ff_tr_b038",
              "ff_tr_b025",
              "ff_tr_b035",
              "ff_tr_b052",
              "ff_tr_b017",
              "ff_tr_b018",
              "ff_tr_b044",
              "ff_toilet_1003",
              "ff_toilet_1002",
              "ff_toilet_1001",
              "ff_tr_b016",
              "ff_tr_b048",
              "ff_tr_b027",
              "ff_tr_b047",
              "ff_toilet_1004",
              "ff_tr_b023",
              "ff_tr_b022",
              "ff_tr_b026",
              "ff_tr_b046",
              "ff_tr_b021",
              "ff_tr_b020",
              "ff_tr_b019",
              "ff_tr_b024",
              "ff_tr_b050",
              "ff_tr_b051",
              "ff_tr_b049",
              "ff_tr_b057",
              "ff_tr_b036",
              "ff_tr_b054",
              "ff_tr_b056",
              "ff_tr_b053",
              "ff_tr_b014",
              "ff_tr_b012",
              "ff_tr_b041",
              "ff_tr_b045",
              "ff_tr_b040",
              "ff_tr_b042",
              "ff_tr_b055",
              "ff_tr_b",
              "ff_tr_b034",
              "ff_tr_b039",
              "ff_tr_b004",
              "ff_tr_b003",
              "ff_tr_b032",
              "ff_tr_b029",
              "ff_tr_b028",
              "ff_tr_b033",
              "ff_tr_b013",
              "ff_tr_b015",
              "ff_tr_b030",
              "ff_tr_b031",
              "ff_tr_b007",
              "ff_tr_b006",
              "ff_tr_g",
              "ff_tr_b005",
              "ff_tr_b011",
              "ff_tr_b010",
              "ff_tr_b009",
              "ff_tr_b008",
              "ff_tr_a017",
              "ff_tr_a018",
              "ff_tr_a016",
              "ff_tr_a041",
              "ff_tr_a022",
              "ff_tr_a021",
              "ff_tr_a020",
              "ff_tr_a019",
              "ff_tr_g003",
              "ff_tr_g004",
              "ff_tr_a023",
              "ff_tr_a039",
              "ff_tr_g001",
              "ff_tr_g002",
              "ff_ground",
              "sf_tr_a039",
              "sf_tr_c056",
              "sf_tr_c053",
              "sf_tr_c052",
              "sf_tr_c051",
              "sf_tr_c047",
              "sf_tr_c048",
              "sf_tr_c049",
              "sf_tr_c050",
              "sf_tr_c058",
              "sf_tr_c057",
              "sf_tr_c055",
              "sf_tr_c054",
              "sf_tr_c060",
              "sf_tr_c044",
              "sf_tr_c045",
              "sf_tr_c046",
              "sf_tr_a002",
              "sf_tr_a001",
              "sf_tr_a004",
              "sf_tr_a",
              "sf_tr_a047",
              "sf_tr_a048",
              "sf_tr_a006",
              "sf_tr_a005",
              "sf_tr_a013",
              "sf_tr_a012",
              "sf_toilet_05001",
              "sf_tr_a003",
              "sf_tr_a016",
              "sf_tr_a015",
              "sf_tr_a017",
              "sf_tr_a014",
              "sf_tr_a008",
              "sf_tr_a011",
              "sf_tr_a010",
              "sf_tr_a007",
              "sf_toilet_03001",
              "sf_tr_b031",
              "sf_toilet_04001",
              "sf_tr_a009",
              "sf_tr_b030",
              "sf_tr_b025",
              "sf_tr_b033",
              "sf_tr_b032",
              "sf_tr_b029",
              "sf_tr_b028",
              "sf_tr_b026",
              "sf_tr_b034",
              "sf_tr_b036",
              "sf_tr_b035",
              "sf_tr_b042",
              "sf_tr_b027",
              "sf_tr_b040",
              "sf_tr_b038",
              "sf_tr_b039",
              "sf_tr_b037",
              "sf_tr_a052",
              "sf_tr_a050",
              "sf_tr_a051",
              "sf_tr_b041",
              "sf_tr_c040",
              "sf_tr_c039",
              "sf_tr_c038",
              "sf_tr_a053",
              "sf_tr_c037",
              "sf_tr_c043",
              "sf_tr_c042",
              "sf_tr_c041",
              "sf_tr_c032",
              "sf_tr_c030",
              "sf_tr_c031",
              "sf_toilet_06001",
              "sf_tr_c036",
              "sf_tr_c034",
              "sf_tr_c033",
              "sf_tr_c026",
              "sf_tr_c029",
              "sf_tr_c022",
              "sf_tr_c021",
              "sf_tr_c035",
              "sf_tr_c024",
              "sf_tr_c019",
              "sf_tr_c027",
              "sf_tr_c025",
              "sf_tr_c018",
              "sf_tr_c020",
              "sf_tr_c023",
              "sf_tr_c028",
              "sf_tr_c012",
              "sf_tr_c011",
              "sf_tr_c010",
              "sf_tr_c003",
              "sf_tr_c002",
              "sf_tr_c017",
              "sf_tr_c",
              "sf_tr_c001",
              "sf_tr_c005",
              "sf_tr_c008",
              "sf_tr_c007",
              "sf_tr_c006",
              "sf_tr_c016",
              "sf_tr_c014",
              "sf_tr_c009",
              "sf_tr_c004",
              "sf_tr_b013",
              "sf_tr_b012",
              "sf_tr_c013",
              "sf_tr_c015",
              "sf_tr_b010",
              "sf_tr_b011",
              "sf_tr_b023",
              "sf_tr_b024",
              "sf_tr_b008",
              "sf_tr_b006",
              "sf_tr_b007",
              "sf_tr_b009",
              "sf_tr_b005",
              "sf_tr_b004",
              "sf_tr_b002",
              "sf_tr_b003",
              "sf_tr_b018",
              "sf_tr_b017",
              "sf_tr_b",
              "sf_tr_b001",
              "sf_tr_b019",
              "sf_tr_b015",
              "sf_tr_b014",
              "sf_tr_b016",
              "sf_tr_a045",
              "sf_tr_b021",
              "sf_tr_b022",
              "sf_tr_b020",
              "sf_toilet_02001",
              "sf_tr_a026",
              "sf_tr_a027",
              "sf_tr_a046",
              "sf_tr_a020",
              "sf_tr_a021",
              "sf_tr_a022",
              "sf_tr_a025",
              "sf_tr_a024",
              "sf_tr_a023",
              "sf_tr_a018",
              "sf_tr_a019",
              "sf_tr_a033",
              "sf_tr_a037",
              "sf_tr_a038",
              "sf_tr_a028",
              "sf_tr_a030",
              "sf_tr_a036",
              "sf_tr_a034",
              "sf_tr_a035",
              "sf_tr_a049",
              "sf_tr_a029",
              "sf_tr_a032",
              "sf_tr_a031",
              "sf_tr_a041",
              "sf_tr_a042",
              "sf_tr_a043",
              "sf_tr_a044",
              "sf_tr_a040",
              "sf_ground",
            ];

            if (INTERSECTED.name in names_1) {
              console.log(INTERSECTED.name, "- Nonclickable");
            } else {
              INTERSECTED.material = new THREE.MeshPhongMaterial();
              INTERSECTED.material.color.set("#1eb6ff");
              console.log(INTERSECTED.name);
              return INTERSECTED;
            }
          } else if (INTERSECTED.name == "ff_g-ksk-15001") {
            console.log("dwda");
          }
          // Условие для совместного выделения
          else if (INTERSECTED.name in ["ff_g-23001", "ff_g-22001"]) {
            for (let i in this.floors[1].children) {
              if (this.floors[1].children[i].name === "ff_g-23001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-22001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name in ["ff_g-17001", "ff_g-16_1001", "ff_g-16_2001"]
          ) {
            for (let i in this.floors[1].children) {
              if (this.floors[1].children[i].name === "ff_g-17001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-16_1001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-16_2001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-11001" ||
            INTERSECTED.name == "ff_g-12001"
          ) {
            for (let i in this.floors[1].children) {
              if (this.floors[1].children[i].name === "ff_g-11001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-12001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == ["ff_g-01001", "ff_g-02_1001", "ff_g-02_2001"]
          ) {
            for (let i in this.floors[1].children) {
              if (this.floors[1].children[i].name === "ff_g-01001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-02_1001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-02_2001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == ["ff_g-49001", "ff_g-48001", "ff_g-47001"]
          ) {
            for (let i in this.floors[1].children) {
              if (this.floors[1].children[i].name === "ff_g-49001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-48001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-47001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-60001" ||
            INTERSECTED.name == "ff_g-61001" ||
            INTERSECTED.name == "ff_g-62001" ||
            INTERSECTED.name == "ff_g-63001" ||
            INTERSECTED.name == "ff_g-64001"
          ) {
            for (let i in this.floors[1].children) {
              if (this.floors[1].children[i].name === "ff_g-60001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-61001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-62001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-63001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-64001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-55001" ||
            INTERSECTED.name == "ff_g-54001" ||
            INTERSECTED.name == "ff_g-53001"
          ) {
            for (let i in this.floors[1].children) {
              if (this.floors[1].children[i].name === "ff_g-55001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-54001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-53001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_g-51001" ||
            INTERSECTED.name == "ff_g-52001"
          ) {
            for (let i in this.floors[1].children) {
              if (this.floors[1].children[i].name === "ff_g-51001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[1].children[i].name === "ff_g-52001") {
                this.floors[1].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[1].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-62001" ||
            INTERSECTED.name == "ff_f-61001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-62001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-61001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-01001" ||
            INTERSECTED.name == "ff_f-02001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-01001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-02001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-04001" ||
            INTERSECTED.name == "ff_f-05001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-04001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-05001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-31001" ||
            INTERSECTED.name == "ff_f-32001" ||
            INTERSECTED.name == "ff_f-33001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-31001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-32001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-33001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-37001" ||
            INTERSECTED.name == "ff_f-36001" ||
            INTERSECTED.name == "ff_f-35001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-37001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-36001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-35001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-74001" ||
            INTERSECTED.name == "ff_f-75001" ||
            INTERSECTED.name == "ff_f-76001" ||
            INTERSECTED.name == "ff_f-77001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-74001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-75001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-76001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-77001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-68001" ||
            INTERSECTED.name == "ff_f-69001" ||
            INTERSECTED.name == "ff_f-70001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-68001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-69001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-70001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-82001" ||
            INTERSECTED.name == "ff_f-83001" ||
            INTERSECTED.name == "ff_f-84001" ||
            INTERSECTED.name == "ff_f-85001" ||
            INTERSECTED.name == "ff_f-86001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-82001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-83001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-84001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-85001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-86001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
            }
          } else if (
            INTERSECTED.name == "ff_f-53001" ||
            INTERSECTED.name == "ff_f-54001"
          ) {
            for (let i in this.floors[2].children) {
              if (this.floors[2].children[i].name === "ff_f-53001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
              }
              if (this.floors[2].children[i].name === "ff_f-54001") {
                this.floors[2].children[i].material =
                  new THREE.MeshPhongMaterial();
                this.floors[2].children[i].material.color.set("#1eb6ff");
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

/* Мигающая кнопка */
.buttonactive {
  border: none;
  background: rgb(251, 33, 117);
  background: linear-gradient(
    0deg,
    rgba(251, 33, 117, 1) 0%,
    rgba(234, 76, 137, 1) 100%
  );
  color: #fff;
  overflow: hidden;
}
.buttonactive:before {
  position: absolute;
  content: "";
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: #fff;
  animation: shiny-btn1 3s ease-in-out infinite;
}
.buttonactive:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}

@-webkit-keyframes shiny-btn1 {
  0% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    -webkit-transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}
</style>