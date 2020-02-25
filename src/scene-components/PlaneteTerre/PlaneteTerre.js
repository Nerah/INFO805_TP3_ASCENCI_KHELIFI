import React from 'react'
import GlobeSystemeSolaire from "../GlobeSystemeSolaire";
import utils from "../../utils";

function PlaneteTerre(props) {
    return (
        <GlobeSystemeSolaire
            {...props}
            material={utils.files.loadPhongMaterial("/pictures/earth_atmos_2048.jpg")}
            radius={0.3}
            precision={15}
            rotation={props.angle}
        />
    )
}

export default PlaneteTerre;
