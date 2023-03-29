// @ts-nocheck
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
export default function Key() {
    const router = useRouter();
    const group = useRef<THREE.Group>();

    const { scene, animations } = useGLTF("/key.glb");
    const { actions } = useAnimations(animations, group);
    useFrame(() => {
        if (router.query.key) {
            const routerQuery =
                typeof router.query.key == "string"
                    ? router.query.key
                    : router.query.key[0];
            actions[routerQuery].reset();
            actions[routerQuery].play();
            actions[routerQuery].repetitions = false;
            router.replace({ query: {} });
        }
    });

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    );
}
