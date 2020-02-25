import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";
import SystemeSoleil from "./SystemeSoleil/SystemeSoleil";
import SystemeTerrestre from "./SystemeTerrestre/SystemeTerrestre";

function SystemeSolaire(props) {
    const fractime = 0.8;
    const angle = fractime * Math.PI * 2;

    const sSolaire = useRef();
    useFrame(() => sSolaire.current.rotation.y += angle / 365);

    return (
        <group ref={sSolaire} position={[0, 0, 0]}>
            <SystemeSoleil position={[0, 0, 0]} angle={angle} />
            <SystemeTerrestre position={[0, 0, -3]} angle={angle} />
        </group>
    );
}

export default SystemeSolaire;
