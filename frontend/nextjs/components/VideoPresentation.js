```javascript
import React, { useEffect } from 'react';
import * as THREE from 'three';

const VideoPresentation = () => {
    let scene, camera, renderer;

    useEffect(() => {
        initThreeJS();
        animate();
    }, []);

    const initThreeJS = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;
    };

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    return (
        <div id="videoPresentation">
            <h2>360-Degree Video & Interactive 3D Presentation</h2>
        </div>
    );
};

export default VideoPresentation;
```