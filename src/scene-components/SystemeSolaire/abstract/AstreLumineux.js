import React from 'react'
import Astre from "./Astre";

function AstreLumineux(props) {
    return (
        <group position={props.position}>
            <pointLight specular={props.specular} position={props.position} />
            <Astre
                position={props.position}
                material={props.material}
                radius={props.radius}
                precision={props.precision}
                rotation={props.rotation}
            />
        </group>
    )
}

export default AstreLumineux;
