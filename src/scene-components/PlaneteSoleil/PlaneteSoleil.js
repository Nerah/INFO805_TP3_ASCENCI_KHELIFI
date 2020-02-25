import React from 'react'
import utils from "../../utils";
import GlobeLumineuxSystemeSolaire from "../GlobeLumineuxSystemeSolaire";

function PlaneteSoleil(props) {
    return (
        <GlobeLumineuxSystemeSolaire
            position={props.position}
            material={utils.files.loadBasicMaterial("/pictures/sun.jpg")}
            radius={1}
            precision={30}
            rotation={props.angle / 26}
            specular={0xFFF}
        />
    )
}

export default PlaneteSoleil;
