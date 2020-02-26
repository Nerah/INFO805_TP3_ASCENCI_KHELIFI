import React from "react";
import SystemeTerrestre from "./SystemeTerrestre";
import Systeme from "../abstract/Systeme";
import Soleil from "../astres/Soleil";

function SystemeSolaire(props) {
    return (
        <Systeme position={[0, 0, 0]} rotation={0}>
            <Soleil precision={30} specular={0xFFF} radius={1} rotation={props.angle} position={[0, 0, 0]}/>
            <SystemeTerrestre position={[0, 0, -4]} angle={props.angle} />
        </Systeme>
    );
}

export default SystemeSolaire;
