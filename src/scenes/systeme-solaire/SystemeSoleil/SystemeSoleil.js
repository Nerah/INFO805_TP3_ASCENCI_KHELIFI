import React from "react";
import {
    PlaneteSoleil
} from "../../../scene-components";

function SystemeSoleil(props) {
    return (
        <group position={props.position}>
            <pointLight specular={0xFFFFFF} position={[0, 0, 0]} />
            <PlaneteSoleil position={[0, 0, 0]}/>
        </group>
    );
}

export default SystemeSoleil;
