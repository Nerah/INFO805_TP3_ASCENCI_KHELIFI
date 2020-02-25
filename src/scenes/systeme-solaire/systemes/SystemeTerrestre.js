import React, {useRef} from "react";
import {
    Lune,
    Terre
} from "../../../scene-components";
import {useFrame} from "react-three-fiber";

function SystemeTerrestre(props) {
    const sysTerre = useRef();
    useFrame(() => (sysTerre.current.rotation.y += props.angle / 28));

    return (
        <group ref={sysTerre} position={props.position}>
            <Terre radius={0.3} angle={props.angle} position={[0, 0, 0]}/>
            <Lune radius={0.1} angle={props.angle} position={[-0.5, 0, 0]}/>
        </group>
    );
}

export default SystemeTerrestre;
