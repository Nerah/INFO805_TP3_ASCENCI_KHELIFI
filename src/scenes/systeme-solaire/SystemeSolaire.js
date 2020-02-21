import React, {Component} from "react";
import {Canvas} from "react-three-fiber";
import SystemeSoleil from "./SystemeSoleil/SystemeSoleil";
import SystemeTerrestre from "./SystemeTerrestre/SystemeTerrestre";

const fractime = 0.020;
const angle = fractime * Math.PI * 2;

function SystemeSolaire(props) {
    return (
        <Canvas style={{background: 'black'}}>
            <SystemeSoleil angle={angle} position={[0, 0, 0]}/>
            <SystemeTerrestre angle={angle} position={[-5, 2, -5]}/>
        </Canvas>
    );
}

export default SystemeSolaire;
