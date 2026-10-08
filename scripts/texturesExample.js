import * as THREE from 'three';
import gsap from "gsap";
// Browsers can't import a PNG as a module, so point to the file's URL instead
const chicken = new URL('../img/chickenBanana.png', import.meta.url).href;

let scene, camera, renderer;

function makeTextureExample(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    let pageBody = document.querySelector("body");
    pageBody.appendChild(renderer.domElement);

    //* rendering a cube
    const cubeGeom = new THREE.BoxGeometry(20,20,20);
    
    //texture example
    const loader = new THREE.TextureLoader();
    const texture = loader.load( chicken );
    texture.colorSpace = THREE.SRGBColorSpace;

    const materialTexture = new THREE.MeshBasicMaterial({
        map: texture,
    });
    
    const material = new THREE.MeshPhongMaterial({color:0x44aa88});
    const cubeEx = new THREE.Mesh(cubeGeom, materialTexture);
    cubeEx.position.z = -30;
    cubeEx.position.x= 0;
    scene.add(cubeEx);

    //* rendering some lighting
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1,2,4);
    scene.add(light);

    startMotion([cubeEx]);

    renderer.setAnimationLoop(animate);
}
function startMotion(motionTargets){
    for (let i=0;i<motionTargets.length;i++){
        gsap.to(motionTargets[i].rotation, { duration: 2, x: -6});
        gsap.to(motionTargets[i].rotation, { duration: 2, y: -6, delay: 3});
        gsap.to(motionTargets[i].rotation, { duration: 2, z: -6, delay: 6, repeat: -1});
    }
}
function animate(time){
    time *= 0.001;  // convert time to seconds
    renderer.render(scene, camera);
}

export {makeTextureExample};