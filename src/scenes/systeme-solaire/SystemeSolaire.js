import React, {Component} from "react";
import {Canvas} from "react-three-fiber";
import {
    PlaneteTerre
} from "../../scene-components";

class SystemeSolaire extends Component {
    render() {
        return (
            <Canvas style={{background: 'black'}}>
                <PlaneteTerre position={[-1.2, 0, 0]}/>
            </Canvas>
        );
    }
}

export default SystemeSolaire;
