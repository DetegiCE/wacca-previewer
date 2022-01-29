import * as three from "three";

const main = () => {
    const output = document.createElement('div');
    output.id = 'output'

    const scene = new three.Scene();
    const renderer = new three.WebGLRenderer();

    renderer.setClearColor(0xEEEEEE);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    const planeGeometry = new three.PlaneGeometry(60, 20);
    const planeMaterial = new three.MeshLambertMaterial({ color: 0xcccccc });
    const plane = new three.Mesh(planeGeometry, planeMaterial);

    const cubeGeometry = new three.BoxGeometry(4, 4, 4);
    const cubeMaterial = new three.MeshLambertMaterial({ color: 0xff0000 });
    const cube = new three.Mesh(cubeGeometry, cubeMaterial);

    const sphereGeometry = new three.SphereGeometry(4, 4, 4);
    const sphereMaterial = new three.MeshLambertMaterial({ color: 0xff0000 });
    const sphere = new three.Mesh(sphereGeometry, sphereMaterial);

    plane.castShadow = true;
    plane.receiveShadow = true;
    cube.castShadow = true;
    cube.receiveShadow = true;
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    plane.position.set(15, 0, 0);
    cube.position.set(-4, 3, 0);
    sphere.position.set(20, 4, 2);

    const camera = new three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.2, 1000);
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    const spotLight = new three.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;

    scene.add(plane);
    scene.add(cube);
    scene.add(sphere);
    scene.add(spotLight);

    document.getElementById("output").appendChild(renderer.domElement);
    renderer.render(scene, camera);

    document.getElementById("console").appendChild(output);
}

window.onload = main;
