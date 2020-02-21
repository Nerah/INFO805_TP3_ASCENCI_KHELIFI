import React, {Component} from "react";
import {
    PlaneteTerre,
    PlaneteLune
} from "../../../scene-components";

function SystemeTerrestre(props) {
    // TODO SystemeLunaire
    return (
        <group position={props.position}>
            <PlaneteTerre position={[0, 0, 0]}/>
            <PlaneteLune position={[-2, 0, 0]}/>
        </group>
    );
}

export default SystemeTerrestre;
