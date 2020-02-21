import React, {useRef} from 'react'
import {useFrame} from 'react-three-fiber'
import {SphereGeometry} from "three";
import utils from "../utils";

function GlobeSystemeSolaire(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const material = props.material;
    // Create the cube geometry
    let geometry = new SphereGeometry(props.radius, props.precision, props.precision);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh
            {...props}
            ref={mesh}
            geometry={geometry}
            material={material}
        />
    )
}

export default GlobeSystemeSolaire;
