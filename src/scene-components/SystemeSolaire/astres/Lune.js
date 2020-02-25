import React from 'react'
import Astre from "../abstract/Astre";
import utils from "../../../utils";

function Lune(props) {
    return (
        <Astre
            {...props}
            material={utils.material.loadPhongMaterial("/pictures/moon_1024.jpg")}
            radius={props.radius}
            precision={props.precision}
            rotation={props.rotation / 27}
        />
    )
}

export default Lune;
