import React from "react";
import Systeme from "../abstract/Systeme";
import Terre from "../astres/Terre";
import Lune from "../astres/Lune";

function SystemeTerrestre(props) {
    const rotationTerreSoleil = props.angle / 365;
    const rotationLune = props.angle / 28;

    return (
        <Systeme rotation={rotationTerreSoleil}>
            <Systeme position={props.position} rotation={rotationLune}>
                <Terre precision={15} radius={0.3} rotation={props.angle} position={[0, 0, 0]}/>
                <Lune precision={10} radius={0.1} rotation={props.angle} position={[-0.5, 0, 0]}/>
            </Systeme>
        </Systeme>
    );
}

export default SystemeTerrestre;
