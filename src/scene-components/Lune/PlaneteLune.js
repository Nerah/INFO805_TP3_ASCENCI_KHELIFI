import React from 'react'
import GlobeSystemeSolaire from "../GlobeSystemeSolaire";
import utils from "../../utils";

function PlaneteLune(props) {
    return (
        <GlobeSystemeSolaire
            {...props}
            material={utils.files.loadPhongMaterial("/pictures/moon_1024.jpg")}
            radius={0.15}
            precision={10}
        />
    )
}

export default PlaneteLune;
