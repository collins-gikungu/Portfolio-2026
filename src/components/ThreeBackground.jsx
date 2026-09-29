import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const clock = new THREE.Clock();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    camera.position.set(0, 0, 12);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const background = new THREE.Group();
    scene.add(background);

    const gridVertices = [];
    const gridSize = 22;
    for (let point = -gridSize; point <= gridSize; point += 1) {
      gridVertices.push(-gridSize, point, -3.5, gridSize, point, -3.5);
      gridVertices.push(point, -gridSize, -3.5, point, gridSize, -3.5);
    }
    const gridGeometry = new THREE.BufferGeometry();
    gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(gridVertices, 3));
    const grid = new THREE.LineSegments(
      gridGeometry,
      new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.045 })
    );
    background.add(grid);

    const traceMaterial = new THREE.LineBasicMaterial({
      color: 0x67e8f9,
      transparent: true,
      opacity: 0.22,
    });
    const nodePositions = [];
    const routes = [];
    const routeCount = 22;
    const pseudoRandom = (value) => {
      const x = Math.sin(value * 91.345) * 47453.5453;
      return x - Math.floor(x);
    };

    for (let index = 0; index < routeCount; index += 1) {
      const startX = -11 + pseudoRandom(index + 1) * 22;
      const startY = -7 + pseudoRandom(index + 31) * 14;
      const direction = pseudoRandom(index + 61) > 0.5 ? 1 : -1;
      const points = [new THREE.Vector3(startX, startY, -1.3)];
      let x = startX;
      let y = startY;

      for (let step = 0; step < 4; step += 1) {
        if (step % 2 === 0) x += direction * (1.25 + pseudoRandom(index * 9 + step) * 2.4);
        else y += (pseudoRandom(index * 13 + step) - 0.5) * 3.2;
        points.push(new THREE.Vector3(x, y, -1.3));
      }

      background.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), traceMaterial));
      routes.push({ points, offset: pseudoRandom(index + 99), speed: 0.035 + pseudoRandom(index + 129) * 0.035 });
      points.forEach((point) => nodePositions.push(point.x, point.y, point.z));
    }

    const nodesGeometry = new THREE.BufferGeometry();
    nodesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
    const nodes = new THREE.Points(
      nodesGeometry,
      new THREE.PointsMaterial({
        color: 0xa78bfa,
        size: 0.075,
        transparent: true,
        opacity: 0.78,
        depthWrite: false,
      })
    );
    background.add(nodes);

    const pulseGeometry = new THREE.BufferGeometry();
    const pulsePositions = new Float32Array(routeCount * 3);
    const pulseColors = new Float32Array(routeCount * 3);
    const cyan = new THREE.Color(0x67e8f9);
    const violet = new THREE.Color(0xc4b5fd);
    for (let index = 0; index < routeCount; index += 1) {
      const color = index % 3 === 0 ? violet : cyan;
      pulseColors.set([color.r, color.g, color.b], index * 3);
    }
    pulseGeometry.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));
    pulseGeometry.setAttribute('color', new THREE.BufferAttribute(pulseColors, 3));
    const pulses = new THREE.Points(
      pulseGeometry,
      new THREE.PointsMaterial({
        size: 0.13,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      })
    );
    background.add(pulses);

    const findPointOnRoute = (points, progress) => {
      const scaled = progress * (points.length - 1);
      const segment = Math.min(Math.floor(scaled), points.length - 2);
      return points[segment].clone().lerp(points[segment + 1], scaled - segment);
    };

    const updatePulses = (elapsed) => {
      routes.forEach(({ points, offset, speed }, index) => {
        const position = findPointOnRoute(points, (elapsed * speed + offset) % 1);
        pulsePositions.set([position.x, position.y, position.z + 0.08], index * 3);
      });
      pulseGeometry.attributes.position.needsUpdate = true;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const render = () => {
      const elapsed = clock.getElapsedTime();
      updatePulses(elapsed);
      background.rotation.z = Math.sin(elapsed * 0.09) * 0.025;
      background.position.y = Math.sin(elapsed * 0.12) * 0.18;
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);
    if (reducedMotion) render();
    else renderer.setAnimationLoop(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="fixed inset-0 z-0 opacity-70 mix-blend-screen" />;
};

export default ThreeBackground;
