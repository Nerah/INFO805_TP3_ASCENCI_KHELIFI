import React, {Component} from "react";
import {Canvas, Dom} from "react-three-fiber";
import {
    PlaneteTerre
} from "../../scene-components";
import PlaneteLune from "../../scene-components/Lune/PlaneteLune";
import {Group} from "three";

class SystemeSolaire extends Component {
    render() {
        return (
            <Canvas style={{background: 'black'}}>
                <pointLight specular={0xFFFFFF} position={[0, 0, 0]} />
                <PlaneteTerre position={[-1.2, 0, -5]}/>
                <PlaneteLune position={[-3, 0, -5]}/>
            </Canvas>
        );
    }
}

export default SystemeSolaire;
