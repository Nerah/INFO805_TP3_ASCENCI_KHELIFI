import React from 'react'
import Astre from "./Astre";

function AstreLumineux(props) {
    return (
        <group position={props.position}>
            <pointLight specular={props.specular} position={props.position} />
            <Astre {...props} />
        </group>
    )
}

export default AstreLumineux;
