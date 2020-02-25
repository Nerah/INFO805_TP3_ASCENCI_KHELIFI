import React from 'react'
import GlobeSystemeSolaire from "./GlobeSystemeSolaire";

function GlobeLumineuxSystemeSolaire(props) {
    return (
        <group position={props.position}>
            <pointLight specular={props.specular} position={props.position} />
            <GlobeSystemeSolaire
                position={props.position}
                material={props.material}
                radius={props.radius}
                precision={props.precision}
                rotation={props.rotation}
            />
        </group>
    )
}

export default GlobeLumineuxSystemeSolaire;
