import React, {useRef} from 'react'
import {useFrame} from 'react-three-fiber'
import {BoxGeometry, MeshBasicMaterial, TextureLoader} from "three";
import utils from "../../utils";

function WebGLBox(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const mapUrl = "/pictures/webgl-logo-256.jpg";
    let material = utils.files.loadBasicMaterial(mapUrl);
    // Create the cube geometry
    let geometry = new BoxGeometry(2, 2, 2);

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

export default WebGLBox;
