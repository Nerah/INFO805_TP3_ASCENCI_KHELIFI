import React from 'react'
import GlobeSystemeSolaire from "../GlobeSystemeSolaire";
import utils from "../../utils";

function PlaneteSoleil(props) {
    return (
        <GlobeSystemeSolaire
            {...props}
            material={utils.files.loadBasicMaterial("/pictures/sun.jpg")}
            radius={1}
            precision={30}
        />
    )
}

export default PlaneteSoleil;
