import React, {Component} from "react";
import {Canvas} from "react-three-fiber";
import SystemeSoleil from "./SystemeSoleil/SystemeSoleil";
import SystemeTerrestre from "./SystemeTerrestre/SystemeTerrestre";

class SystemeSolaire extends Component {
    render() {
        return (
            <Canvas style={{background: 'black'}}>
                <SystemeSoleil position={[0, 0, 0]}/>
                <SystemeTerrestre position={[-5, 2, -5]}/>
            </Canvas>
        );
    }
}

export default SystemeSolaire;
