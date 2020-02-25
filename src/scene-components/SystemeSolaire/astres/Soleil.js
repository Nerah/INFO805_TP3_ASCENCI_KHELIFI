import React from 'react'
import utils from "../../../utils";
import AstreLumineux from "../abstract/AstreLumineux";

function Soleil(props) {
    return (
        <AstreLumineux
            position={props.position}
            material={utils.files.loadBasicMaterial("/pictures/sun.jpg")}
            radius={props.radius}
            precision={30}
            rotation={props.angle / 26}
            specular={props.specular}
        />
    )
}

export default Soleil;
