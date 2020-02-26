import React from 'react'
import Astre from "./Astre";

function AstreLumineux({specular = 0xFFF, ...props}) {
    return (
        <group position={props.position}>
            <pointLight specular={specular} position={props.position} />
            <Astre {...props} />
        </group>
    )
}

export default AstreLumineux;
