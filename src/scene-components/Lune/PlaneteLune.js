import React, {useRef} from 'react'
import {useFrame} from 'react-three-fiber'
import {SphereGeometry} from "three";
import utils from "../../utils";

function PlaneteLune(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const mapUrl = "/pictures/moon_1024.jpg";
    // Now, create a Basic material; pass in the map
    let material = utils.files.loadMaterial(mapUrl);
    // Create the cube geometry
    let geometry = new SphereGeometry(0.15, 10, 10);

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

export default PlaneteLune;
