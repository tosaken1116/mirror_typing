import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function Camera() {
    const controlsRef: any = useRef();

    useFrame(() => {
        // ドラッグ中でなければOrbitControlsを更新する
        controlsRef.current.update();
        // animation.key.play();
    });
    return (
        <OrbitControls
            ref={controlsRef}
            enableDamping
            enablePan={false}
            maxDistance={1000}
            minDistance={1}
        />
    );
}
