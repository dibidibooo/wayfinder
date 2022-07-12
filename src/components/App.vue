<template>
<div id="container">
</div>
</template>

<script>
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
import Swal from 'sweetalert2'
// import { GUI } from 'dat.gui'
var container, controls;
var camera, scene, raycaster, renderer;
var INTERSECTED;
// var MEHCANISM_CONTROLS;
var INTERSECTED1;
const pointer = new THREE.Vector2();
const amount = parseInt( window.location.search.slice( 1 ) ) || 70;
var array_correct_start=['1','2','3','4','5','6']
var temp_start=[]

export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
    }
  },  
  mounted(){
   this.massive_reverse();
   this.init();
   this.animate();
  },

  methods:{
async massive_reverse(){
      let arr1 = []
      for(var q = 0; q <= 10; q++){
        arr1.push(Math.floor(Math.random() * 1000))
      }
    
      console.log(arr1);
        for(var i = 0; i<arr1.length; i++){
          for(var j=0; j<arr1.length; j++){
            if(arr1[j]>arr1[i]){
              var temp = arr1[i]
              arr1[i] = arr1[j]
              arr1[j]=temp
            }
          }
        }
          console.log(arr1);
},

async init(){
        //Camera create and settings
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.set(amount,amount,amount)
        camera.lookAt( 0, 0, 0 );
        //Create Scene and settings
        scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xf0f0f0 );
        //Create Light for scene
        const light1 = new THREE.DirectionalLight( 0xf0f0f0, 1 );
				light1.position.set( 1, 0, 5 ).normalize();
				scene.add( light1 );
        const light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light2 );
        const spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( 1000, 1000, 1000 );
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 500;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;
        scene.add( spotLight );
        console.log(scene.children);
        // Fbx Create and loader
        var floader = new FBXLoader();
        floader.load('paneli_detach2.fbx', function(fbx) {
          console.log("FBX", fbx);
        fbx.rotation.set(0,-2.5,0)
        scene.add(fbx);
        renderer.render(scene, camera)
        });
        // const loader = new GLTFLoader();
        // loader.load( 'AOS.glb', function ( gltf ) {
        // scene.add( gltf.scene );
        // console.log(">>>THREE.JS:::",scene.add(gltf.scene));
        // }, 
        // undefined, function ( error ) {
        // console.error( error );
        // } );
        //Raycaster-settings
        raycaster = new THREE.Raycaster();
				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
        //Orbit-controls create and settings
        controls = new OrbitControls( camera, renderer.domElement );
        controls.listenToKeyEvents( window );
				controls.enableDamping = true;
				controls.enableZoom = true;
				controls.enablePan = true;
        controls.touches = {
	ONE: THREE.TOUCH.ROTATE,
	TWO: THREE.TOUCH.DOLLY_PAN
}
         controls.keys = {
	LEFT: 'KeyA', //left arrow
	UP: 'KeyW', // up arrow
	RIGHT: 'KeyD', // right arrow
	BOTTOM: 'KeyS' // down arrow
        }
        //Get element by HTML
        container = document.createElement( 'div' );
				document.body.appendChild( container );
        container.appendChild( renderer.domElement );
				document.addEventListener( 'mousemove', this.onPointerMove );
				window.addEventListener( 'resize', this.onWindowResize );  
        // this.controls_mechanism();
},
// async controls_mechanism(){
//    const gui = new GUI()
//    const cubeFolder = gui.addFolder('Controls')
//    cubeFolder.add(MEHCANISM_CONTROLS.rotation, 'x', 0, Math.PI * 2)
//    cubeFolder.add(MEHCANISM_CONTROLS.rotation, 'y', 0, Math.PI * 2)
//    cubeFolder.add(MEHCANISM_CONTROLS.rotation, 'z', 0, Math.PI * 2)
//    cubeFolder.open()
// },

