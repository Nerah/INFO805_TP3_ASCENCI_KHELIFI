import React, {useRef, useState} from 'react'
import {useFrame} from 'react-three-fiber'
import {Camera, SphereGeometry, Vector3} from "three";

function Astre({position = [0, 0, 0], ...props}) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const material = props.material;
    // Create the cube geometry
    let geometry = new SphereGeometry(props.radius, props.precision, props.precision);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.y += props.rotation));

    return (
        <mesh
            position={position}
            ref={mesh}
            geometry={geometry}
            material={material}
            onClick={e => setCameraPosition(e.camera, mesh.current.matrixWorld.getPosition())}
        />
    )
}

function setCameraPosition(camera : Camera, position : Vector3) : void {
    console.log(camera, position);
    camera.lookAt(position);
}

export default Astre;
