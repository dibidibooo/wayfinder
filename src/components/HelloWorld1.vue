<template>
    <div id="model_view">
      <div id="container" style="width: 100%; height: 100%; overflow: hidden;"></div>
    </div>
</template>

<script>
import * as THREE from "three";

// CONTROLS
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";
import { InteractionManager } from "three.interactive";

// LOADERS
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// SCEN OBJECTS
import { Sky } from "three/examples/jsm/objects/Sky.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";


// PARTICLE
import ParticleSystem, {
  SpriteRenderer,
  Color,
  SphereZone,
  Body,
  Emitter,
  Life,
  Position,
  RadialVelocity,
  Rate,
  Scale,
  Span,
  Vector3D,
  ease,
} from "three-nebula";

// LIGHTS
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare.js";

export default {
  name: "ModelView",

  props: {
    BASE_MODELS_DIR: {
      type: String,
      default: "/models/",
    },

    out_select: { type: String, default: "TEST VAL" },
    out_select_sub: { type: String, default: "TEST VAL"  },

    TEST: {
      type: Boolean,
      default: function default_camera_move() {
        return false;
      },
    },

    model_scale: {
      type: Number,
      default: 1
    },
    hidden: {
      type: Array,
      default: function default_hidden_on_start() {
        return [];
      },
    },

    lights: {
      type: Array,
      default: function default_light_on_start() {
        return [];
      },
    },

    move_camera: {
      type: Boolean,
      default: function default_camera_move() {
        return true;
      },
    },

    explosion_model_use: {
      type: Boolean,
      default: function default_camera_move() {
        return false;
      },
    },

    start_camera_position: {
      type: Object,
      default: function default_start_position() {
        return {
          x: 700,
          y: 500,
          z: -800,
        };
      },
    },
    start_target_position: {
      type: Object,
      default: function default_start_position() {
        return {
          x: 0,
          y: 0.5,
          z: 0,
        };
      },
    },

    models_list: {
      type: Array,
      default: function default_models() {
        return [
          { name: "tv3", src: "/first_floor.fbx" },
          {
            name: "Main_and_tail_rotor",
            src: "/first_floor.fbx",
          },
        ];
      },
    },

    buttons: {
      type: Object,
      default: function default_buttons() {
        return {
          TV3: {
            interactive: {
              select: ["tv3"],
            },
          },
          "Fuzelazh 1": [
            "first_floor",
          ],
        };
      },
    },

    particles: {
      type: Array,
      default: function default_particles() {
        return [];
      },
    },

    animated_materials: {
      type: Array,
      default: function default_particles() {
        return [];
      },
    },

    animations: {
      type: Object,
      default: function() {
        return {};
      },
    },

    use_drag_control: {
      type: Boolean,
      default: true,
    },

    interactionManager_is_on: {
      type: Boolean,
      default: true,
    },

    auto_rotate: {
      type: Boolean,
      default: false,
    },

    // enable min camera position
    floor_enable: {
      type: Boolean,
      default: false,
    },

    // disable
    disable_target_move: {
      type: Boolean,
      default: false,
    },

    disable_zoom: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // THREE
      camera: null,
      scene: null,
      renderer: null,

      // ANIMATIONS
      clock: "",
      mixers: [],
      animation_scale: 1,

      // CONTROL
      control_is_on: true,
      controls: null,
      default_camera_position: {
        x: 500,
        y: 500,
        z: -500,
      },

      // DRAG CONTROLS
      drag_controls: null,
      draged_objects: [],
      draged_group: [],
      mouse: null,
      raycaster: null,

      // SKY
      use_sky: false,
      sky: null,
      sun: null,

      // SELECT
      // interactionManager_is_on: true,
      selected: [],
      interactionManager: null,
      unvisible_opacity: 0.3,

      // HIDDEN
      all_hidden_objects: [],

      // MODELS AND OBJECTS
      all_models: [],
      object_names: [],
      all_objects: [],

      // MODEL LOADING
      loading_percent: 0,
      loading_models: true,

      // EXPLOSION MODEL
      use_explosion_model: true,
      explosion_scalar: 0,

      // HDR
      BASE_HDR_SRC: "/media/img/HDR/",
      HDR_src: ["cape_hill_4k.hdr"],

      // STATS
      stats: null,
      use_stats: true,

      // OBJECTS
      materials: {},

      // PARTICLE
      use_particle: true,
      nebula: null,
      sprite_material: null,

      test_particle_params: {
        count: { min: 3, max: 5 },
        span_period: { min: 0.1, max: 0.2 },

        life: { min: 0.1, max: 2 },
        start_sphereZone: 1,
        radial_velocity: {
          strength: { min: 400, max: 800 },
          vector: { x: 0, y: 1, z: 0 },
          rand: 15,
        },

        scale: { start: { min: 2, max: 3.5 }, end: { min: 0, max: 0.2 } },

        position: { x: 0, y: 0, z: 0 },

        color: {
          start: ["#FF0026", "#FF00FF"],
          end: ["#ffff00", "#ffff11"],
        },
      },
      copy: false,
      test_particle: true,
      emitter_id: 0,

      // ANIMATED MATERIAL
      use_animated_material: true,
      models_count: 0,
      models_loaded_count: 0,

      material_mixers: [],
      ANIMATE_MATERIAL_TEXTURES: {
        arrow: "/media/img/arrows/arrow.png",
        line: "/media/img/arrows/line.png",
        dot: "/media/img/arrows/dots.png",
        full: "/media/img/arrows/full.png",
      },
      animated_material_names: [],

      test_material_param_tab: false,
      test_material_param: {
        object_name: "tv3_trubopr_ot_4_5opori",
        texture: "arrow",
        color: 0x006eff,
        wrap: true,
        repeat: { x: 1, y: 1 },
        offset: {
          duration: 1,
          time: [],
          values: [0, 0, 0, -1],
        },

        rotation: -90,
        center: { x: 0, y: 0 },
      },
      test_material_param_copy: false,

      // LIGHT
      LIGHT_TYPES: {
        spot: 1,
        point: 2,
      },
      lights_on_scene: [],
      light_flares: [],
      test_light: false,
      test_light_copy: false,
      light_test_params: {
        color: 0xff00ff,
        intensivity: 1.5,
        distance: 200,
        position: { x: 143, y: 420, z: 15 },

        use_blick: true,
        light_scale: 0.5,
      },

      // TEST
      test_camera_position_scale: { x: 1, y: 1, z: 1, scale: 1 },
      test_object_center_and_size: null,
      test_object_selected_name: "",
      test_camera_position_panel: false,
      models: {
        angar: "../media/models/angar/workshop.fbx",
        dancer: "/media/models/BboyHipHopMove.fbx",
      },
    };
  },

  mounted() {
    console.log(">>> mounted");
    this.default_camera_position = this.getDefaultPosition();

    // INIT
    this.init();
    if (this.use_sky) {
      this.initSky();
    }

    if (this.models_list.length) {
      this.models_count = this.models_list.length;
      console.log(">>> models_count", this.models_count);
    }

    // CONTROLS
    this.addControls();

    // HDR
    this.addHDR();

    // OBJECTS
    this.addSceneLight();
    this.createMaterials();

    // LOAD HELICOPTER
    this.animation_scale = this.animations.speed_scale || 1;
    this.loadHelicopter();

    // LIGHT
    this.loadFlaresTextures();

    // TEST
    if (this.TEST) {
      // this.testCube();
      this.testFBX();
      this.setAnimatedMaterial(this.test_material_param, true);

      // this.testGLTFLoad();
    }

    this.setLightsToScene(this.lights);

    // PARTICLES
    if (this.use_particle) {
      this.initParticleSystem();
      this.createSceneParticles(this.particles);
    }

    // ANIMATION
    this.animate();
  },

  watch: {
    out_select: function(val) {
      // SELECT
      this.resetSelect();
      if (val == "") {
        this.focusDefault();
      }

      if (Object.keys(this.buttons).includes(val)) {
        // interactive
        if (Object.keys(this.buttons[val]).includes("interactive")) {
          this.interactive(this.buttons[val].interactive);
        } else {
          this.focusDefault();
        }
      }
    },

    out_select_sub: function(val) {
      // console.log(">> out_select_sub", val);
      if(val == null){
        return
      }
      // SELECT
      this.resetSelect();
      if (val == "") {
        this.focusDefault();
      }

      if (Object.keys(this.buttons[this.out_select].children).includes(val)) {
        // console.log("> skdjfkjs", this.buttons[this.out_select]);
        // interactive
        if (Object.keys(this.buttons[this.out_select].children[val]).includes("interactive")) {
          this.interactive(this.buttons[this.out_select].children[val].interactive);
        } else {
          this.focusDefault();
        }
      }
    },

    explosion_scalar: function(scalar) {
      console.log(">- explosion_scalar changed", scalar);
      if (scalar <= 0) {
        this.resetDrag();
        return;
      }

      this.all_models.forEach((obj) => {
        obj.traverse((value) => {
          if (!value.isMesh || !value.worldDir) {
            return;
          }
          // Формула взрыва
          value.position.copy(
            new THREE.Vector3()
              .copy(value.userData.oldPs)
              .add(
                new THREE.Vector3().copy(value.worldDir).multiplyScalar(scalar)
              )
          );
        });
      });
    },
  },

  methods: {
    // INIT
    init() {
      // SCENE
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#001625");
      // this.scene.fog = new THREE.Fog(this.scene.background, 3500, 15000);
      // this.scene.fog	= new THREE.FogExp2( 0x000000, 0.1 );
      // window.test_scene = this.scene;

      // RENDER
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.gammaFactor = 1
      this.renderer.outputEncoding = THREE.RGBADepthPacking;

      this.renderer.toneMapping = THREE.ReinhardToneMapping;
      // this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

      this.renderer.toneMappingExposure = 0.85;
      let container = document.getElementById("container");
      container.appendChild(this.renderer.domElement);

      // CAMERA
      var rect = document.getElementById("model_view").getBoundingClientRect();
      var height = rect.height;
      var width = rect.width;

      this.camera = new THREE.PerspectiveCamera(
        75,
        // window.innerWidth / window.innerHeight,
        width / height,
        0.1,
        150000
      );
      this.camera.position.x = this.default_camera_position.x;
      this.camera.position.y = this.default_camera_position.y;
      this.camera.position.z = this.default_camera_position.z;

      const pointLight = new THREE.PointLight(0xffffff, 1);
      this.camera.add(pointLight);

      // init tick clock
      this.clock = new THREE.Clock();
    },

    getDefaultPosition() {
      if (Object.keys(this.start_camera_position).includes("x", "y", "z")) {
        return this.start_camera_position;
      }
      return { x: 500, y: 500, z: -500 };
    },

    initSky() {
      // Add Sky
      this.sky = new Sky();
      this.sky.scale.setScalar(450000);
      this.scene.add(this.sky);

      this.sun = new THREE.Vector3();

      const uniforms = this.sky.material.uniforms;
      uniforms["turbidity"].value = 4.3;
      uniforms["rayleigh"].value = 0;
      uniforms["mieCoefficient"].value = 0.001;
      uniforms["mieDirectionalG"].value = 0.247;

      const phi = THREE.MathUtils.degToRad(0.5 - 2);
      const theta = THREE.MathUtils.degToRad(180);

      this.sun.setFromSphericalCoords(1, phi, theta);

      uniforms["sunPosition"].value.copy(this.sun);

      this.renderer.toneMappingExposure = 0.4857;
    },

    // TiCK
    async animate() {
      requestAnimationFrame(this.animate);

      this.renderer.render(this.scene, this.camera);
      this.camera.updateProjectionMatrix();

      const delta = this.clock.getDelta();
      if (
        this.mixers.length > 0 &&
        this.use_explosion_model && this.explosion_scalar <= 0
      ) {
        this.mixers.forEach((mixer) => {
          mixer.update(delta);
        });
      }

      // STATS
      if (this.use_stats) {
        this.stats.update();
      }

      // controls
      if (this.control_is_on) {
        this.controls.update();
      }

      // select
      if (this.InteractionManager_is_on) {
        this.InteractionManager.update();
      }

      // PATICLE
      if (this.use_particle) {
        if (this.nebula) {
          if (this.nebula.emitters.length > 0) this.nebula.update();
        }
      }

      // ANIMATED MATERIAL
      if (this.use_animated_material && this.material_mixers.length > 0) {
        this.material_mixers.forEach((material_mixer) => {
          // console.log(">! ANIMATED MATERIAL");
          material_mixer.update(delta);
        });
      }
    },


    // SCENE LIGHT
    addSceneLight() {
      RectAreaLightUniformsLib.init();

      // const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
      // hemiLight.position.set( 0, 20000, 0 );
      // this.scene.add( hemiLight );
      const ambient_light = new THREE.AmbientLight(0xFFFFFF)
      this.scene.add(ambient_light);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
      hemiLight.color.setHSL(0.6, 1, 0.6);
      hemiLight.groundColor.setHSL(0.095, 1, 0.85);
      hemiLight.position.set(0, 50, 0);
      this.scene.add(hemiLight);

      // const hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, 10 );
      // this.scene.add( hemiLightHelper );

      const dirLight_1 = new THREE.DirectionalLight(0xffffff);
      dirLight_1.castShadow = true;
      dirLight_1.position.set(700, 2000, -900);
      this.scene.add(dirLight_1);

      const dirLight_2 = new THREE.DirectionalLight(0x0087FF);
      dirLight_2.castShadow = true;
      dirLight_2.position.set(0, 1500, 0);
      this.scene.add(dirLight_2);

      // const dirLight_2_1 = new THREE.DirectionalLight(0xC1FF00);
      // dirLight_2_1.castShadow = true;
      // dirLight_2_1.position.set(0, -2000, 0);
      // this.scene.add(dirLight_2_1);

      const dirLight_3 = new THREE.DirectionalLight(0xffffff);
      dirLight_3.castShadow = true;
      dirLight_3.position.set(300, 2000, 2000);
      this.scene.add(dirLight_3);

      // dirLight.shadow.camera.top = 180;
      // dirLight.shadow.camera.bottom = -100;
      // dirLight.shadow.camera.left = -120;
      // dirLight.shadow.camera.right = 120;
    },

    // CONTROLS
    addControls() {
      // window resize
      window.addEventListener("resize", this.onWindowResize);

      // orbit controls
      if (this.control_is_on) {
        this.controls = new OrbitControls(
          this.camera,
          this.renderer.domElement
        );
        this.controls.target.set(
          this.start_target_position.x,
          this.start_target_position.y,
          this.start_target_position.z
        );
        this.controls.enableDamping = true

        if(this.disable_target_move == true){
          this.controls.enablePan  = false
          
        }
        
        if(this.disable_zoom == true){
          this.controls.enableZoom   = false
        }

        if(this.auto_rotate == true){
          this.controls.autoRotate = true;
          this.controls.autoRotateSpeed = -1.5;
        }

        if(this.floor_enable == true){
          this.controls.maxPolarAngle = Math.PI /2;
          this.controls.minPolarAngle = 0;
        }
      }

      // drag control
      if (this.use_drag_control) {
        this.addDragControl();
      }

      // interaction manager
      if (this.interactionManager_is_on) {
        this.interactionManager = new InteractionManager(
          this.renderer,
          this.camera,
          this.renderer.domElement
        );
      }

      // cach
      THREE.Cache.enabled = true; // activate chache
    },

    addDragControl() {
      this.drag_controls = new DragControls(
        this.draged_objects,
        this.camera,
        this.renderer.domElement
      );
      this.drag_controls.addEventListener("drag", this.renderer);
      this.drag_controls.dispose();

      var is_drag = false;

      window.addEventListener("keydown", (event) => {
        if (event.keyCode === 16 && !is_drag) {
          this.drag_controls.activate();

          if (this.control_is_on) {
            this.controls.dispose();
          }

          is_drag = true;
        }
      });

      window.addEventListener("keyup", (event) => {
        if (event.keyCode === 16 && is_drag) {
          this.drag_controls.dispose();

          if (this.control_is_on) {
            this.controls = new OrbitControls(
              this.camera,
              this.renderer.domElement
            );
          }

          is_drag = false;
        }
      });
    },

    resetDrag() {
      console.log(">>> resetDrag");
      this.draged_objects.forEach((object) => {
        // object.position.copy(object.userData.default_position)
        this.addTweens(
          object.position,
          object.position.clone(),
          object.userData.default_position
        );
      });

      this.explosion_scalar = 0;
    },

    onWindowResize() {
      var rect = document.getElementById("container").getBoundingClientRect();
      var height = rect.height;
      var width = rect.width;

      // this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      // this.renderer.setSize( width, height );
    },

    // SELECT
    // set default view
    resetSelect() {
      this.resetSelectedView();
      this.allVisible();
      this.resetHidden();
    },

    focusDefault() {
      // camera coords
      const coords_camera_from = {
        x: this.camera.position.x,
        y: this.camera.position.y,
        z: this.camera.position.z,
      };
      const coords_camera_to = {
        x: this.default_camera_position.x,
        y: this.default_camera_position.y,
        z: this.default_camera_position.z,
      };
      this.addTweens(
        this.camera.position,
        coords_camera_from,
        coords_camera_to
      );

      if (this.control_is_on) {
        const coords_target_from = {
          x: this.controls.target.x,
          y: this.controls.target.y,
          z: this.controls.target.z,
        };
        const coords_target_to = {
          x: this.start_target_position.x,
          y: this.start_target_position.y,
          z: this.start_target_position.z,
        };
        this.addTweens(
          this.controls.target,
          coords_target_from,
          coords_target_to
        );
      }
    },

    interactive(interactive) {
      // ANIMATED MATERIAL
      if (Object.keys(interactive).includes("animated_materials")) {
        if (interactive.animated_materials.length > 0) {
          this.resetAllAnimateMaterials();
          this.setAllAnimatedMaterials(interactive.animated_materials);
        } else {
          this.resetAllAnimateMaterials();
          // this.setAllAnimatedMaterials(this.animated_materials);
        }
      } else {
        this.setAllAnimatedMaterials(this.animated_materials);
      }

      // SELECT OBJECTS
      if (Object.keys(interactive).includes("select")) {
        const names = interactive.select;
        const except_objects = Object.keys(interactive).includes("except")
          ? interactive.except
          : [];
        const position_scale = Object.keys(interactive).includes(
          "position_scale"
        )
          ? interactive.position_scale
          : { x: 1, y: 1, z: 1 };

        var select_names = [];
        if (names.length > 0) {
          if (names.length == 1) {
            var model = this.scene.getObjectByName(names[0]);
            this.getNames(model, select_names);
          } else {
            select_names = names;
          }
          this.selectObjectByNames(
            select_names,
            except_objects,
            position_scale
          );
        } else {
          this.focusDefault();
        }
      }

      // LIGHT
      if (Object.keys(interactive).includes("lights")) {
        this.setLightsToScene(interactive.lights);
      } else {
        if (this.lights.length > 0) {
          this.setLightsToScene(this.lights);
        }
      }

      // HIDDEN
      if (Object.keys(interactive).includes("hidden")) {
        this.hideByNames(interactive.hidden);
      }

      // PARTICLES
      if (Object.keys(interactive).includes("particles")) {
        this.destroyAllParticles();
        this.createSceneParticles(interactive.particles);
      } else {
        if (this.particles) {
          this.destroyAllParticles();
          this.createSceneParticles(this.particles);
        }
      }

      // ANIMATIONS
      if (Object.keys(interactive).includes("animations")) {
        if (Object.keys(interactive.animations).includes("speed_scale")) {
          this.animation_scale = interactive.animations.speed_scale || 1;
          this.changeAnimationScale(interactive.animations.speed_scale || 1);
        }
      }
      // this.changeAnimationScale(interactive.animations.speed_scale || 1);
    },

    // get all objects name
    getNames(object, names) {
      if (object.children) {
        if (object.children.length > 0) {
          object.children.forEach((child) => {
            this.getNames(child, names);
          });
        }
      }
      if (object.name && object.material) {
        names.push(object.name);
      }
    },

    // select objects by name
    selectObjectByNames(names, except_objects, position_scale) {
      this.resetSelectedView(); // reset
      this.allUnvisible();

      let objects = this.getObjectsByNames(names, except_objects);

      objects.forEach((object) => {
        this.setSelectedView(object);
      });

      // focus to object
      this.focusToObjects(objects, position_scale);
    },

    getObjectsByNames(names, except_objects) {
      let objects = [];
      names.forEach((name) => {
        if (name && !except_objects.includes(name)) {
          //  except
          var object = this.scene
            .getObjectByName(name)
            .getObjectByProperty("type", "Mesh"); // find object
          if (object) {
            objects.push(object);
            this.setSelectedView(object); // change materials
          } else {
            alert("Object '" + name + "' not found");
          }
        }
      });

      return objects;
    },

    resetSelectedView() {
      // RESET old selected
      this.selected.forEach((obj) => {
        if (this.animated_material_names.includes(obj.name)) {
          obj.material.opacity = 1;
        } else {
          if (Object.keys(obj.userData).includes("material_info")) {
            obj.material = this.getMaterialClone(
              obj.userData.material_info.material_default
            );
          }
        }
      });
      this.selected = [];
    },

    setSelectedView(object) {
      if (!Object.keys(object).includes("material")) {
        return;
      }

      const select_params = {
        opacity: 1,
        emissiveIntensity: 1,
        r: 255 / 255,
        g: 0 / 255,
        b: 0 / 255,
        depthWrite: false,
      };

      // object.userData.material_info = {
      //     material_default: this.getMaterialClone(object.material),
      // }

      var new_material = this.getMaterialClone(object.material);

      if (new_material.length) {
        for (var i = 0; i < new_material.length; i++) {
          changeMaterial(new_material[i], select_params);
        }
      } else {
        changeMaterial(new_material, select_params);
      }

      object.material = this.getMaterialClone(new_material);
      object.renderOrder = -100

      this.selected.push(object);

      // change material params
      function changeMaterial(new_material, select_params) {
        // console.log(">> -! changeMaterial", new_material);
        new_material.transparent = true;
        new_material.opacity = select_params.opacity;

        new_material.alphaTest = 0.5

        new_material.emissiveIntensity = select_params.emissiveIntensity;
        new_material.shininess = 100;
        new_material.depthWrite = select_params.emissiveIntensity;
        // new_material.reflectivity = 1;

        if (Object.keys(new_material).includes("emissive")) {
          new_material.emissive.r = select_params.r;
          new_material.emissive.g = select_params.g;
          new_material.emissive.b = select_params.b;
        }
      }
    },

    getMaterialClone(material) {
      // console.log(">>> getMaterialClone", material);
      // add to selected
      var object_material_default = null;
      if (typeof material && material.length) {
        object_material_default = [];
        // console.log(">>> Materials for clone", material);

        material.forEach((mat) => {
          object_material_default.push(mat.clone());
        });
      } else {
        object_material_default = material.clone();
      }

      return object_material_default;

      // return JSON.parse(JSON.stringify(material))
    },

    // focus to many objects
    focusToObjects(objects, position_scale = { x: 1, y: 1, z: 1, scale: 1 }) {
      let object_count = 0;
      let centers = [];
      let coords = [];

      objects.forEach((object) => {
        if (object.type != "Group") {
          object_count++;

          // center
          centers.push(this.getObjectCenterPoint(object));

          1; // size
          coords.push(this.getMinMaxCoord(object));
        }
      });

      let object_middle_point = { x: 0, y: 0, z: 0 };
      let object_size = 200;

      if (object_count > 0) {
        // get midle point
        centers.forEach((center) => {
          object_middle_point.x += center.x / object_count;
          object_middle_point.y += center.y / object_count;
          object_middle_point.z += center.z / object_count;
        });

        // objects size
        let mean_coord = {
          min: { x: 0, y: 0, z: 0 },
          max: { x: 0, y: 0, z: 0 },
        };
        coords.forEach((coord) => {
          mean_coord.min.x =
            coord.min.x < mean_coord.min.x ? coord.min.x : mean_coord.min.x;
          mean_coord.min.y =
            coord.min.y < mean_coord.min.y ? coord.min.y : mean_coord.min.y;
          mean_coord.min.z =
            coord.min.z < mean_coord.min.z ? coord.min.z : mean_coord.min.z;

          mean_coord.max.x =
            coord.max.x > mean_coord.max.x ? coord.max.x : mean_coord.max.x;
          mean_coord.max.y =
            coord.max.y > mean_coord.max.y ? coord.max.y : mean_coord.max.y;
          mean_coord.max.z =
            coord.max.z > mean_coord.max.z ? coord.max.z : mean_coord.max.z;
        });

        object_size = this.getCameraPositionDelta(mean_coord);
      }

      // focus
      this.moveCameraAndTarget(
        object_middle_point,
        object_size,
        position_scale
      );

      // TEST
      if (this.TEST) {
        // console.log(">>> moveCameraAndTarget");
        this.test_object_center_and_size = {};
        this.test_object_center_and_size.center = object_middle_point;
        this.test_object_center_and_size.size = object_size;
      }
    },

    // get min max coord
    getMinMaxCoord(object) {
      // get object geometry size
      var geometry = object.geometry;
      geometry.computeBoundingBox();
      const min = geometry.boundingBox.min;
      const max = geometry.boundingBox.max;

      return {
        min: min,
        max: max,
      };
    },

    // get object center
    getObjectCenterPoint(object) {
      // console.log(">>> getObjectCenterPoint", object);
      var geometry = object.geometry;

      if (!geometry.boundingBox) {
        geometry.computeBoundingBox();
      }
      const center = new THREE.Vector3();
      geometry.boundingBox.getCenter(center);
      object.localToWorld(center);

      return center;
    },

    // get object camera position
    getCameraPositionDelta(coord) {
      const max = coord.max;
      const min = coord.min;

      const x = max.x - min.x;
      const y = max.y - min.y;
      const z = max.z - min.z;

      var result =
        (Math.sqrt(x * x + y * y + z * z) *
          (window.innerWidth / window.innerHeight)) /
        2;

      // set value in range
      if (result > 600) {
        result = 600;
      }
      if (result < 10) {
        result = 10;
      }
      return result;
    },

    // move camera
    moveCameraAndTarget(
      object_middle_point,
      object_size,
      position_scale = { x: 1, y: 1, z: 1, scale: 1 }
    ) {
      // camera coords
      if (this.move_camera) {
        const coords_camera_from = {
          x: this.camera.position.x,
          y: this.camera.position.y,
          z: this.camera.position.z,
        };
        const scale = Object.keys(position_scale).includes("scale")
          ? position_scale.scale
          : 1;
        const coords_camera_to = {
          x: object_middle_point.x + position_scale.x * object_size * scale,
          y: object_middle_point.y + position_scale.y * object_size * scale,
          z: object_middle_point.z + position_scale.z * object_size * scale,
        };
        this.addTweens(
          this.camera.position,
          coords_camera_from,
          coords_camera_to
        );
      }

      // target
      if (this.control_is_on) {
        const coords_target_from = {
          x: this.controls.target.x,
          y: this.controls.target.y,
          z: this.controls.target.z,
        };
        const coords_target_to = {
          x: object_middle_point.x,
          y: object_middle_point.y,
          z: object_middle_point.z,
        };
        this.addTweens(
          this.controls.target,
          coords_target_from,
          coords_target_to
        );
      }
    },

    // Helicopter select
    selectObject(object) {
      this.resetHidden();
      this.resetSelectedView(); // reset
      this.allUnvisible();

      this.focusToObject(object); // camera
      this.setSelectedView(object); // mesh light
    },

    focusToObject(object) {
      const object_middle_point = this.getObjectCenterPoint(object);
      const object_size = this.getCameraPositionDelta(
        this.getMinMaxCoord(object)
      );
      this.moveCameraAndTarget(object_middle_point, object_size);
    },

    // VISIBILITY
    allUnvisible() {
      this.all_objects.forEach((object) => {
        this.setUnvisible(object, this.unvisible_opacity);
      });
    },

    allVisible() {
      // console.log(">>> allVisible");
      this.all_objects.forEach((object) => {
        this.setVisible(object);
      });
    },

    setUnvisible(object, percent = 0.4) {
      if (object.material) {
        if (object.material.length) {
          // console.log(">>> Set Unvisible object", object);
          object.material.forEach((material) => {
            // console.log(">> Material", material);
            material.transparent = true;
            material.opacity = percent;
          });
        } else {
          object.material.transparent = true;
          object.material.opacity = percent;
        }
      }
    },

    setVisible(object) {
      if (object.material && object.userData.opacity) {
        if (object.material.length) {
          for (var i = 0; i < object.material.length; i++) {
            object.material[i].transparent = true;
            object.material[i].opacity = parseFloat(object.userData.opacity[i]);
            // this.lightMaterial(object.material[i])
          }
        } else {
          object.material.transparent = true;
          object.material.opacity = parseFloat(object.userData.opacity);
          // this.lightMaterial(object.material)
        }
      }
    },

    lightMaterial(material) {
      console.log(">>> material light", material);
    },

    // HIDDEN
    hideByNames(names) {
      // console.log(">>> Hidden by name", names);
      names.forEach((name) => {
        if (name) {
          var model = this.scene.getObjectByName(name);
          model.visible = false;
          this.all_hidden_objects.push(model);
        }
      });
    },

    resetHidden() {
      // console.log(">>> Reset Hidden", this.all_hidden_objects);
      this.all_hidden_objects.forEach((model) => {
        model.visible = true;
      });
      this.all_hidden_objects = [];
    },

    // HELICOPTER
    loadHelicopter() {
      console.log("> === LOAD MODELS START === <");

      this.models_list.forEach((model_params) => {
        this.loadFBXBySrcAndSetToParrent(
          this.BASE_MODELS_DIR + model_params.src,
          this.scene,
          this.helicopterObjectsSuccessLoad,
          model_params.name,
          this.helicopterErrorFunction
        );
      });
    },

    helicopterObjectsSuccessLoad(object, parrent, name = null) {
      // console.log(">>> helicopterObjectsSuccessLoad");
      // console.log(object);

      this.toAllObjectChildren(object);

      object.position.y = 100;
      if (name) {
        object.name = name;
      }

      object.scale.set(this.model_scale, this.model_scale, this.model_scale)

      parrent.add(object);
      this.all_models.push(object);

      // find all models loaded
      this.models_loaded_count++;
      if (this.models_loaded_count >= this.models_count) {
        this.onLoadedAllModels();
      }

      if (this.use_explosion_model) {
        this.explosionModel(object);
      }
    },

    toAllObjectChildren(object) {
      if (object.material) {
        if (object.material.length) {
          // console.log(">>> Set Unvisible object", object);
          object.userData.opacity = [];
          object.material.forEach((material) => {
            // material.vertexColor = true;
            // material.flatShading = true;
            // console.log(">> Material", material);
            object.userData.opacity.push(
              material.opacity ? material.opacity : "" + ""
            );
          });
        } else {
          object.userData.opacity = object.material.opacity
            ? object.material.opacity
            : "" + "";
          // object.material.vertexColor = true;
          // object.material.flatShading = true;
        }
      }

      if (object.children.length > 0) {
        object.children.forEach((child) => {
          this.toAllObjectChildren(child);
        });
      }

      // add focus event
      if (object.type != "Group") {
        this.addFocusByClickEvent(object);
      }

      // if(object.material) {
      // object.material.opacity = 0.4;
      // }
      this.all_objects.push(object);
      this.object_names.push(object.name);
    },

    helicopterErrorFunction(error, name) {
      // find all models loaded
      this.models_loaded_count++;
      if (this.models_loaded_count >= this.models_count) {
        this.onLoadedAllModels();
      }

      alert("load error " + name);
      console.log(">> - load error ", error);
    },

    // focus on click
    async addFocusByClickEvent(object) {
      // console.log(">- add envent listener to " + object.name);

      // click
      object.addEventListener("click", (event) => {
        if (this.TEST) {
          this.test_object_selected_name = object.name;
          console.log("> ! '" + object.name + "' object: clicked");
          console.log("> ! Object info", object);
        }

        if (event.originalEvent.ctrlKey) {
          event.stopPropagation();
          this.selectObject(object);
        }
      });

      // click for select
      if (this.interactionManager_is_on) {
        this.interactionManager.add(object);
      }

      // drag
      if (this.use_drag_control) {
        this.draged_objects.push(object);
        object.userData.default_position = object.position.clone();
      }
    },

    onLoadedAllModels() {
      console.log(">> - on Loaded All Models", this.models_loaded_count);

      this.create_default_materials_data();
      if (this.animated_materials.length > 0) {
        this.setAllAnimatedMaterials(this.animated_materials);
      }

      if (this.hidden.length > 0) {
        this.hideByNames(this.hidden);
      }

      this.all_models.forEach((model) => {
        this.onAnimation(model, 0);
      });

      this.loading_models = false;
      console.log("> === LOAD MODELS END === <");
    },

    onAnimation(object, id) {
      if (object.animations.length > 0) {
        var mixer = new THREE.AnimationMixer(object);
        mixer.timeScale = this.animation_scale;
        this.mixers.push(mixer);
        const action = mixer.clipAction(object.animations[id]);
        action.play();
      }
    },

    changeAnimationScale(new_scale) {
      this.mixers.forEach((mixer) => {
        mixer.timeScale = new_scale;
      });
    },

    // EXPLOSION MODEL
    explosionModel(obj) {
      // Модель ограничивающего прямоугольника
      var modelBox3 = new THREE.Box3();
      var meshBox3 = new THREE.Box3();

      modelBox3.expandByObject(obj);
      // Рассчитать координаты центральной точки модели, это центр взрыва
      var modelWorldPs = new THREE.Vector3()
        .addVectors(modelBox3.max, modelBox3.min)
        .multiplyScalar(0.5);

      obj.traverse(function(value) {
        if (value.isMesh) {
          meshBox3.setFromObject(value);

          // Получить центральную точку каждой сетки, направление взрыва - это центральная точка взрыва к центральной точке сетки
          var worldPs = new THREE.Vector3()
            .addVectors(meshBox3.max, meshBox3.min)
            .multiplyScalar(0.5);
          if (isNaN(worldPs.x)) {
            return;
          }

          // Рассчитаем направление взрыва
          value.worldDir = new THREE.Vector3()
            .subVectors(worldPs, modelWorldPs)
            .normalize();

          // Сохраняем начальные координаты
          value.userData.oldPs = value.getWorldPosition(new THREE.Vector3());
        }
      });
    },

    // ROOM
    addRoom() {
      this.loadFBXBySrcAndSetToParrent(this.models.angar);
    },

    // HDR
    addHDR() {
      console.log(">>> addHDR");
      // var pmremGenerator;
      // THREE.DefaultLoadingManager.onLoad = function ( ) {
      //     pmremGenerator.dispose();
      // };

      // var hdrCubeRenderTarget;

      // var hdrCubeMap = new HDRCubeTextureLoader()
      //   .setPath(this.BASE_HDR_SRC)
      //   .setDataType(THREE.UnsignedByteType)
      //   .load(
      //     this.BASE_HDR_SRC + this.HDR_src[0],
      //     (hdr) => {
      //       console.log(">>- HDR", hdr);
      //       this.scene.background = hdr;

      //       // hdrCubeRenderTarget = pmremGenerator.fromCubemap( hdrCubeMap );

      //       // hdrCubeMap.magFilter = THREE.LinearFilter;
      //       // hdrCubeMap.needsUpdate = true;
      //     },
      //     (a) => {
      //       console.log(">>- A", a);
      //     },
      //     (b) => {
      //       console.log(">>- B", b);
      //     }
      //   );

      // console.log(">> hdr loaded", hdrCubeMap);


				// const textureLoader = new THREE.TextureLoader();
				// const textureEquirec = textureLoader.load( '/media/img/HDR/2294472375_24a3b8ef46_o.jpg' );
				// textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
				// textureEquirec.encoding = THREE.sRGBEncoding;
				// this.scene.background = textureEquirec;

    },

    async createMaterials() {
      // selected
      this.materials.selected = new THREE.MeshPhongMaterial({
        color: 0x000000,
        specular: 0x666666,
        emissive: 0xff0000,
        shininess: 10,
        opacity: 0.9,
        transparent: true,
      });

      // group
      this.materials.in_group = new THREE.MeshPhongMaterial({
        color: 0x000000,
        specular: 0x666666,
        emissive: 0xff0000,
        shininess: 10,
        opacity: 0.4,
        transparent: true,
      });

      // unvisible
      this.materials.unvisible = new THREE.MeshPhongMaterial({
        color: 0x0054f0,
        specular: 0x0054f0,
        shininess: 30,
        opacity: 0.6,
        transparent: true,
      });
    },

    // PARTICLE
    initParticleSystem() {
      // this.use_particle = true;
      this.nebula = new ParticleSystem();
    },

    createSceneParticles(particle_parametrs) {
      // console.log(">>> createSceneParticles", particle_parametrs);
      particle_parametrs.forEach((particle_param) => {
        const position = new THREE.Vector3(
          particle_param.position.x,
          particle_param.position.y,
          particle_param.position.z
        );
        this.addParticle(position, particle_param);
      });
      if (this.TEST) {
        this.emitter_id = particle_parametrs.length;
      }
    },

    addParticle(position, particle_params, test = false) {
      // console.log(">>> addParticle", position, particle_params);

      const emitter = new Emitter();
      emitter
        .setRate(
          new Rate(
            new Span(particle_params.count.min, particle_params.count.min),
            new Span(
              particle_params.span_period.min,
              particle_params.span_period.min
            )
          )
        )
        .addInitializers([
          // new Mass(1),

          new Body(new THREE.Sprite(this.sprite_material)),
          new Life(
            parseFloat(particle_params.life.min),
            parseFloat(particle_params.life.max)
          ),
          new Position(new SphereZone(particle_params.start_sphereZone)),
          new RadialVelocity(
            new Span(
              particle_params.radial_velocity.strength.min,
              particle_params.radial_velocity.strength.max
            ),
            new Vector3D(
              particle_params.radial_velocity.vector.x,
              particle_params.radial_velocity.vector.y,
              particle_params.radial_velocity.vector.z
            ),
            particle_params.radial_velocity.rand
          ),
        ])
        .addBehaviours([
          new Scale(
            new Span(
              parseFloat(particle_params.scale.start.min),
              parseFloat(particle_params.scale.start.max)
            ),
            new Span(
              parseFloat(particle_params.scale.end.min),
              parseFloat(particle_params.scale.end.max)
            )
          ),

          new Color(
            particle_params.color.start,
            particle_params.color.end,
            Infinity,
            ease.easeOutSine
          ),
        ])
        .setPosition({ x: position.x, y: position.y, z: position.z })
        .emit();

      // set position for move with object

      this.nebula.addRenderer(new SpriteRenderer(this.scene, THREE));
      // create on scene
      if (!test) {
        this.nebula.addEmitter(emitter);
        return false;
      } else {
        emitter.position = position;
        return emitter;
      }
    },

    destroyAllParticles() {
      for (let i = 0; i < this.nebula.emitters.length; i++) {
        this.destroyParticle(i);
      }
    },

    destroyParticle(id = 0) {
      this.nebula.emitters[id].removeAllParticles();
      this.nebula.emitters[id].removeEmitterBehaviour();
      this.nebula.emitters[id].removeAllInitializers();
      this.nebula.emitters[id].destroy();
    },

    // LIGHT
    async setLightsToScene(lights) {
      this.removeAllLights();

      lights.forEach((light) => {
        this.addLight(light);
      });
    },

    removeAllLights() {
      // console.log(">>> removeAllLights");
      if (this.lights_on_scene.length > 0) {
        this.lights_on_scene.forEach((light) => {
          this.scene.remove(light);
          // light.dispose();
        });

        this.lights_on_scene = [];
      }
    },

    testLight() {
      this.addLight(this.light_test_params, true);
    },

    addLight(light_params, test = false) {
      var light = new THREE.PointLight(
        light_params.color,
        light_params.intensivity,
        light_params.distance,
        2
      );

      if (light_params.use_blick) {
        // add flare
        const lensflare = new Lensflare();
        const light_scale = light_params.light_scale;
        lensflare.addElement(
          new LensflareElement(
            this.light_flares[3],
            light.distance * light_scale * 1,
            0,
            light.color
          )
        );
        light.add(lensflare);
      }

      // light.visible = false
      this.scene.add(light);
      this.lights_on_scene.push(light);

      if (test) {
        light.position = this.controls.target;
        light_params.position = this.controls.target;
      } else {
        light.position = light_params.position;
      }
    },

    loadFlaresTextures() {
      // LENSFLARE
      const textureLoader = new THREE.TextureLoader();
      this.light_flares.push(textureLoader.load("/media/img/light/blick.png"));
      this.light_flares.push(
        textureLoader.load("/media/img/light/blick_1.png")
      );
    },

    // ANIMATE MATERIAL
    setAllAnimatedMaterials(animated_materials) {
      // console.log(">>> setAllAnimatedMaterials", animated_materials);
      if (animated_materials.length > 0) {
        animated_materials.forEach((animated_material) => {
          this.setAnimatedMaterial(animated_material);
        });
      }
    },

    setAnimatedMaterial(animate_material_param, test = false) {
      console.log(">>> setAnimatedMaterial");
      var material = null;
      if (test) {
        material = this.getAnimatedMaterialOnParam(animate_material_param);
        var geometry = new THREE.BoxBufferGeometry(20, 50, 20);
        var mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
      } else {
        var object = this.scene.getObjectByName(
          animate_material_param.object_name
        );
        if (!object) {
          return;
        }

        if (
          Object.keys(object.userData).includes("material_info") &&
          Object.keys(object.userData.material_info).includes("animated") &&
          object.userData.material_info.animated == true
        ) {
          return;
        }

        material = this.getAnimatedMaterialOnParam(animate_material_param);

        let mat_clone = material.clone();
        object.material = mat_clone;
        this.animated_material_names.push(object.name);
      }
    },

    create_default_materials_data() {
      this.all_objects.forEach((obj) => {
        if (obj.type == "Mesh") {
          obj.userData.material_info = {
            material_default: this.getMaterialClone(obj.material),
            animated: false,
          };
          // console.log(">- create default material val", obj.userData.material_info);
        }
      });
    },

    getAnimatedMaterialOnParam(animate_material_param) {
      // create material
      var texture = new THREE.TextureLoader().load(
        this.ANIMATE_MATERIAL_TEXTURES[animate_material_param.texture]
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
      // texture.center = animate_material_param.center;

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

    resetAllAnimateMaterials() {
      console.log(">>> resetAllAnimateMaterials", this.animated_material_names);
      this.animated_material_names.forEach((object) => {
        this.resetAnimateMaterial(object);
      });
      this.animated_material_names = [];
    },

    resetAnimateMaterial(object_name) {
      console.log(">>> resetAnimateMaterial", object_name);
      var object = this.scene.getObjectByName(object_name);
      object.material = {};
      object.material = this.getMaterialClone(
        object.userData.material_info.material_default
      );
      object.userData.material_info.animated = false;
    },

    // FBX
    // Load FBX with custom success function
    loadFBXBySrcAndSetToParrent(
      model_src,
      parrent = null,
      success_function = null,
      name = null,
      error_function = null
    ) {
      //  TODO: set vertex color
      this.loading_models = true;
      const manager = new THREE.LoadingManager();
      // add handler for TGA textures
      manager.addHandler(/\.tga$/i, new TGALoader());
      const loader = new FBXLoader(manager);

      loader.load(
        model_src,
        (object) => {
          object.traverse(function(child) {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          // load success functions
          if (success_function && parrent) {
            // custom success_function and parrent
            success_function(object, parrent, name);
          } else if (parrent) {
            // custom parrent
            this.loadFbxSuccessFunction(object, parrent);
          } else {
            // default
            this.loadFbxSuccessFunction(object, this.scene);
          }
        },
        (load) => {
          // console.log((load.loaded / load.total) * 100 + "% loaded fbx");
          this.loading_percent = (load.loaded / load.total) * 100;
        },
        (e) => {
          console.log("Error");
          console.log(e);
          if (error_function) {
            error_function(e, name || "");
          }
        }
      );
    },

    // load fbx default success function
    loadFbxSuccessFunction(object, parrent) {
      // console.log(object);

      // animations
      if (object.animations.length > 0) {
        animation_start(object, this.mixers);
      }

      function animation_start(model, mixers) {
        var mixer = new THREE.AnimationMixer(model);
        mixers.push(mixer);
        const action = mixer.clipAction(model.animations[0]);
        action.play();
      }

      parrent.add(object);
    },

    // TEST
    testFBX() {
      // console.log(">>> test FBX");
      this.loadFBXBySrcAndSetToParrent(this.models.dancer);

      // BOX
      // const geometry = new THREE.BoxGeometry( 10, 10, 10 );
      // const material_test_cube = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
      // const mesh = new THREE.Mesh( geometry, material_test_cube );
      // this.scene.add( mesh );
      // mesh.position = this.controls.target;
    },

    testParticle() {
      // console.log(">>> testParticle", this.emitter_id);

      // this.test_particle = null;

      if (this.nebula.emitters.length > this.emitter_id) {
        this.emitter_id = this.nebula.emitters.length - 1;
        this.destroyParticle(this.emitter_id);
      }

      this.nebula.addEmitter(
        this.addParticle(this.controls.target, this.test_particle_params, true)
      );
      // console.log(this.emitter_id);

      this.test_particle_params.position = this.controls.target;

      // console.log(this.nebula);
    },

    testCameraMoveForGetScale() {
      console.log(">>> TEST CameraMoveForGetScale");
      if (this.test_object_center_and_size) {
        this.moveCameraAndTarget(
          this.test_object_center_and_size.center,
          this.test_object_center_and_size.size,
          this.test_camera_position_scale
        );
      }
    },

    testGLTFLoad() {
      console.log(">>> TEST GLTF LOADER");
      const loader = new GLTFLoader();
      loader.load(this.BASE_MODELS_DIR + "TEST/Test.glb", (gltf) => {
        console.log(">> - load glb", gltf);
        gltf.scene.scale.set(100.0, 100.0, 100.0);

        this.scene.add(gltf.scene);
      });
    },

    // methods end
  },

  // destroy
  beforeDestroy() {
    console.log("beforeDestroy");
    if (this.interactionManager_is_on) {
      this.interactionManager.dispose();
    }

    this.camera = null;
    this.scene = null;
    this.renderer = null;
  },
};
</script>

