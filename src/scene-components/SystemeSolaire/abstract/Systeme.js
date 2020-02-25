import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";

function Systeme(props) {
    const systeme = useRef();
    useFrame(() => systeme.current.rotation.y += props.rotation);

    return (
        <group ref={systeme} position={props.position}>
            {props.children}
        </group>
    );
}

export default Systeme;
