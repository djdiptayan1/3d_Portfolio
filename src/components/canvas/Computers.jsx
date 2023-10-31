import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers1 = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? [0.7, 0.7, 0.7] : [1, 1, 1]}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Computers3 = ({ isMobile }) => {
  const computer = useGLTF("./retro_floppy/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={3}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? [0.12, 0.12, 0.12] : [0.15, 0.15, 0.15]}
        position={isMobile ? [-1, -3, 0] : [-1, -3.25, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const Robot = ({ isMobile }) => {
  const computer = useGLTF("./Robot_Playground/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={3}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? [3, 3, 3] : [3.7, 3.7, 3.7]}
        position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};
const modelComponents = [
  { component: Computers1, cameraPosition: { position: [20, 3, 5], fov: 50 } },
  { component: Computers3, cameraPosition: { position: [0, 20, 5], fov: 50 } },
  { component: Robot, cameraPosition: { position: [-1, 20, 5], fov: 50 } }
  // Add more components with their respective camera positions here
];

function getRandomModelComponent() {
  const randomIndex = Math.floor(Math.random() * modelComponents.length);
  return modelComponents[randomIndex];
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMobileQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMobileQueryChange);
    };
  });

  const { component: SelectedComponent, cameraPosition } = getRandomModelComponent();

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={cameraPosition} // Set the camera position based on the selected component
      // camera={{ position: [0, 20, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SelectedComponent isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
