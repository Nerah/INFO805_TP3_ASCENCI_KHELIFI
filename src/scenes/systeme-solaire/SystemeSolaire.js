import React from "react";
import {Canvas} from "react-three-fiber";
import SystemeSoleil from "./SystemeSoleil/SystemeSoleil";
import SystemeTerrestre from "./SystemeTerrestre/SystemeTerrestre";

const fractime = 0.005;
const angle = fractime * Math.PI * 2;

function SystemeSolaire(props) {
    return (
        <Canvas style={{background: 'black'}}>
            <SystemeSoleil position={[0, 0, 0]} angle={angle} />
            <SystemeTerrestre position={[-5, 2, -5]} angle={angle} />
        </Canvas>
    );
}

export default SystemeSolaire;
