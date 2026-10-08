import * as THREE from 'three';

let scene, camera, renderer;


function makeAScene(){
    console.log("bork");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);

    renderer = new THREE.WebGLRenderer();
    //renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( 1200, 800 );
    renderer.domElement.classList.add("smallArea");
    let pageBody = document.querySelector("body");
    let renderContainer = document.createElement("div");
    renderContainer.classList.add("smallArea");
    pageBody.appendChild(renderContainer);
    renderContainer.appendChild(renderer.domElement);
    //.appendChild(renderer.domElement);

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
    renderer.setAnimationLoop(animate);
}
function animate(time){
    time *= 0.001;  // convert time to seconds
    renderer.render(scene, camera);
}

export {makeAScene};