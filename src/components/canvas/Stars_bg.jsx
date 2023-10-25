import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars_bg = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 1.2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, 0.78]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled instanced {...props}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas_bg = () => {
    return (
        <div className="w-full h-full fixed top-0 z-[-10]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars_bg />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas_bg;

//FIXED STARS

// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";

// const StarsCanvas_bg = () => {
//     return (
//         <div className="w-full h-full fixed top-0 right-0 bottom-0 left-0 z-[-10]">
//             <Canvas camera={{ position: [0, 0, 1] }}>
//                 <Suspense fallback={null}>
//                     <Stars
//                         radius={50} // Radius of the inner sphere (default=100)
//                         depth={50}
//                         count={1500}
//                         factor={5}
//                         saturation={1}
//                         fade={true}
//                         speed={1}
//                     />
//                 </Suspense>
//             </Canvas>
//         </div>
//     );
// };

// export default StarsCanvas_bg;

