import React from "react";
import {
    Box
} from "../../scene-components";
import Scene from "../Scene";

function Boxes() {
    return (
        <Scene>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]}/>
            <Box position={[1.2, 0, 0]}/>
        </Scene>
    );
}

export default Boxes;
