import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";

function Systeme({rotation = 0, ...props}) {
    const systeme = useRef();
    useFrame(() => systeme.current.rotation.y += rotation);

    return (
        <group ref={systeme} position={props.position}>
            {props.children}
        </group>
    );
}

export default Systeme;