//Подгон размера окна к данным матрице
async onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
},
//Отслеживание мыши
async onPointerMove( event ) {
				pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;   
},
//Выделение объектов и срабатывание анимации
async animate() {
        //Срабатывание анимации
       requestAnimationFrame( this.animate );
       //Обновление Орбит контроля
       controls.update();
       //Обновление Твин для более плавного движения модели
         TWEEN.update()
      //Рэйкастер для захвата модели на точке где расположена мышь
       raycaster.setFromCamera( pointer, camera );
       //Функция срабатывающаяя на двойное нажатие мыши
    document.addEventListener("dblclick", async function(){
      //Получение объекта после реакции с рэйкастером
		const intersects = raycaster.intersectObjects( scene.children[3].children, true );
				if ( intersects.length > 0 ) {
              if ( INTERSECTED != intersects[ 0 ].object) {
                      INTERSECTED = intersects[ 0 ].object;
                      }
              else if (INTERSECTED.name=="Object061"){
               
                //Присваивание свойств к объектом пойманых Рэйкастером
                INTERSECTED.material=new THREE.MeshPhongMaterial();
                INTERSECTED.material.color.set('#f5deb3');
                INTERSECTED.material.specular.set('#004cff');
                INTERSECTED.material.emissive.set('#ff0000');
                INTERSECTED.material.shininess=100000;
                //Плавное вращение объекта с помощью Твин
                new TWEEN.Tween(INTERSECTED.rotation)
                .to( { x:0.3}, 2000)
                .yoyo(true)
                .easing(TWEEN.Easing.Cubic.InOut)
                .start();
                //Обнуление объекта после изменении
                INTERSECTED=null;
              }
              else if(INTERSECTED.name==="Object067"){
                INTERSECTED.name="value1"
                INTERSECTED.rotation.set(-25,9.75,10);
                new TWEEN.Tween(scene.children[3].children[9].rotation)
                .to( { y:-3.2 }, 3000)
                .yoyo(true)
                .easing(TWEEN.Easing.Cubic.InOut)
                .start();
                //Изменение объектов которые не относяться к Рэйкастеру и играют вторую роль
                scene.children[3].children[9].material=new THREE.MeshPhongMaterial()
                scene.children[3].children[24].material= new THREE.MeshLambertMaterial({color: '#62d1b4', emissive: '#62d1b4'})
                //Присваивание свойсвт к объекту
                INTERSECTED.material=new THREE.MeshPhongMaterial();
                INTERSECTED.material.color.set('#f5deb3');
                INTERSECTED.material.specular.set('#004cff');
                INTERSECTED.material.emissive.set('#ff0000');
                INTERSECTED.material.shininess=100000;
                //Отправка данных в массив для сравнения 
                temp_start.push('1');
                INTERSECTED=null;
              }
              else if(INTERSECTED.name==="Object068"){
                INTERSECTED.name="value2"
                INTERSECTED.rotation.set(-25,9.75,10);
                INTERSECTED.material=new THREE.MeshPhongMaterial();
                INTERSECTED.material.color.set('#f5deb3');
                INTERSECTED.material.specular.set('#004cff');
                INTERSECTED.material.emissive.set('#ff0000');
                INTERSECTED.material.shininess=10000;
                scene.children[3].children[8].material=new THREE.MeshPhongMaterial()
                 new TWEEN.Tween(scene.children[3].children[8].rotation)
                .to( { y:1.5 }, 3000)
                .yoyo(true)
                .easing(TWEEN.Easing.Cubic.InOut)
                .start();
                temp_start.push('2')
                 INTERSECTED=null;
              }
              else if(INTERSECTED.name==="Object069"){
                INTERSECTED.name="value3"
                INTERSECTED.material=new THREE.MeshPhongMaterial();
                 INTERSECTED.material.color.set('#f5deb3');
                 INTERSECTED.material.specular.set('#004cff');
                 INTERSECTED.material.emissive.set('#ff0000');
                 INTERSECTED.material.shininess=10000;
                 //Условие на сравнивание перед отправкой данных, был ли изменен угол наклона объекта сцены???
                 if(scene.children[3].children[8].rotation.y == 1.5000000000000002 && scene.children[3].children[9].rotation.y == -3.2) temp_start.push('3');
                 else{
                  temp_start.push('timer-fixed');
                 }
                  INTERSECTED=null;
              }
              else if(INTERSECTED.name==="Object071"){
               INTERSECTED.name="value4"
              INTERSECTED.material=new THREE.MeshPhongMaterial();
                  INTERSECTED.material.color.set('#f5deb3');
                  INTERSECTED.material.specular.set('#004cff');
                  INTERSECTED.material.emissive.set('#ff0000');
                  INTERSECTED.material.shininess=10000;
                  temp_start.push('4') 
                   INTERSECTED=null;
                }
              else  if(INTERSECTED.name==="Object073"){
                INTERSECTED.name="value5"
                INTERSECTED.material=new THREE.MeshPhongMaterial();
                  INTERSECTED.material.color.set('#f5deb3');
                  INTERSECTED.material.specular.set('#004cff');
                  INTERSECTED.material.emissive.set('#ff0000');
                  INTERSECTED.material.shininess=10000;
                  temp_start.push('5') 
                   INTERSECTED=null;
                }
              else if(INTERSECTED.name==="Object075"){
                 INTERSECTED.name="value6"
                 INTERSECTED.material=new THREE.MeshPhongMaterial();
                  INTERSECTED.material.color.set('#f5deb3');
                  INTERSECTED.material.specular.set('#004cff');
                  INTERSECTED.material.emissive.set('#ff0000');
                  INTERSECTED.material.shininess=10000;
                  temp_start.push('6') 
                  const listener = new THREE.AudioListener();
                  camera.add( listener );
                  // create a global audio source
                  const sound = new THREE.Audio( listener );
                  // load a sound and set it as the Audio object's buffer
                  const audioLoader = new THREE.AudioLoader();
                  audioLoader.load( 'helicopter.wav', function( buffer ) {
                  sound.setBuffer( buffer );
                  sound.setLoop(false);
                  sound.setVolume( 0.5 );
                  sound.play();
                  });
                   INTERSECTED=null;
                }
              else if(INTERSECTED.name=="Object077"){
                INTERSECTED.material=new THREE.MeshPhongMaterial();
                  INTERSECTED.material.color.set('#f5deb3');
                  INTERSECTED.material.specular.set('#004cff');
                  INTERSECTED.material.emissive.set('#ff0000');
                  INTERSECTED.material.shininess=10000;   
                  INTERSECTED.name="finish"
                   INTERSECTED=null;
                  //Функция по сравниванию объектов и правильной последовательности нажатия.
                    if(JSON.stringify(array_correct_start)==JSON.stringify(temp_start)){
                      Swal.fire(
                      'Good job!',
                      'Успешный запуск!',
                      'success',
                    )
                        console.log("TEMP-START", temp_start);
                        temp_start=[];
                        setTimeout(function(){
                          window.location.reload()
                        }, 3000)
                        } 
                      else{
                        Swal.fire(
                      'Bad job!',
                      'Запуск не состоялся!!',
                      'error'
                    )
                        console.log("TEMP-START", temp_start);
                        temp_start=[];
                        setTimeout(function(){
                          window.location.reload()
                        }, 3000);
                        }
                                      }
             
               
                
 } })
    //       //Функция срабатывает после нажатия правой кнопкой мыши на объект 
    document.addEventListener('contextmenu' ,async function(){
            
            const intersects = raycaster.intersectObjects( scene.children[3].children, true );
            if ( INTERSECTED1 != intersects[ 0 ].object) {
                      INTERSECTED1 = intersects[ 0 ].object;
                      
                      }
           else if(INTERSECTED1.name=="Object067"){
                INTERSECTED1.rotation.set(90,9.75,10);
                 new TWEEN.Tween(scene.children[3].children[9].rotation)
                .to( { y:3.2}, 3000)
                .yoyo(true)
                .easing(TWEEN.Easing.Cubic.InOut)
                .start();
                scene.children[3].children[24].material= new THREE.MeshLambertMaterial({color: '#ffd800', emissive: '#ffd800'})
                INTERSECTED1.material=new THREE.MeshPhongMaterial();
                INTERSECTED1.material.color.set('blue');
                INTERSECTED1.material.specular.set('#004cff');
                INTERSECTED1.material.emissive.set('#ff0000');
                INTERSECTED1.material.shininess=10000;
              }
            else if(INTERSECTED1.name=="Object068"){
                INTERSECTED1.rotation.set(90,9.75,10);
                INTERSECTED1.material=new THREE.MeshPhongMaterial();
                INTERSECTED1.material.color.set('blue');
                INTERSECTED1.material.specular.set('#004cff');
                INTERSECTED1.material.emissive.set('#ff0000');
                INTERSECTED1.material.shininess=10000;
              }
            else if(INTERSECTED1.name=="Object069"){
                INTERSECTED1.material=new THREE.MeshPhongMaterial();
                INTERSECTED1.material.color.set('blue');
                INTERSECTED1.material.specular.set('#004cff');
                INTERSECTED1.material.emissive.set('#ff0000');
                INTERSECTED1.material.shininess=10000;
              }
            else if(INTERSECTED1.name=="Object071")
              {INTERSECTED1.material=new THREE.MeshPhongMaterial();
                INTERSECTED1.material.color.set('blue');
                INTERSECTED1.material.specular.set('#004cff');
                INTERSECTED1.material.emissive.set('#ff0000');
                INTERSECTED1.material.shininess=10000;
              }
            else if(INTERSECTED1.name=="Object073"){INTERSECTED1.material=new THREE.MeshPhongMaterial();
                INTERSECTED1.material.color.set('blue');
                INTERSECTED1.material.specular.set('#004cff');
                INTERSECTED1.material.emissive.set('#ff0000');
                INTERSECTED1.material.shininess=10000;
              }
            else if(INTERSECTED1.name=="Object075"){INTERSECTED1.material=new THREE.MeshPhongMaterial();
                INTERSECTED1.material.color.set('blue');
                INTERSECTED1.material.specular.set('#004cff');
                INTERSECTED1.material.emissive.set('#ff0000');
                INTERSECTED1.material.shininess=10000;
              } 
            else if(INTERSECTED1.name=="Object077"){INTERSECTED1.material=new THREE.MeshPhongMaterial();
                INTERSECTED1.material.color.set('blue');
                INTERSECTED1.material.specular.set('#004cff');
                INTERSECTED1.material.emissive.set('#ff0000');
                INTERSECTED1.material.shininess=10000;   
                }
        })
    INTERSECTED1=null;
    INTERSECTED=null;
		this.render();
},
//Функция рендера страницы
async render() {
  renderer.render( scene, camera );
},


  }
}
</script>

<style>
</style>
