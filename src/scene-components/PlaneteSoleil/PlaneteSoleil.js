import React from 'react'
import GlobeSystemeSolaire from "../GlobeSystemeSolaire";
import {Color, MeshBasicMaterial} from "three";

function PlaneteSoleil(props) {
    return (
        <GlobeSystemeSolaire
            {...props}
            material={new MeshBasicMaterial({ color: new Color('yellow'), transparent: false })}
            radius={1}
            precision={30}
        />
    )
}

export default PlaneteSoleil;
