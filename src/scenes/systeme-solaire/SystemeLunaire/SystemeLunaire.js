import React from "react";
import {
    PlaneteLune
} from "../../../scene-components";

function SystemeLunaire(props) {
    return (
        <group position={props.position}>
            <PlaneteLune position={[0, 0, 0]}/>
        </group>
    );
}

export default SystemeLunaire;
