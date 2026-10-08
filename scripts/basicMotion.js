import * as THREE from 'three';
import gsap from "gsap";

let scene, camera, renderer;

function makeAMotionScene(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    let pageBody = document.querySelector("body");
    pageBody.appendChild(renderer.domElement);

    //* rendering a cube
    const cubeGeom = new THREE.BoxGeometry(5,5,5);
    //*a basic mesh material will not be affected by lighting
    //const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    //a phong material will!
    const material = new THREE.MeshPhongMaterial({color:0x44aa88});
    const cubeEx = new THREE.Mesh(cubeGeom, material);
    cubeEx.position.z = -30;
    cubeEx.position.x= 10;
    scene.add(cubeEx);

    //* lets try some primatives
    //* a cone
    const coneGeom = new THREE.ConeGeometry(6,8,16);
    const coneEx = new THREE.Mesh(coneGeom, material);
    coneEx.position.z = -30;
    scene.add(coneEx);

    //* rendering some lighting
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1,2,4);
    scene.add(light);

    startMotion([cubeEx, coneEx]);

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

export {makeAMotionScene};