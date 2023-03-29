//@ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/laptop2.glb --types --ts
*/

import { Html, useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import Typing, { TypingProps } from "./Typing";
type GLTFResult = GLTF & {
    nodes: {
        立方体: THREE.Mesh;
        立方体002: THREE.Mesh;
        平面: THREE.Mesh;
        立方体006: THREE.Mesh;
        平面001: THREE.Mesh;
        立方体001: THREE.Mesh;
        立方体016: THREE.Mesh;
        立方体028: THREE.Mesh;
        立方体029: THREE.Mesh;
        立方体030: THREE.Mesh;
        立方体031: THREE.Mesh;
        立方体032: THREE.Mesh;
        立方体034: THREE.Mesh;
        立方体035: THREE.Mesh;
        立方体036: THREE.Mesh;
        立方体037: THREE.Mesh;
        立方体050: THREE.Mesh;
        立方体076: THREE.Mesh;
        立方体077: THREE.Mesh;
        立方体078: THREE.Mesh;
    };
    materials: {
        ["マテリアル.001"]: THREE.MeshStandardMaterial;
        マテリアル: THREE.MeshStandardMaterial;
    };
};

type ActionName =
    | "立方体.001Action"
    | "立方体.016Action"
    | "立方体.028Action"
    | "立方体.029Action"
    | "立方体.030Action"
    | "立方体.031Action"
    | "立方体.032Action"
    | "立方体.034Action"
    | "立方体.035Action"
    | "立方体.036Action"
    | "立方体.037Action"
    | "1"
    | "立方体.076Action"
    | "立方体.077Action"
    | "立方体.078Action";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Model(props: TypingProps) {
    const group = useRef<THREE.Group>();
    const { nodes, materials, animations } = useGLTF(
        "/laptop.glb"
    ) as GLTFResult;
    const { actions } = useAnimations<GLTFActions>(animations, group);
    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="立方体"
                    geometry={nodes.立方体.geometry}
                    material={materials["マテリアル.001"]}
                />
                <mesh
                    name="立方体002"
                    geometry={nodes.立方体002.geometry}
                    material={materials["マテリアル.001"]}
                />
                <mesh
                    name="平面"
                    geometry={nodes.平面.geometry}
                    material={materials["マテリアル.001"]}
                    position={[0, -0.01, 0]}
                />
                <mesh
                    name="立方体006"
                    geometry={nodes.立方体006.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.95, 0.64, 0]}
                    rotation={[0, 0, 1.95]}
                />
                <mesh
                    name="平面001"
                    material={materials.マテリアル}
                    position={[-1, 1, 0]}
                >
                    <Html
                        occlude
                        transform
                        scale={[0.3, 0.3, 0.3]}
                        rotation={[0, (-Math.PI / 2) * 3, 0]}
                    >
                        <Typing {...props} />
                    </Html>
                </mesh>
                <mesh
                    name="立方体001"
                    geometry={nodes.立方体001.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体016"
                    geometry={nodes.立方体016.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体028"
                    geometry={nodes.立方体028.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体029"
                    geometry={nodes.立方体029.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体030"
                    geometry={nodes.立方体030.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体031"
                    geometry={nodes.立方体031.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体032"
                    geometry={nodes.立方体032.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体034"
                    geometry={nodes.立方体034.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体035"
                    geometry={nodes.立方体035.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体036"
                    geometry={nodes.立方体036.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体037"
                    geometry={nodes.立方体037.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体050"
                    geometry={nodes.立方体050.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体076"
                    geometry={nodes.立方体076.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体077"
                    geometry={nodes.立方体077.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
                <mesh
                    name="立方体078"
                    geometry={nodes.立方体078.geometry}
                    material={materials["マテリアル.001"]}
                    position={[-0.14, -0.18, 0.87]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/laptop.glb");