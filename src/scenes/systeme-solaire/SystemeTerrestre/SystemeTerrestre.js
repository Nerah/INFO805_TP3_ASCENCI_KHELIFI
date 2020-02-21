import React from "react";
import {
    PlaneteTerre
} from "../../../scene-components";
import SystemeLunaire from "../SystemeLunaire/SystemeLunaire";

function SystemeTerrestre(props) {
    return (
        <group position={props.position}>
            <PlaneteTerre angle={props.angle} position={[0, 0, 0]}/>
            <SystemeLunaire angle={props.angle} position={[-2, 0, 0]}/>
        </group>
    );
}

export default SystemeTerrestre;
