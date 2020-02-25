import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";
import SystemeTerrestre from "./SystemeTerrestre";
import {Soleil} from "../../../scene-components";

function SystemeSolaire(props) {
    const sSolaire = useRef();
    useFrame(() => sSolaire.current.rotation.y += props.angle / 365);

    return (
        <group ref={sSolaire} position={[0, 0, 0]}>
            <Soleil precision={30} specular={0xFFF} radius={1} rotation={props.angle} position={[0, 0, 0]}/>
            <SystemeTerrestre position={[0, 0, -4]} angle={props.angle} />
        </group>
    );
}

export default SystemeSolaire;
