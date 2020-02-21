import React, {Component} from "react";
import {Canvas} from "react-three-fiber";
import {
    PlaneteTerre
} from "../../scene-components";
import PlaneteLune from "../../scene-components/Lune/PlaneteLune";

class SystemeSolaire extends Component {
    render() {
        return (
            <Canvas style={{background: 'black'}}>
                <pointLight specular={0xFFFFFF} position={[0, 0, 5]} />
                <PlaneteTerre position={[-1.2, 0, 0]}/>
                <PlaneteLune position={[-3, 0, 0]}/>
            </Canvas>
        );
    }
}

export default SystemeSolaire;
