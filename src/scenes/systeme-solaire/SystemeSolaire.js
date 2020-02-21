import React, {Component} from "react";
import {Canvas, Dom} from "react-three-fiber";
import {
    PlaneteTerre
} from "../../scene-components";
import PlaneteLune from "../../scene-components/Lune/PlaneteLune";
import {Group} from "three";
import PlaneteSoleil from "../../scene-components/PlaneteSoleil/PlaneteSoleil";

class SystemeSolaire extends Component {
    render() {
        return (
            <Canvas style={{background: 'black'}}>
                <pointLight specular={0xFFFFFF} position={[0, 0, 0]} />
                <PlaneteSoleil position={[0, 0, 0]}/>
                <PlaneteTerre position={[-5, 2, -5]}/>
                <PlaneteLune position={[-7, 2, -5]}/>
            </Canvas>
        );
    }
}

export default SystemeSolaire;
