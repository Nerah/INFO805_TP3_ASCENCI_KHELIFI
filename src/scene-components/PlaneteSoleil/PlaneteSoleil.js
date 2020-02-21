import React from 'react'
import GlobeSystemeSolaire from "../GlobeSystemeSolaire";
import utils from "../../utils";

function PlaneteSoleil(props) {
    return (
        <GlobeSystemeSolaire
            position={props.position}
            material={utils.files.loadBasicMaterial("/pictures/sun.jpg")}
            radius={1}
            precision={30}
            rotation={props.angle / 26}
        />
    )
}

export default PlaneteSoleil;
