import React, {useRef} from 'react'
import {useFrame} from 'react-three-fiber'
import {SphereGeometry} from "three";

function GlobeSystemeSolaire(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const material = props.material;
    // Create the cube geometry
    let geometry = new SphereGeometry(props.radius, props.precision, props.precision);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.y += props.rotation));

    return (
        <mesh
            position={props.position}
            ref={mesh}
            geometry={geometry}
            material={material}
        />
    )
}

export default GlobeSystemeSolaire;
