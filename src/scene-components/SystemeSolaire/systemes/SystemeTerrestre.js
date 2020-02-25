import React from "react";
import Systeme from "../abstract/Systeme";
import Terre from "../astres/Terre";
import Lune from "../astres/Lune";

function SystemeTerrestre(props) {
    const rotation = props.angle / 28;

    return (
        <Systeme position={props.position} rotation={rotation}>
            <Terre precision={15} radius={0.3} rotation={props.angle} position={[0, 0, 0]}/>
            <Lune precision={10} radius={0.1} rotation={props.angle} position={[-0.5, 0, 0]}/>
        </Systeme>
    );
}

export default SystemeTerrestre;
