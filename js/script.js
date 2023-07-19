// import * as THREE from 'three'
// let scene , camera , renderer;
// let winW = window.innerWidth;
// let winH = window.innerHeight;
// function init(){
//     // initializing the  news
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xddddd);
//     // Camera Angle
//     camera = new THREE.PerspectiveCamera(40, winW/winH, 1, 5000)

//     hlight = new THREE.AmbientLight(0x404040, 100);

// scene.add(hlight)
// renderer = new THREE.WebGLRenderer({antialias: true})
// renderer.setSize(winW, winH)
// document.body.appendChild(renderer.domElement)


// let loader = new THREE.GLTFLoader();
// loader.load('../img/scene.gltf' , function(gltf){
//     scene.add(gltf.scene);
//     renderer.render(scene, camera)
// })
// } 
// init();



// const width = window.innerWidth
// const height = window.innerHeight
// // Scene
// const scene = new THREE.Scene()
// scene.background = new THREE.Color('#00b140')
// // Camera
// const fov = 45 // AKA Field of View
// const aspect = window.innerWidth / window.innerHeight
// const near = 0.1 // the near clipping plane
// const far = 100 // the far clipping plane
// const camera = new PerspectiveCamera(fov, aspect, near, far)
// camera.position.set(0, 0, 10)
// // Renderer
// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// // Creating a cube
// const geometry = new THREE.BoxGeometry(2, 2, 2)
// const material = new THREE.MeshBasicMaterial({ wireframe: true })
// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)
// // Rendering the scene
// const container = document.querySelector('#threejs-container')
// container.append(renderer.domElement)
// renderer.render(scene, camera)

const myText = new SplitType('#my-intro')

let tl = gsap.timeline();
tl.to('.shine',{
    top:-100,
    delay:0.2,
    duration:.2,
    })
      
tl.to('.wrapper',{
    scale:1,
    delay:0.2,
    duration:.4,
    })
tl.to('.char',{
    y: 0,
    stagger: 0.05, 
    delay:0.2,
    duration:.2,
    zIndex: 1
})


