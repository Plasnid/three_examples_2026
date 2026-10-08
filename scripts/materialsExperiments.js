import * as THREE from 'three';

let scene, camera, renderer;

function makeASceneWithMaterials(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    let pageBody = document.querySelector("body");
    pageBody.appendChild(renderer.domElement);

    //https://threejs.org/manual/#en/materials
    //Basic mesh is flat in its shading
    //Lambert mesh calculates lighting at verticies only
    //Phong shading determines shading at every pixel, and supports highlights

    //* rendering a cube
    const cubeGeom = new THREE.BoxGeometry(10,10,10);
    const sphereGeom = new THREE.SphereGeometry( 10, 32, 16 ); 
    //*a basic mesh material will not be affected by lighting
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    //a phong material will!
    //const phongMaterial = new THREE.MeshPhongMaterial({color:0x44aa88});
    const phongMaterial = new THREE.MeshPhongMaterial({color:0x44aa88, shininess: 550});
    const physMaterial = new THREE.MeshPhysicalMaterial({color:0x44aa88, metalness: 1, clearcoat: 1, clearcoatRoughness: .2});
    const labertMaterial = new THREE.MeshLambertMaterial({color:0xffaa88});
    const cubeEx = new THREE.Mesh(cubeGeom, material);
    cubeEx.position.z = -30;
    cubeEx.position.y = 10;
    cubeEx.position.x= -20;
    cubeEx.rotation.x = 45;
    scene.add(cubeEx);

    //* lets try some primatives
    //* phong material cube
    const spherePhong = new THREE.Mesh(sphereGeom, phongMaterial);
    spherePhong.position.z = -30;
    spherePhong.position.y = 10;
    spherePhong.position.x= 0;
    spherePhong.rotation.x = 45;
    spherePhong.rotation.y = 45;
    scene.add(spherePhong);

    //*labert material cube
    const cubeExLambert= new THREE.Mesh(cubeGeom, labertMaterial);
    cubeExLambert.position.z = -30;
    cubeExLambert.position.y = 10;
    cubeExLambert.position.x= 20;
    cubeExLambert.rotation.x = 45;
    scene.add(cubeExLambert);

     //* physical material cube
    const spherePhys = new THREE.Mesh(sphereGeom, physMaterial);
    spherePhys.position.z = -30;
    spherePhys.position.y = -10;
    spherePhys.position.x= -20;
    spherePhys.rotation.x = 45;
    spherePhys.rotation.y = 45;
    scene.add(spherePhys);

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

export {makeASceneWithMaterials};