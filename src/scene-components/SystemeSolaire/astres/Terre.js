import React from 'react'
import Astre from "../abstract/Astre";
import utils from "../../../utils";

function Terre(props) {
    return (
        <Astre
            {...props}
            material={utils.files.loadPhongMaterial("/pictures/earth_atmos_2048.jpg")}
            radius={props.radius}
            precision={props.precision}
            rotation={props.angle}
        />
    )
}

export default Terre;
