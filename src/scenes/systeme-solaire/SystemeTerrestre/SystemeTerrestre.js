import React, {Component} from "react";
import {
    PlaneteTerre
} from "../../../scene-components";
import SystemeLunaire from "../SystemeLunaire/SystemeLunaire";

function SystemeTerrestre(props) {
    // TODO SystemeLunaire
    return (
        <group position={props.position}>
            <PlaneteTerre position={[0, 0, 0]}/>
            <SystemeLunaire position={[-2, 0, 0]}/>
        </group>
    );
}

export default SystemeTerrestre;
