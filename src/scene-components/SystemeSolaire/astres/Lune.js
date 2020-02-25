import React from 'react'
import Astre from "../abstract/Astre";
import utils from "../../../utils";

function Lune(props) {
    return (
        <Astre
            {...props}
            material={utils.files.loadPhongMaterial("/pictures/moon_1024.jpg")}
            radius={props.radius}
            precision={10}
            rotation={props.angle / 27}
        />
    )
}

export default Lune;
