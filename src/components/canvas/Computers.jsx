import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");
  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.1} groundColor="black" />
        <pointLight intensity={0.01} position={[10, 10, 10]} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={0.5}
          castShadow
          shadow-mapsize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.4 : 0.75}
          position={isMobile ? [0, -3, -0.7] : [0, -3.4, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    //mediaQuery reutrns object

    setIsMobile(mediaQuery.matches);

    //To handle changes in the width immediately

    const handleMediaQueryChange = (event) => {
      //event reutrns object
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      {/* <div className="absolute"> */}
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          {/* <Preload all/> */}
        </Canvas>
      {/* </div> */}
    </>
  );
};

export default ComputerCanvas;
