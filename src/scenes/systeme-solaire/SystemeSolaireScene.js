import React from "react";
import {
    SystemeSolaire
} from "../../scene-components";
import Scene from "../Scene";

function SystemeSolaireScene() {
    const fractime = 0.8;
    const angle = fractime * Math.PI * 2;

    return (
        <Scene camPos={[0, 0, 20]} style={{background: 'black'}}>
            <SystemeSolaire position={[0, 0, 0]} angle={angle}  />
        </Scene>
    );
}

export default SystemeSolaireScene;
