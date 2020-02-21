import React, {Component} from "react";
import {
    PlaneteTerre,
    PlaneteLune
} from "../../../scene-components";

class SystemeTerrestre extends Component {
    render() {
        return (
            <group {...this.props}>
                <PlaneteTerre position={[0, 0, 0]}/>
                <PlaneteLune position={[-2, 0, 0]}/>
            </group>
        );
    }
}

export default SystemeTerrestre;
