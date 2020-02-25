import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";
import SystemeTerrestre from "./systemes/SystemeTerrestre";
import {Soleil} from "../../scene-components";

function SystemeSolaire(props) {
    const fractime = 0.7;
    const angle = fractime * Math.PI * 2;

    const sSolaire = useRef();
    useFrame(() => sSolaire.current.rotation.y += angle / 365);

    return (
        <group ref={sSolaire} position={[0, 0, 0]}>
            <Soleil angle={props.angle} position={[0, 0, 0]}/>
            <SystemeTerrestre position={[0, 0, -4]} angle={angle} />
        </group>
    );
}

export default SystemeSolaire;
