import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const clock = new THREE.Clock();

    camera.position.set(0, 0, 13);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.15, 0.16, 180, 14),
      new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      })
    );
    group.add(knot);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });

    for (let i = 0; i < 3; i += 1) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(3.8 + i * 1.35, 0.018, 10, 140), ringMaterial);
      ring.rotation.x = Math.PI / 2 + i * 0.34;
      ring.rotation.y = i * 0.5;
      group.add(ring);
    }

    const particles = new THREE.BufferGeometry();
    const particleCount = 620;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color(0x22d3ee);
    const colorB = new THREE.Color(0xa78bfa);

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 5 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const index = i * 3;

      positions[index] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index + 2] = radius * Math.cos(phi);

      const mixed = colorA.clone().lerp(colorB, Math.random());
      colors[index] = mixed.r;
      colors[index + 1] = mixed.g;
      colors[index + 2] = mixed.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleField = new THREE.Points(
      particles,
      new THREE.PointsMaterial({
        size: 0.035,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      })
    );
    scene.add(particleField);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.x = Math.sin(elapsed * 0.13) * 0.18;
      group.rotation.y = elapsed * 0.12;
      knot.rotation.x = elapsed * 0.26;
      knot.rotation.z = elapsed * 0.16;
      particleField.rotation.y = elapsed * 0.035;
      particleField.rotation.x = Math.sin(elapsed * 0.08) * 0.12;
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);
    renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
      particles.dispose();
      knot.geometry.dispose();
      knot.material.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 opacity-70 mix-blend-screen"
    />
  );
};

export default ThreeBackground;
