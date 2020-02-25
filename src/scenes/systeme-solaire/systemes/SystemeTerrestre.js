import React, {useRef} from "react";
import {
    PlaneteLune,
    PlaneteTerre
} from "../../../scene-components";
import {useFrame} from "react-three-fiber";

function SystemeTerrestre(props) {
    const sysTerre = useRef();
    useFrame(() => (sysTerre.current.rotation.y += props.angle / 28));

    return (
        <group ref={sysTerre} position={props.position}>
            <PlaneteTerre angle={props.angle} position={[0, 0, 0]}/>
            <PlaneteLune angle={props.angle} position={[-0.5, 0, 0]}/>
        </group>
    );
}

export default SystemeTerrestre;
