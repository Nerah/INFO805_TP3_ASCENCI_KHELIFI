import React, {Component} from "react";
import {
    PlaneteSoleil
} from "../../../scene-components";

class SystemeSoleil extends Component {
    render() {
        return (
            <group {...this.props}>
                <pointLight specular={0xFFFFFF} position={[0, 0, 0]} />
                <PlaneteSoleil position={[0, 0, 0]}/>
            </group>
        );
    }
}

export default SystemeSoleil;
