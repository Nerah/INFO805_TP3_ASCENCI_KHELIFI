import React from 'react'
import GlobeSystemeSolaire from "../abstract/GlobeSystemeSolaire";
import utils from "../../../utils";

function PlaneteLune(props) {
    return (
        <GlobeSystemeSolaire
            {...props}
            material={utils.files.loadPhongMaterial("/pictures/moon_1024.jpg")}
            radius={0.1}
            precision={10}
            rotation={props.angle / 27}
        />
    )
}

export default PlaneteLune;
