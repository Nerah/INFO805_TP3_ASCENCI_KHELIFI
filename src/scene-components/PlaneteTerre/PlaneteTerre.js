import React from 'react'
import GlobeSystemeSolaire from "../GlobeSystemeSolaire";
import utils from "../../utils";

function PlaneteTerre(props) {
    return (
        <GlobeSystemeSolaire
            {...props}
            material={utils.files.loadMaterial("/pictures/earth_atmos_2048.jpg")}
            radius={1}
            precision={15}
        />
    )
}

export default PlaneteTerre;
