import React, {useRef} from 'react'
import {useFrame} from 'react-three-fiber'
import {BoxGeometry, MeshBasicMaterial, TextureLoader} from "three";

function WebGLBox(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const mapUrl = "/pictures/webgl-logo-256.jpg";
    console.log(mapUrl);
    const map = new TextureLoader().load(mapUrl);
    // Now, create a Basic material; pass in the map
    let material = new MeshBasicMaterial({ map: map });
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
