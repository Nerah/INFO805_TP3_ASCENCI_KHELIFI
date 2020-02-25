import React from "react";
import {Canvas} from "react-three-fiber";
import {
    SystemeSolaire
} from "../../scene-components/ScenesComponents";

function SystemeSolaireScene(props) {
    const fractime = 0.8;
    const angle = fractime * Math.PI * 2;

    return (
        <Canvas style={{background: 'black'}}>
            <SystemeSolaire position={[0, 0, 0]} angle={angle}  />
        </Canvas>
    );
}

export default SystemeSolaireScene;
