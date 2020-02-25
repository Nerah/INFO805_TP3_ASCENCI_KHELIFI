import React from 'react'
import Astre from "../abstract/Astre";
import utils from "../../../utils";

function PlaneteLune(props) {
    return (
        <Astre
            {...props}
            material={utils.files.loadPhongMaterial("/pictures/moon_1024.jpg")}
            radius={0.1}
            precision={10}
            rotation={props.angle / 27}
        />
    )
}

export default PlaneteLune;
